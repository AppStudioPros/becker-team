import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Becker Team',
  description: 'Privacy policy for The Becker Team, powered by Xpert Home Lending.',
}

export default function PrivacyPage() {
  return (
    <section style={{ backgroundColor: '#f5ecd8' }} className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
        >
          Privacy Policy
        </h1>
        <div className="prose-becker">
          <p>
            The Becker Team, powered by Xpert Home Lending, is committed to protecting your personal
            information. This policy explains what information we collect, how we use it, and how we
            protect it.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}>
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly, such as your name, contact information, and
            financial details submitted through our application or inquiry forms.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}>
            How We Use Your Information
          </h2>
          <p>
            Information collected is used solely to process your mortgage inquiry or application, contact
            you about your loan, and comply with applicable legal and regulatory requirements.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}>
            Data Security
          </h2>
          <p>
            We use industry-standard security measures to protect your personal information. We do not
            sell or share your data with third parties for marketing purposes.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}>
            Contact
          </h2>
          <p>
            Questions about this policy? Contact us at{' '}
            <a href="mailto:Jamie@thebeckerteam.com" style={{ color: '#c8960c' }} className="underline">
              Jamie@thebeckerteam.com
            </a>{' '}
            or call <a href="tel:7204923335" style={{ color: '#c8960c' }} className="underline">(720) 492-3335</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
