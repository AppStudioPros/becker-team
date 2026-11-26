import type reviews from './zillow-reviews.json'
import styles from './ZillowReviews.module.css'

type Review = (typeof reviews)[number]

export default function ZillowReviewCard({ review, hidden, heading: Heading = 'h3' }: {
  review: Review
  hidden?: boolean
  heading?: 'h3' | 'h4'
}) {
  return (
    <li className={styles.card} aria-hidden={hidden || undefined}>
      <Heading className={styles.name}>{review.name}</Heading>
      <span className={styles.stars} style={{ width: review.rating * 16 }} role="img" aria-label={`${review.rating} out of 5 stars`} />
      <blockquote>“{review.quote}”</blockquote>
      <p>{review.city} <span aria-hidden="true">·</span> <time dateTime={review.date}>{review.dateLabel}</time></p>
    </li>
  )
}
