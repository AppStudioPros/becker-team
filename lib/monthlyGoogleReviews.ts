import type { ReviewCardData, ReviewsPayload } from './googleReviewTypes'

type LinkedReview = Pick<ReviewCardData, 'id' | 'name' | 'text'> & { rating: 5; reviewUri: string }

// Manually selected from Google Maps, newest first, November 26, 2026.
// Each topic describes the original review at its Share review link.
const reviews: [LinkedReview, LinkedReview, LinkedReview, LinkedReview, LinkedReview] = [
  {
    id: 'jon-dwight',
    name: 'Jon Dwight',
    rating: 5,
    text: 'Buying the next home before selling the current one, from a returning borrower’s perspective.',
    reviewUri: 'https://maps.app.goo.gl/9ZLj4Dx1taf8iawL7',
  },
  {
    id: 'sally-johnston',
    name: 'Sally Johnston',
    rating: 5,
    text: 'Working with Jamie on a home purchase, then coming back to refinance.',
    reviewUri: 'https://maps.app.goo.gl/YAf5un7AMdxHhL7A7',
  },
  {
    id: 'the-hiker',
    name: 'The Hiker',
    rating: 5,
    text: 'How Jamie approached problems and handled the details across several transactions.',
    reviewUri: 'https://maps.app.goo.gl/Y2ytZYJEeejqZPXh9',
  },
  {
    id: 'terri-wallinger',
    name: 'Terri Wallinger',
    rating: 5,
    text: 'A repeat client’s experience with how Jamie and his team kept the loan process moving.',
    reviewUri: 'https://maps.app.goo.gl/tGVSJZMtTnCWi4BC7',
  },
  {
    id: 'camille-carter',
    name: 'Camille Carter',
    rating: 5,
    text: 'Comparing lenders for a home purchase and talking through mortgage options and questions with Jamie.',
    reviewUri: 'https://maps.app.goo.gl/SuaVjake7h54eo3E8',
  },
]

export const staticGoogleReviews: ReviewsPayload = { source: 'review-links', reviews, attributions: [] }
