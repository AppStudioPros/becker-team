import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calculator, TrendingUp, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Jamie Becker | Colorado Mortgage Broker',
  description:
    'Jamie Becker is a Colorado mortgage broker and financial strategist with 21+ years of experience and 3,500+ families served. Learn about his background, philosophy, and Keep Climbing Foundation work.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jamie Becker',
  jobTitle: 'Mortgage Broker',
  url: 'https://www.thebeckerteam.com/about',
  telephone: '(470) 660-5693',
  email: 'Jamie@thebeckerteam.com',
  identifier: 'NMLS #794730',
  worksFor: {
    '@type': 'Organization',
    name: 'The Becker Team / Xpert Home Lending',
  },
  description:
    '21+ years in mortgage lending. Background in financial advising, real estate investing, and commercial property. Licensed in CO, CA, TX, FL, ID, IN, LA, MI.',
}

const processSteps = [
  {
    title: 'Pre-Qualification',
    desc: 'We start by determining how much you can borrow based on your financial situation. This helps you focus on properties within your range and strengthens your position with sellers.',
    points: ['Quick online pre-qualification', 'Clear understanding of your buying power', 'Strengthen negotiation position'],
  },
  {
    title: 'Loan Program Selection',
    desc: 'We help you choose the right loan program based on your goals, finances, and timeline. Whether conventional, FHA, VA, or specialty lending, we find the right fit.',
    points: ['Expert guidance on loan options', 'Personalized recommendations', 'Clear explanation of terms and benefits'],
  },
  {
    title: 'Application & Documentation',
    desc: 'Submit your application with our streamlined online process. We guide you through the required documentation and keep you informed every step of the way.',
    points: ['Simple online application', 'Clear documentation checklist', 'Direct communication with your loan officer'],
  },
  {
    title: 'Processing & Underwriting',
    desc: 'Our experienced team handles processing efficiently, verifying documentation and working with underwriters to ensure smooth approval.',
    points: ['Fast processing times', 'Proactive communication', 'Expert problem-solving if issues arise'],
  },
  {
    title: 'Closing',
    desc: 'Once approved, we coordinate with all parties to ensure a smooth closing. You sign the final documents and get the keys to your home.',
    points: ['Clear closing instructions', 'Coordination with all parties', 'Celebration of your success'],
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Bio ── */}
      <section className="bg-white pt-16 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
          >
            About
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2
                className="text-lg font-semibold mb-5"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
              >
                About Jamie Becker:
              </h2>
              <div className="prose-becker">
                <p>
                  With more than 21 years of experience in the mortgage industry, I&apos;ve helped over
                  3,500 families navigate one of the most important financial decisions of their lives: how
                  to finance a home, an investment property, or the next stage of their real estate journey.
                </p>
                <p>
                  I&apos;m Jamie Becker, founder of The Becker Team, and I believe the best mortgage
                  guidance starts with understanding the full picture.
                </p>
                <p>
                  A mortgage is not just a rate, a payment, or a stack of documents. It is part of a
                  larger financial strategy. That is why my background is different from that of the
                  typical loan officer. In addition to more than two decades in mortgage lending, I also
                  bring experience as a financial advisor, real estate investor, commercial property owner,
                  and developer.
                </p>
                <p>
                  That perspective allows me to help clients think through more than whether they can
                  qualify. I help them consider how the mortgage fits into their cash flow, assets,
                  liquidity, real estate goals, and long-term financial plan.
                </p>
                <p>
                  At The Becker Team, we specialize in mortgage strategies for borrowers whose financial
                  picture may not fit neatly into traditional underwriting guidelines. That may include
                  business owners, retirees, real estate investors, high-asset borrowers, or clients with
                  strong financial profiles but nontraditional income.
                </p>
                <p>
                  Because I work as a mortgage broker, I have access to a wide range of lenders and
                  programs, including conventional, FHA, VA, non-QM, asset-based qualifying, bank
                  statement loans, DSCR options for investors, and strategic mortgage products such as
                  the Home Mortgage Accelerator.
                </p>
                <p>
                  Over the years, I&apos;ve seen almost every type of mortgage scenario: credit challenges,
                  complicated income, multiple gift sources, co-signers, investment properties, second
                  homes, retirement transitions, and borrowers who simply need a better path through
                  underwriting. That experience has shaped my approach.
                </p>
                <p>
                  My philosophy is simple: client first, always. I believe in doing the right thing,
                  giving honest guidance, and recommending the same solution I would choose for myself.
                </p>
                <p>
                  Whether you are a borrower, financial advisor, CPA, attorney, or real estate
                  professional, my goal is to be a practical and trusted mortgage resource who can help
                  identify the right path forward with clarity and confidence.
                </p>
                <p>
                  Outside of mortgage lending, giving back has been an important part of my life.
                </p>
                <p>
                  I have been involved with the Keep Climbing Foundation since 2019 and have participated
                  in Climb for the Kids, helping raise funds for charitable partners through endurance and
                  mountaineering challenges. Over the years, that work has included climbs of Chimborazo,
                  Cotopaxi, numerous Colorado 14ers, and expeditions in the Alaska Range.
                </p>
                <p>
                  I have also supported First Descents, an organization that helps young adults impacted
                  by cancer connect, heal, and rebuild through outdoor adventure.
                </p>
                <p>
                  When I&apos;m not working with clients, you can usually find me outside in Colorado,
                  mountain biking, climbing, snowmobiling, hiking, working on the ranch in Leadville, or
                  spending time with my Silver Lab, Blue.
                </p>
                <p>
                  If you are looking for a mortgage expert who can help you think beyond the standard
                  loan application, I&apos;d be happy to connect.
                </p>
                <Link href="/contact" className="underline font-medium" style={{ color: '#c8960c' }}>
                  Contact The Becker Team to start a conversation.
                </Link>
              </div>
            </div>

            {/* Headshot */}
            <div className="shrink-0 md:w-72">
              <div
                className="overflow-hidden rounded"
                style={{ border: '4px solid #ede4cc' }}
              >
                <Image
                  src="/images/squarespace/Edited_1.jpg"
                  alt="Jamie Becker, Colorado Mortgage Broker"
                  width={288}
                  height={360}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Jamie License Info Bar ── */}
      <section style={{ backgroundColor: '#1c3023' }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <p className="text-lg font-bold mb-1" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Jamie Becker
            </p>
            <p className="text-sm text-gray-300 mb-1">NMLS# 794730</p>
            <a
              href="https://www.thebeckerteam.com"
              className="text-sm underline"
              style={{ color: '#c8960c' }}
            >
              www.TheBeckerTeam.com
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2 text-gray-300">License Information:</p>
            <p className="text-sm text-gray-300">CA: CA-DOC794730</p>
            <p className="text-sm text-gray-300">CO: 100027807</p>
            <p className="text-sm text-gray-300">TX: 794730</p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2 text-gray-300">Xpert Home Lending, NMLS 2179191</p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Licensed to work in:</span> Colorado (100027807), Texas
            </p>
          </div>
        </div>
      </section>

      {/* ── Giving Back ── */}
      <section
        id="givingback"
        className="relative py-20 px-6"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,35,25,0.72), rgba(20,35,25,0.72)), url("/images/squarespace/jamie-ranch-0026_websize.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1c3023',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-5xl font-bold text-white mb-2"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Giving Back
          </h2>
          <p className="text-white/80 text-sm uppercase tracking-widest mb-8">
            Keep Climbing Foundation — Board Member
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gray-200 leading-relaxed mb-5">
                Jamie Becker has been an integral part of the{' '}
                <a
                  href="https://keepclimbingfoundation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-gray-200"
                >
                  Keep Climbing Foundation
                </a>{' '}
                since 2019, joining the Climb for the Kids team with unwavering dedication. Over the
                years, Jamie has taken on remarkable challenges, including climbing Chimborazo and
                Cotopaxi, conquering numerous Colorado 14ers, and exploring the Alaska Range, all while
                raising tens of thousands of dollars for the foundation&apos;s charitable partners.
              </p>
              <p className="text-gray-200 leading-relaxed mb-8">
                An avid adventurer, Jamie is a competitive mountain biker who has completed some of the
                world&apos;s toughest races, including the grueling Leadville 100 MTB. When winter
                arrives, you can find Jamie snowmobiling through deep powder in some of the nation&apos;s
                most remote backcountry terrain.
              </p>
              <a
                href="https://keepclimbingfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white uppercase tracking-widest text-sm font-semibold px-10 py-4 hover:bg-gray-900 transition-colors"
              >
                Visit Keep Climbing Foundation
              </a>
            </div>

            {/* YouTube embed */}
            <div className="aspect-video w-full rounded overflow-hidden bg-black/50">
              {/* Replace VIDEO_ID with the actual YouTube video ID */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yRUkxfHNQdc"
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
      <section style={{ backgroundColor: '#1c3023' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-5xl font-bold text-white text-center mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Our Process
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-xl mx-auto">
            We&apos;ve streamlined the home loan process to make it as simple and efficient as possible.
            Here&apos;s how we work with you from start to finish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded p-8"
                style={{ backgroundColor: '#f5ecd8' }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{step.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {step.points.map((pt) => (
                    <li key={pt} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="mt-0.5" style={{ color: '#4a90a4' }}>&#10003;</span>
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
              className="inline-block bg-black text-white uppercase tracking-widest text-sm font-semibold px-14 py-5 hover:bg-gray-900 transition-colors"
            >
              Start Your Application
            </a>
          </div>
        </div>
      </section>

      {/* ── Ready to get started? ── */}
      <section
        className="relative py-24 px-6 text-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,35,25,0.65), rgba(20,35,25,0.65)), url("/images/cta-creek.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1c3023',
        }}
      >
        <h2
          className="text-5xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to get started?
        </h2>
        <p className="text-white/80 mb-10">Let&apos;s begin your home loan journey today.</p>
        <a
          href="https://2179191.my1003app.com/794730/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white uppercase tracking-widest text-sm font-semibold px-14 py-5 hover:bg-gray-900 transition-colors"
        >
          Start Your Application
        </a>
      </section>

      {/* ── Resources ── */}
      <section className="bg-white py-16 px-6">
        <h2
          className="text-4xl font-bold text-center mb-10"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
        >
          Resources
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/mortgage-calculator"
            className="block rounded border p-8 text-center hover:shadow-md transition-shadow"
            style={{ borderColor: '#ede4cc', backgroundColor: '#fdfaf5' }}
          >
            <Calculator size={32} className="mx-auto mb-4" style={{ color: '#1c3023' }} />
            <h3 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: '#1c3023' }}>
              Mortgage Calculator
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#4a5e53' }}>
              Calculate your monthly payments and explore different loan scenarios.
            </p>
          </Link>

          <Link
            href="/mortgage-interest-rates"
            className="block rounded border p-8 text-center hover:shadow-md transition-shadow"
            style={{ borderColor: '#ede4cc', backgroundColor: '#fdfaf5' }}
          >
            <TrendingUp size={32} className="mx-auto mb-4" style={{ color: '#1c3023' }} />
            <h3 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: '#1c3023' }}>
              Current Rates
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#4a5e53' }}>
              View today&apos;s mortgage interest rates for all major loan types.
            </p>
          </Link>

          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded border p-8 text-center hover:shadow-md transition-shadow"
            style={{ borderColor: '#ede4cc', backgroundColor: '#fdfaf5' }}
          >
            <CheckCircle size={32} className="mx-auto mb-4" style={{ color: '#1c3023' }} />
            <h3 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: '#1c3023' }}>
              Get Pre-Approved
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#4a5e53' }}>
              Start your application online and get moving toward your next home.
            </p>
          </a>
        </div>
      </section>
    </>
  )
}
