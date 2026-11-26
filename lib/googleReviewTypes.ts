export interface ReviewCardData {
  id: string
  name: string
  text: string
  rating?: number
  photoUri?: string
  profileUri?: string
  reviewUri?: string
}

export interface ReviewsPayload {
  source: 'google' | 'testimonials'
  reviews: ReviewCardData[]
  attributions: { name: string; uri?: string }[]
  googleSummary?: { rating: number; count: number }
}
