import type { ReviewCardData, ReviewsPayload } from '@/lib/googleReviewTypes'
// The agency's monthly five-card fallback is maintained in this shared module.
import { staticGoogleReviews } from '@/lib/approvedGoogleReviews'

export const dynamic = 'force-dynamic'

const noStoreHeaders = {
  'Cache-Control': 'private, no-store, max-age=0',
  'CDN-Cache-Control': 'no-store',
  'Vercel-CDN-Cache-Control': 'no-store',
}

interface PlacesReview {
  name?: string
  rating?: number
  text?: { text?: string }
  originalText?: { text?: string }
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string }
  googleMapsUri?: string
}

interface PlaceDetails {
  reviews?: PlacesReview[]
  rating?: number
  userRatingCount?: number
  attributions?: { provider?: string; providerUri?: string }[]
}

function httpsUri(value?: string) {
  if (!value || !URL.canParse(value)) return undefined
  return new URL(value).protocol === 'https:' ? value : undefined
}

function mapReviews(place: PlaceDetails, placeId: string): ReviewsPayload {
  const reviews: ReviewCardData[] = []
  for (const review of place.reviews || []) {
    const id = review.name
    const original = review.originalText?.text
    const text = original?.trim() ? original : review.text?.text
    if (!id?.startsWith(`places/${placeId}/reviews/`) || review.rating !== 5 || !text?.trim()) continue
    const author = review.authorAttribution
    reviews.push({
      id,
      name: author?.displayName || 'Google Maps reviewer',
      text,
      rating: review.rating,
      photoUri: httpsUri(author?.photoUri),
      profileUri: httpsUri(author?.uri),
      reviewUri: httpsUri(review.googleMapsUri),
    })
  }
  const attributions: ReviewsPayload['attributions'] = []
  for (const attribution of place.attributions || []) {
    const uri = httpsUri(attribution.providerUri)
    const name = attribution.provider || uri
    if (name) attributions.push({ name, uri })
  }
  const { rating, userRatingCount } = place
  const googleSummary = typeof rating === 'number' && rating >= 1 && rating <= 5
    && typeof userRatingCount === 'number' && Number.isSafeInteger(userRatingCount) && userRatingCount > 0
    ? { rating, count: userRatingCount } : undefined
  if (!reviews.length) {
    return googleSummary ? { ...staticGoogleReviews, googleSummary, attributions } : staticGoogleReviews
  }
  return { source: 'google', reviews, attributions, googleSummary }
}

async function loadReviews(): Promise<ReviewsPayload> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID
  const limit = Number(process.env.GOOGLE_REVIEWS_MONTHLY_LIMIT)
  if (!apiKey || !placeId || !Number.isInteger(limit) || limit < 1 || limit > 1000) return staticGoogleReviews
  // Maps CIDs and Cloud project numbers are numeric and cannot identify a Place Details resource.
  if (/^\d+$/.test(placeId) || !/^[a-zA-Z0-9_-]+$/.test(placeId)) return staticGoogleReviews

  // Reserve every upstream attempt, even when Google's call later fails or times out.
  const { createAdminClient } = await import('@/lib/supabase')
  const { data: reserved, error } = await createAdminClient()
    .rpc('becker_reserve_places_review_request', { p_monthly_limit: limit })
    .abortSignal(AbortSignal.timeout(3000))
  if (error || reserved !== true) return staticGoogleReviews

  const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    headers: { 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': 'reviews,attributions,rating,userRatingCount' },
    cache: 'no-store',
    redirect: 'error',
    signal: AbortSignal.timeout(5000),
  })
  if (!response.ok) return staticGoogleReviews
  return mapReviews(await response.json(), placeId)
}

export async function GET() {
  try {
    return Response.json(await loadReviews(), { headers: noStoreHeaders })
  } catch {
    return Response.json(staticGoogleReviews, { headers: noStoreHeaders })
  }
}

// A status probe never needs a billed review request.
export function HEAD() {
  return new Response(null, { headers: noStoreHeaders })
}
