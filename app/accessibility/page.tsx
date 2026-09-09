import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement | The Becker Team',
  description:
    'Accessibility statement for thebeckerteam.com — our commitment to WCAG 2.1 compliance and ensuring our website is usable by all visitors, including those with disabilities.',
}

const EFFECTIVE = 'September 1, 2026'

export default function AccessibilityPage() {
  return (
    <section style={{ backgroundColor: '#F5EFE6' }} className="py-20 px-6 pt-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#B98942' }}>Legal</p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          Accessibility Statement
        </h1>
        <p className="text-sm mb-10" style={{ color: '#4a5e53' }}>Effective Date: {EFFECTIVE}</p>

        <div className="prose-becker space-y-8">

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Our Commitment</h2>
            <p>The Becker Team, powered by Xpert Home Lending, is committed to ensuring that thebeckerteam.com is accessible to the widest possible audience, including individuals with disabilities. We strive to meet or exceed the requirements of the <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong> — the recognized standard for web accessibility.</p>
            <p>We believe that access to mortgage information and services should be available to everyone, and we are continuously working to improve the accessibility of this Site.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Accessibility Features</h2>
            <p>This Site has been designed and built with accessibility in mind, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li><strong>Semantic HTML structure</strong> — proper heading hierarchy (H1–H4) and landmark elements for screen reader navigation</li>
              <li><strong>Alt text for images</strong> — descriptive alternative text for meaningful images throughout the Site</li>
              <li><strong>Color contrast</strong> — text and interactive elements meet or exceed WCAG 2.1 AA contrast ratios</li>
              <li><strong>Keyboard navigation</strong> — all interactive elements are accessible via keyboard without requiring a mouse</li>
              <li><strong>Focus indicators</strong> — visible focus states on interactive elements for keyboard users</li>
              <li><strong>Responsive design</strong> — the Site adapts to all screen sizes and zoom levels up to 200% without loss of functionality</li>
              <li><strong>Plain language</strong> — we aim to write clearly and avoid unnecessary jargon</li>
              <li><strong>No auto-play media</strong> — audio or video content is not set to play automatically</li>
              <li><strong>HTTPS encryption</strong> — all data transmitted on this Site is encrypted for security</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Known Limitations</h2>
            <p>While we strive for full WCAG 2.1 AA compliance, some third-party tools and embedded content integrated into this Site — such as our mortgage calculator, rate widgets, and loan application portal — are operated by third-party providers and may not fully conform to accessibility standards. We encourage these providers to improve their accessibility and will continue to evaluate alternatives where appropriate.</p>
            <p>If you encounter any specific accessibility barriers on this Site, please contact us and we will work to address them.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Legal Framework</h2>
            <p>This accessibility commitment reflects our obligations under:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li><strong>Americans with Disabilities Act (ADA), Title III</strong> — which has been interpreted by federal courts to apply to websites of businesses open to the public</li>
              <li><strong>Section 508 of the Rehabilitation Act</strong> — to the extent applicable</li>
              <li><strong>WCAG 2.1 Level AA</strong> — the international standard for digital accessibility</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Alternative Access to Services</h2>
            <p>If you are unable to access any content or functionality on this Site due to a disability, we are happy to provide information and assistance through alternative means. Please contact us and we will respond promptly:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm" style={{ color: '#3a5a4a' }}>
              <li>We can provide mortgage information by phone, email, or in person at our Denver office</li>
              <li>Loan applications can be completed with staff assistance by phone</li>
              <li>Documents can be made available in alternative formats upon request</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Feedback and Contact</h2>
            <p>We welcome your feedback on the accessibility of this Site. If you experience any accessibility barriers or have suggestions for improvement, please contact us:</p>
            <div className="rounded p-5 mt-2" style={{ backgroundColor: '#fff', border: '1px solid #ded6c4' }}>
              <p className="font-semibold" style={{ color: '#1F2E2A' }}>The Becker Team — Xpert Home Lending</p>
              <p style={{ color: '#4a5e53' }}>NMLS #794730 | Company NMLS #2179191</p>
              <p style={{ color: '#4a5e53' }}>201 Columbine Street, Suite 300, Denver, CO 80206</p>
              <p><a href="tel:7204923335" style={{ color: '#1F2E2A' }}>(720) 492-3335</a></p>
              <p><a href="mailto:Jamie@thebeckerteam.com" style={{ color: '#1F2E2A' }}>Jamie@thebeckerteam.com</a></p>
            </div>
            <p className="text-sm mt-4" style={{ color: '#4a5e53' }}>We aim to respond to accessibility feedback within 2 business days.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Ongoing Improvement</h2>
            <p>Accessibility is an ongoing effort. We review this Site periodically and make improvements as new standards and best practices emerge. This statement was last reviewed on {EFFECTIVE}.</p>
          </div>

        </div>

        <div className="mt-12 flex gap-4 flex-wrap">
          <Link href="/privacy" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Privacy Policy</Link>
          <Link href="/terms" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Terms of Use</Link>
          <Link href="/fair-lending" className="text-sm font-semibold underline" style={{ color: '#1F2E2A' }}>Fair Lending Notice</Link>
        </div>
      </div>
    </section>
  )
}
