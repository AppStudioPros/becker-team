import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fair Lending Notice | The Becker Team',
  description:
    'Fair lending notice for The Becker Team — our commitment to equal credit opportunity, non-discrimination, and compliance with federal fair lending laws including ECOA and the Fair Housing Act.',
}

export default function FairLendingPage() {
  return (
    <section style={{ backgroundColor: '#F5EFE6' }} className="py-20 px-6 pt-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#B98942' }}>Legal</p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          Fair Lending Notice
        </h1>
        <p className="text-sm mb-10" style={{ color: '#4a5e53' }}>The Becker Team — Xpert Home Lending | NMLS #794730</p>

        <div className="prose-becker space-y-8">

          <div className="rounded p-6" style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6' }}>
            <p className="font-semibold text-lg mb-2" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Our Commitment to Equal Opportunity</p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,239,230,0.85)' }}>
              The Becker Team is committed to providing equal credit opportunity to all applicants. We do not discriminate on any basis prohibited by law, and we are committed to the principles of fair lending in everything we do.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Equal Credit Opportunity Act (ECOA)</h2>
            <p>The Equal Credit Opportunity Act (15 U.S.C. § 1691 et seq.) prohibits creditors from discriminating against credit applicants on the basis of:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm" style={{ color: '#3a5a4a' }}>
              <li>Race or color</li>
              <li>Religion</li>
              <li>National origin</li>
              <li>Sex or gender</li>
              <li>Marital status</li>
              <li>Age (provided the applicant is of legal age to contract)</li>
              <li>Receipt of income from public assistance programs</li>
              <li>Exercise of any right under the Consumer Credit Protection Act</li>
            </ul>
            <p>The federal agency that administers compliance with this law regarding The Becker Team and Xpert Home Lending is the <strong>Consumer Financial Protection Bureau (CFPB)</strong>, 1700 G Street NW, Washington, DC 20552.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Fair Housing Act</h2>
            <p>The Fair Housing Act (42 U.S.C. § 3601 et seq.) prohibits discrimination in residential real estate transactions — including mortgage lending — on the basis of:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm" style={{ color: '#3a5a4a' }}>
              <li>Race or color</li>
              <li>National origin</li>
              <li>Religion</li>
              <li>Sex</li>
              <li>Familial status (having children under 18 years of age)</li>
              <li>Disability or handicap</li>
            </ul>
            <p>We are proud to display the Equal Housing Opportunity logo and to uphold the principles it represents.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Home Mortgage Disclosure Act (HMDA)</h2>
            <p>The Home Mortgage Disclosure Act requires certain lenders to collect and report data about their mortgage lending activity. This data is used by regulators to identify potential patterns of discrimination and to ensure that lenders are meeting the credit needs of their communities.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Community Reinvestment Act (CRA)</h2>
            <p>The Community Reinvestment Act encourages financial institutions to help meet the credit needs of the communities in which they operate, including low- and moderate-income neighborhoods, consistent with safe and sound operations.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Our Fair Lending Practices</h2>
            <p>The Becker Team applies consistent underwriting standards and criteria to all loan applications. We evaluate applications based solely on creditworthiness criteria, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm" style={{ color: '#3a5a4a' }}>
              <li>Credit history and credit score</li>
              <li>Debt-to-income ratio</li>
              <li>Income and employment verification</li>
              <li>Assets and reserves</li>
              <li>Property value and type</li>
              <li>Loan-to-value ratio</li>
            </ul>
            <p>These criteria are applied uniformly to all applicants regardless of any characteristic protected by law.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">How to File a Complaint</h2>
            <p>If you believe you have been subjected to lending discrimination, you may file a complaint with:</p>
            <ul className="list-none space-y-3 text-sm" style={{ color: '#3a5a4a' }}>
              <li>
                <strong style={{ color: '#1F2E2A' }}>Consumer Financial Protection Bureau (CFPB)</strong><br />
                1700 G Street NW, Washington, DC 20552<br />
                Phone: 1-855-411-CFPB (2372)<br />
                <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#1F2E2A' }}>www.consumerfinance.gov</a>
              </li>
              <li>
                <strong style={{ color: '#1F2E2A' }}>U.S. Department of Housing and Urban Development (HUD)</strong><br />
                Office of Fair Housing and Equal Opportunity<br />
                451 7th Street SW, Washington, DC 20410<br />
                Phone: 1-800-669-9777<br />
                <a href="https://www.hud.gov/fairhousing" target="_blank" rel="noopener noreferrer" style={{ color: '#1F2E2A' }}>www.hud.gov/fairhousing</a>
              </li>
              <li>
                <strong style={{ color: '#1F2E2A' }}>Colorado Division of Real Estate (DORA)</strong><br />
                1560 Broadway, Suite 925, Denver, CO 80202<br />
                Phone: (303) 894-2166<br />
                <a href="https://dre.colorado.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#1F2E2A' }}>dre.colorado.gov</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Contact Us</h2>
            <p>If you have questions about our fair lending practices or believe you have experienced discrimination in connection with a mortgage application, please contact us directly:</p>
            <div className="rounded p-5 mt-2" style={{ backgroundColor: '#fff', border: '1px solid #ded6c4' }}>
              <p className="font-semibold" style={{ color: '#1F2E2A' }}>The Becker Team — Xpert Home Lending</p>
              <p style={{ color: '#4a5e53' }}>NMLS #794730 | Company NMLS #2179191</p>
              <p style={{ color: '#4a5e53' }}>201 Columbine Street, Suite 300, Denver, CO 80206</p>
              <p><a href="tel:7204923335" style={{ color: '#1F2E2A' }}>(720) 492-3335</a></p>
              <p><a href="mailto:Jamie@thebeckerteam.com" style={{ color: '#1F2E2A' }}>Jamie@thebeckerteam.com</a></p>
            </div>
          </div>

        </div>

        <div className="mt-12 flex gap-4 flex-wrap">
          <Link href="/privacy" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Privacy Policy</Link>
          <Link href="/terms" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Terms of Use</Link>
          <Link href="/accessibility" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Accessibility</Link>
        </div>
      </div>
    </section>
  )
}
