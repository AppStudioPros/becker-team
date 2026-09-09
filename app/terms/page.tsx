import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | The Becker Team',
  description:
    'Terms of use for thebeckerteam.com — limitations of liability, content accuracy, and conditions for use of mortgage information provided on this site.',
}

const EFFECTIVE = 'September 1, 2026'

export default function TermsPage() {
  return (
    <section style={{ backgroundColor: '#F5EFE6' }} className="py-20 px-6 pt-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#B98942' }}>Legal</p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          Terms of Use
        </h1>
        <p className="text-sm mb-10" style={{ color: '#4a5e53' }}>Effective Date: {EFFECTIVE}</p>

        <div className="prose-becker space-y-8">

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using thebeckerteam.com (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this Site. These Terms apply to all visitors, users, and others who access or use the Site.</p>
            <p>The Becker Team, powered by Xpert Home Lending (NMLS #2179191), reserves the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">2. Purpose of This Site</h2>
            <p>This Site is provided for general informational purposes about mortgage products, services, and The Becker Team. Nothing on this Site constitutes:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li>A commitment to lend or a loan approval</li>
              <li>A guarantee of any interest rate or loan terms</li>
              <li>Legal, financial, or tax advice</li>
              <li>A completed loan application or agreement</li>
            </ul>
            <p>All mortgage products are subject to credit approval, income and asset verification, appraisal, lender guidelines, and applicable state and federal law. Rates and terms change frequently and are not guaranteed by information presented on this Site.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">3. Accuracy of Information</h2>
            <p>We strive to provide accurate, current information on this Site. However, we make no warranty, express or implied, regarding the accuracy, completeness, or timeliness of any content on this Site. Mortgage rates, program guidelines, loan limits, and other financial information change frequently. You should not rely solely on information found on this Site when making financial decisions.</p>
            <p>Please contact us directly to discuss your specific situation and to obtain current program information.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">4. Rate and Payment Information</h2>
            <p>Any interest rates, payment estimates, or loan amounts displayed on this Site (including on any mortgage calculator tools) are for illustrative purposes only and do not constitute a quote or commitment to lend. Actual rates depend on your credit profile, loan-to-value ratio, loan type, property type, and other underwriting factors at the time of application.</p>
            <p>All rates shown are subject to change without notice. Annual Percentage Rate (APR) will vary based on actual loan terms at closing.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">5. Intellectual Property</h2>
            <p>All content on this Site — including text, graphics, logos, images, and software — is the property of The Becker Team or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">6. Third-Party Links and Services</h2>
            <p>This Site may contain links to third-party websites and services, including our loan application portal (operated by Xpert Home Lending via my1003app.com) and third-party rate widgets. These third-party sites have their own privacy policies and terms of use. We are not responsible for the content, accuracy, or practices of any third-party site.</p>
            <p>Links to third-party sites are provided for your convenience and do not constitute an endorsement.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">7. Prohibited Uses</h2>
            <p>You agree not to use this Site to:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Engage in any activity that violates applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to any portion of the Site or related systems</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Scrape, crawl, or harvest content or data from the Site without written permission</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, The Becker Team and Xpert Home Lending shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of, or inability to use, this Site or its content — including, without limitation, any errors or omissions in content, loss of data, or any other loss.</p>
            <p>Our total liability to you for any claim arising from your use of this Site shall not exceed $100.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">9. Disclaimer of Warranties</h2>
            <p>This Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">10. Governing Law</h2>
            <p>These Terms of Use shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Denver, Colorado.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">11. Contact</h2>
            <p>Questions about these Terms of Use may be directed to:</p>
            <div className="rounded p-5 mt-2" style={{ backgroundColor: '#fff', border: '1px solid #ded6c4' }}>
              <p className="font-semibold" style={{ color: '#1F2E2A' }}>The Becker Team — Xpert Home Lending</p>
              <p style={{ color: '#4a5e53' }}>NMLS #794730 | Company NMLS #2179191</p>
              <p style={{ color: '#4a5e53' }}>201 Columbine Street, Suite 300, Denver, CO 80206</p>
              <p><a href="tel:7204923335" style={{ color: '#1F2E2A' }}>(720) 492-3335</a></p>
              <p><a href="mailto:Jamie@thebeckerteam.com" style={{ color: '#1F2E2A' }}>Jamie@thebeckerteam.com</a></p>
            </div>
          </div>

        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/privacy" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Privacy Policy</Link>
          <Link href="/fair-lending" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Fair Lending Notice</Link>
          <Link href="/accessibility" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Accessibility</Link>
        </div>
      </div>
    </section>
  )
}
