import Link from 'next/link'
import reviews from './zillow-reviews.json'
import ZillowReviewCard from './ZillowReviewCard'
import styles from './ZillowReviews.module.css'

export default function ProgramReviews({ reviewers }: { reviewers: string[] }) {
  const selected = reviews.filter(review => reviewers.includes(review.name))
  if (!selected.length) return null

  return (
    <section id="borrower-reviews" aria-labelledby="borrower-reviews-title" className={`${styles.program} mt-12 scroll-mt-24 text-center`}>
      <h3 id="borrower-reviews-title" className="mb-6 text-2xl font-bold md:text-3xl" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
        What borrowers say about Jamie on Zillow
      </h3>
      <ul className="grid gap-5 sm:grid-cols-2">
        {selected.map(review => <ZillowReviewCard key={review.name} review={review} heading="h4" />)}
      </ul>
      <Link href="/#becker-home-reviews" className="mt-6 inline-block font-semibold underline underline-offset-4">
        More borrower reviews
      </Link>
    </section>
  )
}
