import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | The Becker Team',
  description: 'Terms of use for The Becker Team, powered by Xpert Home Lending.',
}

export default function TermsPage() {
  return (
    <section style={{ backgroundColor: '#f5ecd8' }} className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
        >
          Terms of Use
        </h1>
        <div className="prose-becker">
          <p>
            By accessing and using thebeckerteam.com, you agree to the following terms and conditions.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}>
            General Use
          </h2>
          <p>
            This website is provided for informational purposes only. Content is subject to change
            without notice. Nothing on this site constitutes a commitment to lend or a guarantee of
            loan approval.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}>
            No Legal or Financial Advice
          </h2>
          <p>
            Content on this site is general in nature and does not constitute legal, financial, or tax
            advice. Consult a qualified professional before making any financial decision.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}>
            Intellectual Property
          </h2>
          <p>
            All content on this site, including text, graphics, and logos, is the property of The Becker
            Team or its licensors. Reproduction without written permission is prohibited.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}>
            Contact
          </h2>
          <p>
            Questions? Reach us at{' '}
            <a href="mailto:Jamie@thebeckerteam.com" style={{ color: '#c8960c' }} className="underline">
              Jamie@thebeckerteam.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
