import type { ReviewCardData, ReviewsPayload } from './googleReviewTypes'

type ApprovedReview = Pick<ReviewCardData, 'id' | 'name' | 'text'> & { rating: 5 }

// Update all five together, newest first. Use the reviewer's approved wording
// and display name. Keep their permission on file, outside the public site.
const approved: [] | [ApprovedReview, ApprovedReview, ApprovedReview, ApprovedReview, ApprovedReview] = []

export const staticGoogleReviews: ReviewsPayload = {
  source: 'testimonials',
  reviews: approved,
  attributions: [],
}
