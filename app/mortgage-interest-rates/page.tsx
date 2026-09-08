import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Current Mortgage Interest Rates | The Becker Team Colorado',
  description:
    'View current mortgage interest rates in Colorado. Contact Jamie Becker for a personalized rate quote. NMLS #794730.',
}

export default function InterestRatesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ backgroundColor: '#1F2E2A' }} className="py-20 px-6 text-center text-white">
        <h1
          className="text-6xl md:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Current Mortgage Rates
        </h1>
        <p className="text-white/80 max-w-xl mx-auto">
          Rates change daily. Contact Jamie for a personalized quote based on your credit, loan type, and property.
        </p>
      </section>

      {/* ── Rates content ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Rate embed placeholder */}
          <div className="border border-dashed border-[#ede4cc] rounded py-16 text-center text-gray-400 mb-12 bg-white">
            <p className="text-sm">Live rate widget — paste your embed code here</p>
          </div>

          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            What Affects Your Rate?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              { title: 'Credit Score', body: 'Higher credit scores generally mean lower rates. The difference between a 680 and a 760 score can move your rate by half a point or more.' },
              { title: 'Loan Type', body: 'Conventional, FHA, VA, and jumbo loans each carry different rate structures. Specialty and non-QM products are priced differently as well.' },
              { title: 'Down Payment', body: 'Larger down payments reduce lender risk and can result in better pricing. 20% or more often unlocks the most competitive rates on conventional loans.' },
              { title: 'Loan Term', body: 'Shorter loan terms (15-year vs. 30-year) typically come with lower rates but higher monthly payments. The right term depends on your goals.' },
              { title: 'Property Type', body: 'Primary residences get the best rates. Second homes and investment properties carry a pricing adjustment.' },
              { title: 'Market Conditions', body: 'Mortgage rates move with the bond market, Federal Reserve policy, and broader economic data. Rates can shift daily.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded border p-6 bg-white"
                style={{ borderColor: '#ede4cc' }}
              >
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Ready to find out what rate you qualify for?
            </p>
            <a
              href="https://2179191.my1003app.com/794730/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
              style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #1F2E2A' }}
            >
              Get a Rate Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
