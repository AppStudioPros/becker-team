import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Becker Team',
  description:
    'Privacy policy for The Becker Team powered by Xpert Home Lending — how we collect, use, and protect your personal and financial information under the Gramm-Leach-Bliley Act.',
}

const EFFECTIVE = 'September 1, 2026'
const COMPANY = 'The Becker Team, powered by Xpert Home Lending (NMLS #2179191)'
const CONTACT_EMAIL = 'Jamie@thebeckerteam.com'
const CONTACT_PHONE = '(720) 492-3335'

export default function PrivacyPage() {
  return (
    <section style={{ backgroundColor: '#F5EFE6' }} className="py-20 px-6 pt-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#B98942' }}>Legal</p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: '#4a5e53' }}>Effective Date: {EFFECTIVE}</p>

        <div className="prose-becker space-y-8">

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">1. About This Policy</h2>
            <p>{COMPANY} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard personal and financial information we receive from you in connection with your use of this website and any mortgage products or services we provide.</p>
            <p>This policy is provided in compliance with the <strong>Gramm-Leach-Bliley Act (GLBA)</strong>, the <strong>California Consumer Privacy Act (CCPA)</strong> where applicable, and other applicable federal and state privacy laws.</p>
            <p>By using this website or applying for mortgage services, you consent to the practices described in this policy.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">2. Information We Collect</h2>
            <p>We may collect the following categories of nonpublic personal information (&ldquo;NPI&rdquo;) from you:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li><strong>Identity information:</strong> Name, date of birth, Social Security number, government-issued ID</li>
              <li><strong>Contact information:</strong> Address, phone number, email address</li>
              <li><strong>Financial information:</strong> Income, assets, employment, credit history, existing debt obligations</li>
              <li><strong>Transaction information:</strong> Details of the mortgage products or services you inquire about or apply for</li>
              <li><strong>Website usage information:</strong> IP address, browser type, pages visited, referring URLs, and cookies (non-financial)</li>
              <li><strong>Communications:</strong> Records of correspondence, inquiries, and form submissions</li>
            </ul>
            <p>We collect this information directly from you, from your application materials, from consumer reporting agencies, and from third parties involved in your mortgage transaction (such as appraisers, title companies, or other lenders).</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">3. How We Use Your Information</h2>
            <p>We use your personal and financial information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li>Evaluate and process your mortgage loan application</li>
              <li>Communicate with you about your inquiry, application, or loan</li>
              <li>Verify your identity and assess your creditworthiness</li>
              <li>Comply with applicable laws, regulations, and licensing requirements</li>
              <li>Maintain and service your loan if originated</li>
              <li>Respond to your questions and provide customer service</li>
              <li>Improve our website and service offerings</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">4. Information Sharing (GLBA Notice)</h2>
            <p>Under the Gramm-Leach-Bliley Act, we are required to tell you about the circumstances under which we may share your nonpublic personal information.</p>
            <p><strong>We may share your information with:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li><strong>Lenders and loan investors</strong> — to process, underwrite, and fund your mortgage loan</li>
              <li><strong>Service providers</strong> — such as title companies, appraisers, credit bureaus, and document processors who assist with your transaction</li>
              <li><strong>Government agencies and regulators</strong> — as required by law, court order, or regulatory requirement</li>
              <li><strong>Fraud prevention and compliance services</strong> — to protect against fraud and verify information accuracy</li>
            </ul>
            <p><strong>We do not sell your personal information</strong> to third parties for their own marketing purposes.</p>
            <p><strong>We do not share your information</strong> with unaffiliated third parties for marketing purposes without your authorization.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">5. Your Opt-Out Rights</h2>
            <p>Federal law gives you the right to limit certain — but not all — sharing of your personal financial information. You may opt out of sharing that is not required for servicing your account or required by law. To opt out or ask questions about information sharing, contact us at:</p>
            <ul className="list-none pl-0 space-y-1 text-sm" style={{ color: '#3a5a4a' }}>
              <li>📞 <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} style={{ color: '#1F2E2A' }}>{CONTACT_PHONE}</a></li>
              <li>📧 <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#1F2E2A' }}>{CONTACT_EMAIL}</a></li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">6. How We Protect Your Information</h2>
            <p>We maintain physical, electronic, and procedural safeguards to protect your nonpublic personal information in compliance with applicable federal standards. These include:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li>Encrypted data transmission (SSL/TLS) on this website</li>
              <li>Access controls limiting employee access to your information on a need-to-know basis</li>
              <li>Secure storage of physical and digital records</li>
              <li>Third-party vendor agreements requiring appropriate data protection standards</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">7. Cookies and Website Tracking</h2>
            <p>This website uses cookies and similar technologies to improve your browsing experience, analyze site traffic, and understand how visitors interact with our content. Cookies do not collect your financial information.</p>
            <p>You may disable cookies through your browser settings, though some website functionality may be affected. We do not use cookies for targeted advertising.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">8. Third-Party Links</h2>
            <p>This website may contain links to third-party websites, including our loan application portal. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies before submitting any information.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">9. Children&apos;s Privacy</h2>
            <p>This website is not directed at children under 13 years of age, and we do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">10. California Residents (CCPA Notice)</h2>
            <p>California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to request deletion, and the right to opt out of the sale of personal information. We do not sell personal information. To exercise your CCPA rights, contact us using the information below.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">11. Changes to This Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically. Your continued use of this website or our services following any changes constitutes acceptance of the updated policy.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or wish to exercise any of your rights, please contact us:</p>
            <div className="rounded p-5 mt-2" style={{ backgroundColor: '#fff', border: '1px solid #ded6c4' }}>
              <p className="font-semibold" style={{ color: '#1F2E2A' }}>The Becker Team — Xpert Home Lending</p>
              <p style={{ color: '#4a5e53' }}>NMLS #794730 | Company NMLS #2179191</p>
              <p style={{ color: '#4a5e53' }}>201 Columbine Street, Suite 300, Denver, CO 80206</p>
              <p><a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} style={{ color: '#1F2E2A' }}>{CONTACT_PHONE}</a></p>
              <p><a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#1F2E2A' }}>{CONTACT_EMAIL}</a></p>
            </div>
          </div>

          <p className="text-xs italic" style={{ color: '#5a6e64' }}>
            This privacy policy has been prepared for informational purposes. The Becker Team recommends periodic review by a qualified compliance professional to ensure continued compliance with applicable federal and state laws.
          </p>

        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/terms" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Terms of Use</Link>
          <Link href="/fair-lending" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Fair Lending Notice</Link>
          <Link href="/accessibility" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Accessibility</Link>
        </div>
      </div>
    </section>
  )
}
