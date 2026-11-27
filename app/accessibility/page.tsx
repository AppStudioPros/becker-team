import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Read The Becker Team’s accessibility statement, get help using the site, or report a barrier you encountered.',
}

const EFFECTIVE = 'September 1, 2026'

export default function AccessibilityPage() {
  return (
    <section style={{ backgroundColor: '#F5EFE6' }} className="py-20 px-6 pt-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-bronze-ink">Legal</p>
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
            <p>The Becker Team, powered by Xpert Home Lending, works to make this site accessible to people with disabilities. Our goal is to meet the <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>.</p>
            <p>We continue to improve the site so more people can use our mortgage information and services.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Accessibility Features</h2>
            <p>We use and test features that support accessibility, including the following.</p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li><strong>Page structure.</strong> Headings and landmarks help screen reader users move through pages.</li>
              <li><strong>Alt text.</strong> We provide descriptions for images that convey information.</li>
              <li><strong>Color contrast.</strong> We check text and controls against WCAG 2.1 AA contrast ratios.</li>
              <li><strong>Keyboard navigation.</strong> A skip link moves focus to the main content. We check interactive features for keyboard access.</li>
              <li><strong>Focus indicators.</strong> We use visible focus indicators on controls.</li>
              <li><strong>Responsive design.</strong> We check pages at different screen sizes and when text is enlarged.</li>
              <li><strong>Plain language.</strong> We aim to write clearly and explain unfamiliar terms.</li>
              <li><strong>Media controls.</strong> Audio and video require you to start playback.</li>
              <li><strong>HTTPS encryption.</strong> This site uses an encrypted connection.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Known Limitations</h2>
            <p>We work toward meeting WCAG 2.1 AA. The rate widget and loan application portal are operated by third parties and may have accessibility limitations. If you have trouble using either tool, please contact us for help.</p>
            <p>Please tell us about any barriers you encounter so we can work to address them.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Legal Framework</h2>
            <p>Our accessibility work is informed by these laws and standards.</p>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#3a5a4a' }}>
              <li><strong>Title III of the Americans with Disabilities Act (ADA).</strong> It covers businesses open to the public, including ways they provide goods and services online.</li>
              <li><strong>Section 508 of the Rehabilitation Act,</strong> to the extent applicable.</li>
              <li><strong>WCAG 2.1 Level AA.</strong> These guidelines describe how to make web content more accessible.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }} className="text-xl font-bold mb-3">Alternative Access to Services</h2>
            <p>If a disability makes it difficult to use this site, contact us for help. We can assist you in the following ways.</p>
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
              <p className="font-semibold" style={{ color: '#1F2E2A' }}>The Becker Team, powered by Xpert Home Lending</p>
              <p style={{ color: '#4a5e53' }}>Individual NMLS #794730 | Company NMLS #2179191</p>
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
