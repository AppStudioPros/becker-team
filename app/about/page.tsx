import SectionBackdrop from '@/components/SectionBackdrop'
import { jamieBecker } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import { jamieLicenses } from '@/lib/jamieLicenses'
import Link from 'next/link'
import Image from 'next/image'
import { Calculator, TrendingUp, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Jamie Becker, Colorado Mortgage Broker',
  description:
    'Meet Jamie Becker, founder of The Becker Team. Learn how his background in lending and financial advising informs the way he compares loan options.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  ...jamieBecker,
  knowsAbout: [
    'VA Loans',
    'FHA Loans',
    'Jumbo Loans',
    'Conventional Mortgages',
    'Self-Employed Mortgage Loans',
    'Asset Qualifier Loans',
    'Mortgage Accelerator',
    'Colorado Real Estate',
    'Home Loan Process',
    'Mortgage Refinancing',
  ],
  description:
    '21+ years in mortgage lending. Background in financial advising, real estate investing, and commercial property.',
}

const processSteps = [
  {
    title: 'Pre-Qualification',
    desc: 'We start with an estimate of what you might be able to borrow. That gives you a price range to shop in and a starting point for pre-approval.',
    points: ['Start online', 'Estimate a price range', 'Talk through the next steps'],
  },
  {
    title: 'Loan Program Selection',
    desc: 'We compare conventional, FHA, VA, and specialty loans based on your finances, plans, and timeline.',
    points: ['Compare loan programs', 'See how the costs differ', 'Review the terms together'],
  },
  {
    title: 'Application & Documentation',
    desc: 'Submit your application online. We’ll explain which records to provide and let you know what happens next.',
    points: ['Apply online', 'Get a document checklist', 'Talk directly with your loan officer'],
  },
  {
    title: 'Processing & Underwriting',
    desc: 'We review your paperwork and work with the lender’s underwriter. If the lender needs more information, we’ll explain what to provide.',
    points: ['Review your paperwork', 'Get updates as we go', 'Understand follow-up requests'],
  },
  {
    title: 'Closing',
    desc: 'Once the lender clears the loan to close, we coordinate with the parties involved. We’ll tell you what to review, bring, and sign.',
    points: ['Review your closing instructions', 'Confirm the timing', 'Sign the final documents'],
  },
]

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.thebeckerteam.com/about',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'p'],
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Bio ── */}
      <section className="bg-white pt-12 md:pt-16 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1
            data-reveal="fade"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            About
          </h1>

          {/* ── 2-column: text left, circle photo right ── */}
          <div className="flex flex-col md:flex-row gap-12 items-start mb-10">
            {/* Left: first bio block */}
            <div className="flex-1 prose-becker">
              <h2
                data-reveal="fade"
                data-delay="40"
                className="text-lg font-semibold mb-5"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
              >
                Meet Jamie Becker
              </h2>
              <p data-reveal="fade" data-delay="80">
                I’ve spent more than 21 years in mortgage lending and helped over 3,500 families
                with home and investment property financing.
              </p>
              <p data-reveal="fade" data-delay="120">
                I’m Jamie Becker, founder of The Becker Team. I start by learning what you’re buying,
                how you earn your income, and what payment you’re comfortable with.
              </p>
              <p data-reveal="fade" data-delay="160">
                My work as a financial advisor, real estate investor, commercial property owner,
                and developer shapes the way I compare mortgages with borrowers.
              </p>
              <p data-reveal="fade" data-delay="200">
                We can talk through how a mortgage would affect your monthly budget, how much money
                you’d keep available after closing, and what you want to do next.
              </p>
            </div>

            {/* Right: circular photo */}
            <div data-reveal="fade" data-delay="100" className="shrink-0 flex justify-center w-full md:w-auto">
              <div
                className="rounded-full overflow-hidden w-[80vw] h-[80vw] md:w-[480px] md:h-[480px]"
                style={{ border: '4px solid #ede4cc' }}
              >
                <Image
                  src="/images/squarespace/jamie-fishing.jpg"
                  alt="Jamie Becker, Colorado Mortgage Broker"
                  sizes="(min-width: 768px) 480px, 80vw"
                  width={480}
                  height={480}
                  priority
                  className="object-cover w-full h-full object-top"
                />
              </div>
            </div>
          </div>

          {/* ── Single column: remaining bio ── */}
          <div className="prose-becker">
            <p data-reveal="fade" data-delay="400">
              At The Becker Team, we specialize in helping borrowers who need a different way to
              document their finances. That can include business owners, retirees, real estate
              investors, and borrowers who want a lender to consider their assets.
            </p>
            <p data-reveal="fade" data-delay="470">
              Because I work as a mortgage broker, I have access to a wide range of lenders and
              programs, including conventional, FHA, VA, non-QM, asset-based qualifying, bank
              statement loans, DSCR options for investors, and strategic mortgage products such as
              the Home Mortgage Accelerator.
            </p>
            <p data-reveal="fade" data-delay="540">
              I’ve helped borrowers with credit challenges, complex income, gifts from multiple sources,
              co-signers, investment properties, second homes, and transitions into retirement. Those
              situations often come down to which documents the lender needs and when.
            </p>
            <p data-reveal="fade" data-delay="610">
              I want you to understand the cost and trade-offs of your options before you choose a loan.
            </p>
            <p data-reveal="fade" data-delay="680">
              I work with borrowers and the people advising them, including financial advisors, CPAs,
              attorneys, and real estate professionals.
            </p>
            <p data-reveal="fade" data-delay="750">
              Outside of mortgage lending, giving back has been an important part of my life.
            </p>
            <p data-reveal="fade" data-delay="820">
              I have been involved with the Keep Climbing Foundation since 2019 and have participated
              in Climb for the Kids, helping raise funds for charitable partners through endurance and
              mountaineering challenges. Over the years, that work has included climbs of Chimborazo,
              Cotopaxi, numerous Colorado 14ers, and expeditions in the Alaska Range.
            </p>
            <p data-reveal="fade" data-delay="890">
              I have also supported First Descents, an organization that helps young adults impacted
              by cancer connect, heal, and rebuild through outdoor adventure.
            </p>
            <p data-reveal="fade" data-delay="960">
              When I&apos;m not working with clients, you can usually find me outside in Colorado,
              mountain biking, climbing, snowmobiling, hiking, working on the ranch in Leadville, or
              spending time with my Silver Lab, Blue.
            </p>
            <p data-reveal="fade" data-delay="1030">
              If you’re unsure how to document your income or which loans you can compare, let’s talk
              through what you’re working with.
            </p>
            <Link data-reveal="fade" data-delay="1100" href="/contact" className="underline font-medium inline-block text-bronze-ink">
              Contact The Becker Team to start a conversation.
            </Link>
          </div>
        </div>
      </section>

      {/* ── Jamie License Info Bar ── */}
      <section id="licensing" style={{ backgroundColor: '#1F2E2A' }} className="scroll-mt-20 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white text-center">
          <div>
            <p className="text-2xl font-bold mb-2" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Jamie Becker
            </p>
            <p className="text-base text-gray-300 mb-2">Individual NMLS #794730</p>
            <a
              href="https://www.thebeckerteam.com"
              className="text-base underline"
              style={{ color: '#B98942' }}
            >
              www.TheBeckerTeam.com
            </a>
          </div>
          <div>
            <p className="text-base font-semibold mb-3 text-gray-300">Jamie Becker’s state licenses</p>
            <ul className="text-base text-gray-300">
              {jamieLicenses.map(({ state, number }) => (
                <li key={state}>{state}{number && ` #${number}`}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-base font-semibold mb-3 text-gray-300">Xpert Home Lending, Inc.</p>
            <p className="text-base text-gray-300">Company NMLS #2179191</p>
          </div>
        </div>
      </section>

      {/* ── Giving Back ── */}
      <section
        id="givingback"
        className="relative isolate bg-[#1F2E2A] py-12 md:py-20 px-6"
      >
        <SectionBackdrop src="/images/giving-back-bg.jpg" shade={0.55} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: 'rgba(20, 35, 25, 0.50)',
                boxShadow: '0 0 30px 18px rgba(20, 35, 25, 0.50)',
              }}
            >
              <h2
                data-reveal="fade"
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Giving Back
              </h2>
              <p data-reveal="fade" data-delay="80" className="text-white/80 text-sm uppercase tracking-widest mb-8">
                Board Member, Keep Climbing Foundation
              </p>
              <p data-reveal="fade" data-delay="160" className="text-gray-200 leading-relaxed mb-5">
                I’ve been involved with the{' '}
                <a
                  href="https://keepclimbingfoundation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-gray-200"
                >
                  Keep Climbing Foundation
                </a>{' '}
                since 2019. Through Climb for the Kids, I’ve raised tens of thousands of dollars
                for the foundation’s charitable partners. I’ve climbed Chimborazo, Cotopaxi, and
                numerous Colorado 14ers, and explored the Alaska Range.
              </p>
              <p className="text-gray-200 leading-relaxed mb-8">
                I also race mountain bikes and have finished the Leadville 100 MTB. In winter, I like
                to snowmobile in the backcountry.
              </p>
              <a
                href="https://keepclimbingfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded btn-hover"
                style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
              >
                Visit Keep Climbing Foundation
              </a>
            </div>

            {/* YouTube embed */}
            <div className="aspect-video w-full rounded overflow-hidden bg-black/50">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZNH3-t-zF8I"
                title="Keep Climbing Foundation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section style={{ backgroundColor: '#1F2E2A' }} className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            data-reveal="fade"
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Our Process
          </h2>
          <p data-reveal="fade" data-delay="100" className="text-gray-300 text-center mb-12 max-w-xl mx-auto">
            Here’s what we’ll work through together, from your first estimate to signing at closing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                data-reveal
                data-delay={i * 80}
                className={`rounded p-8 card-hover${i === processSteps.length - 1 && processSteps.length % 2 !== 0 ? ' md:col-span-2 md:max-w-[calc(50%-0.5rem)] md:mx-auto md:w-full' : ''}`}
                style={{ backgroundColor: '#F5EFE6' }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{step.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {step.points.map((pt) => (
                    <li key={pt} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="mt-0.5" style={{ color: '#B98942' }}>&#10003;</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://2179191.my1003app.com/794730/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
              style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
            >
              Start Your Application
            </a>
          </div>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="bg-white py-16 px-6">
        <h2
          data-reveal="fade"
          className="text-2xl md:text-4xl font-bold text-center mb-10"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          Resources
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            data-reveal
            data-delay="0"
            href="/mortgage-calculator"
            className="block rounded border p-8 text-center card-hover"
            style={{ borderColor: '#ede4cc', backgroundColor: '#fdfaf5' }}
          >
            <Calculator size={32} className="mx-auto mb-4" style={{ color: '#1F2E2A' }} />
            <h3 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: '#1F2E2A' }}>
              Mortgage Calculator
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#4a5e53' }}>
              Estimate your monthly payment and see how it changes when you adjust the loan amount or rate.
            </p>
          </Link>

          <Link
            data-reveal
            data-delay="80"
            href="/mortgage-interest-rates"
            className="block rounded border p-8 text-center card-hover"
            style={{ borderColor: '#ede4cc', backgroundColor: '#fdfaf5' }}
          >
            <TrendingUp size={32} className="mx-auto mb-4" style={{ color: '#1F2E2A' }} />
            <h3 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: '#1F2E2A' }}>
              Current Rates
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#4a5e53' }}>
              See example mortgage rates and the assumptions behind them.
            </p>
          </Link>

          <a
            data-reveal
            data-delay="160"
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded border p-8 text-center card-hover"
            style={{ borderColor: '#ede4cc', backgroundColor: '#fdfaf5' }}
          >
            <CheckCircle size={32} className="mx-auto mb-4" style={{ color: '#1F2E2A' }} />
            <h3 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: '#1F2E2A' }}>
              Get Pre-Approved
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#4a5e53' }}>
              Start the online application for mortgage pre-approval.
            </p>
          </a>
        </div>
      </section>

      {/* ── Ready to get started? ── */}
      <section
        className="relative isolate bg-[#1F2E2A] py-24 md:py-36 px-6 text-white text-center"
      >
        <SectionBackdrop src="/images/cta-mountain.jpg" shade={0.55} />
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to get started?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Tell us what you’re planning. We’ll help you compare loan options and costs.
        </p>
        <a
          data-reveal="scale"
          data-delay="300"
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
