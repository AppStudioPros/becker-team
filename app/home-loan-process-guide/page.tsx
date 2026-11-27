import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colorado Home Loan Process Guide',
  description:
    'A step-by-step guide to the home loan process with The Becker Team. From pre-qualification to closing — Jamie Becker, NMLS #794730.',
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get a Home Loan — Step-by-Step Process',
  description: 'A complete step-by-step guide to the home loan process with The Becker Team. From pre-qualification to closing.',
  url: 'https://www.thebeckerteam.com/home-loan-process-guide',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0', description: 'Free consultation' },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Find Out How Much You Can Borrow',
      text: 'Start with an estimate of what you can borrow and a monthly payment you’re comfortable with. A pre-approval letter can support your offer. The lender still needs to approve the loan and property.',
      url: 'https://www.thebeckerteam.com/home-loan-process-guide#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Select the Right Loan Program',
      text: 'Choose from VA, FHA, conventional, jumbo, self-employed, asset qualifier, or Mortgage Accelerator loans based on your situation.',
      url: 'https://www.thebeckerteam.com/home-loan-process-guide#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Apply for a Loan',
      text: 'Complete your mortgage application. We’ll tell you which income, asset and identification documents your lender needs for the loan you’re applying for.',
      url: 'https://www.thebeckerteam.com/home-loan-process-guide#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Begin Loan Processing',
      text: 'Your file moves to processing and underwriting. An underwriter reviews your documents and the property appraisal. Avoid major financial changes during this stage.',
      url: 'https://www.thebeckerteam.com/home-loan-process-guide#step-4',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Closing',
      text: 'Review the Closing Disclosure before signing the final loan documents. Check the amount you need to bring and confirm the date with your closing agent.',
      url: 'https://www.thebeckerteam.com/home-loan-process-guide#step-5',
    },
  ],
}

export default function ProcessGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#1F2E2A' }} className="py-24 px-6 text-center text-white">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Home Loan Process Guide
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Understanding each step of the mortgage process helps you move faster, avoid surprises, and close with confidence.
        </p>
      </section>

      {/* ── Step 1 — Find Out How Much You Can Borrow ── */}
      <section className="py-14 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left — step number + heading + description */}
          <div>
            <p
              className="text-8xl font-bold leading-none mb-2 select-none"
              style={{ color: '#1F2E2A', opacity: 0.08 }}
            >
              01
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 -mt-8"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
            >
              Find Out How Much You Can Borrow
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Start with what you may be able to borrow and a monthly payment you feel comfortable with.
              If you&apos;re ready to make an offer, a pre-approval letter can show the seller what a lender
              is tentatively willing to lend.
            </p>
          </div>

          {/* Right — dark card */}
          <div className="rounded p-8" style={{ backgroundColor: '#1F2E2A' }}>
            <a
              href="https://2179191.my1003app.com/794730/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center uppercase tracking-widest text-sm font-semibold px-6 py-4 rounded mb-8 transition-colors hover:opacity-90"
              style={{ backgroundColor: '#B98942', color: '#fff' }}
            >
              Pre-Qualify Now
            </a>

            {/* Info block styled as accordion (always open — server component) */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }} className="pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                More on Pre-Qualification
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Pre-qualification gives you an early estimate. Ask what information and credit review
                the lender needs for pre-approval. The lender still needs to approve the loan and
                property. Locking your rate is a separate step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 2 — Select the Right Loan Program ── */}
      <section className="py-14 md:py-20 px-6" style={{ backgroundColor: '#1F2E2A' }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-8xl font-bold leading-none mb-2 select-none"
            style={{ color: '#ffffff', opacity: 0.08 }}
          >
            02
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4 -mt-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Select the Right Loan Program
          </h2>
          <p className="text-white/80 mb-10 max-w-2xl leading-relaxed">
            Choosing the right loan affects your monthly payment, total cost, and long-term flexibility.
            The two main categories are fixed-rate and adjustable-rate mortgages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fixed Rate */}
            <div
              className="rounded border p-8"
              style={{ backgroundColor: '#F5EFE6', borderColor: '#ede4cc' }}
            >
              <h3
                className="text-xl font-bold mb-5"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
              >
                Fixed Rate
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Your interest rate stays the same for the life of the loan',
                  'Your principal and interest payment stays the same. Taxes and insurance can change.',
                  'Best for buyers planning to stay long-term',
                  'Rates are typically slightly higher than initial ARM rates',
                ].map((pt) => (
                  <li key={pt} className="text-sm flex items-start gap-2" style={{ color: '#1F2E2A' }}>
                    <span className="mt-0.5 shrink-0" style={{ color: '#B98942' }}>&#10003;</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Adjustable Rate (ARM) */}
            <div
              className="rounded border p-8"
              style={{ backgroundColor: '#F5EFE6', borderColor: '#ede4cc' }}
            >
              <h3
                className="text-xl font-bold mb-5"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
              >
                Adjustable Rate (ARM)
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  'After the initial fixed period, the rate can adjust on the schedule in your loan agreement. Some loans adjust every six months.',
                  'Initial rates are often lower than fixed rates',
                  'Check whether you could afford a higher payment if your plans to sell or refinance change',
                  'Rate caps limit how much your rate can increase',
                ].map((pt) => (
                  <li key={pt} className="text-sm flex items-start gap-2" style={{ color: '#1F2E2A' }}>
                    <span className="mt-0.5 shrink-0" style={{ color: '#B98942' }}>&#10003;</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 3 — Apply for a Loan ── */}
      <section className="py-14 md:py-20 px-6" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <p
              className="text-8xl font-bold leading-none mb-2 select-none"
              style={{ color: '#1F2E2A', opacity: 0.08 }}
            >
              03
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 -mt-8"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
            >
              Apply for a Loan
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Once you&apos;ve found a home and selected your program, it&apos;s time to formally apply.
              Your lender will pull your credit and verify all income, asset, and employment documentation.
            </p>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#1F2E2A' }}
            >
              Documents You May Need:
            </p>
            <ul className="flex flex-col gap-2">
              {[
                'W-2s, tax returns or other records that document your income',
                'Recent pay stubs if you earn wages',
                'Bank statements for the period your lender requests',
                'Photo ID',
                'Employment or business history',
              ].map((item) => (
                <li key={item} className="text-sm flex items-start gap-2 text-gray-700">
                  <span className="mt-0.5 shrink-0" style={{ color: '#B98942' }}>&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — dark apply card */}
          <div
            className="rounded p-8 flex flex-col items-center justify-center"
            style={{ backgroundColor: '#1F2E2A', minHeight: '220px' }}
          >
            <p
              className="text-white/70 text-sm uppercase tracking-widest text-center mb-6"
            >
              Ready to take the next step?
            </p>
            <a
              href="https://2179191.my1003app.com/794730/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded transition-colors hover:opacity-90"
              style={{ backgroundColor: '#B98942', color: '#fff' }}
            >
              Apply for a Loan
            </a>
          </div>
        </div>
      </section>

      {/* ── Step 4 — Begin Loan Processing ── */}
      <section className="py-14 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <p
              className="text-8xl font-bold leading-none mb-2 select-none"
              style={{ color: '#1F2E2A', opacity: 0.08 }}
            >
              04
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 -mt-8"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
            >
              Begin Loan Processing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              After your application is submitted, your file moves to processing. An underwriter reviews
              everything to confirm you meet the loan guidelines.
            </p>
          </div>

          {/* Right — amber tips card */}
          <div className="rounded p-8" style={{ backgroundColor: '#B98942' }}>
            <h3
              className="text-lg font-bold text-white mb-5"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Tips for Smooth Approval
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Don't make large deposits without documentation",
                "Don't open new credit accounts",
                "Don't make major purchases (cars, furniture)",
                "Don't change jobs during the process",
                'Do respond quickly to any requests for additional documents',
              ].map((tip) => (
                <li key={tip} className="text-sm flex items-start gap-2 text-white">
                  <span className="mt-0.5 shrink-0">&#10003;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Step 5 — Closing ── */}
      <section className="py-14 md:py-20 px-6" style={{ backgroundColor: '#1F2E2A' }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-8xl font-bold leading-none mb-2 select-none"
            style={{ color: '#ffffff', opacity: 0.08 }}
          >
            05
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4 -mt-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            At Closing, Be Prepared To:
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl leading-relaxed">
            Before you sign, compare the interest rate, monthly payment and cash to close on your Closing Disclosure with your Loan Estimate. For most home purchases, you must receive the Closing Disclosure at least three business days before signing.
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            {[
              'Bring a valid government-issued photo ID',
              'Bring a cashier\'s check or confirm wire transfer for closing costs',
              'Ask your lender about any costs that changed since your Loan Estimate',
              'All parties on the loan must be present or have Power of Attorney',
              'Be prepared for a final walkthrough of the property',
            ].map((item) => (
              <li key={item} className="text-sm flex items-start gap-3" style={{ color: '#F5EFE6' }}>
                <span
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: '#F5EFE6' }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Note box */}
          <div
            className="rounded p-6 max-w-2xl"
            style={{
              border: '2px solid #B98942',
              backgroundColor: 'rgba(185,137,66,0.12)',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <span className="font-semibold text-white">Note:</span> There is a mandatory
              3-business-day waiting period after you receive your Closing Disclosure before you can
              close. Plan accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="relative py-24 md:py-36 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.55), rgba(20,35,25,0.55)), url("/images/cta-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to get started?
        </h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Let&apos;s discuss your unique situation and find the perfect loan for you
        </p>
        <a
          href="https://2179191.my1003app.com/794730/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
          style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
        >
          Get Pre-Approved Now
        </a>
      </section>
    </>
  )
}
