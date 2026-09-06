import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Loan Process Guide | The Becker Team Colorado',
  description:
    'A step-by-step guide to the home loan process with The Becker Team. From pre-qualification to closing — Jamie Becker, NMLS #794730.',
}

const steps = [
  {
    num: '01',
    title: 'Pre-Qualification',
    desc: 'We start by determining how much you can borrow based on your financial situation. This gives you a clear picture of your buying power and strengthens your position with sellers.',
    points: [
      'Quick online pre-qualification',
      'Clear understanding of your buying power',
      'Stronger negotiation position with sellers',
    ],
  },
  {
    num: '02',
    title: 'Loan Program Selection',
    desc: 'We help you choose the right loan program based on your goals, finances, and timeline. Whether conventional, FHA, VA, or specialty lending, we find the right fit for your situation.',
    points: [
      'Expert guidance on all loan options',
      'Personalized recommendations based on your goals',
      'Clear explanation of terms and total costs',
    ],
  },
  {
    num: '03',
    title: 'Application and Documentation',
    desc: 'Submit your application through our streamlined online process. We guide you through every document required and keep you informed at each step.',
    points: [
      'Simple online application',
      'Clear documentation checklist',
      'Direct communication with Jamie throughout',
    ],
  },
  {
    num: '04',
    title: 'Processing and Underwriting',
    desc: 'Our team handles processing efficiently, verifying documentation and working with underwriters to move your file toward approval as quickly as possible.',
    points: [
      'Fast processing and file management',
      'Proactive status updates',
      'Expert problem-solving if challenges arise',
    ],
  },
  {
    num: '05',
    title: 'Closing',
    desc: 'Once approved, we coordinate with all parties to ensure a smooth closing. You sign the final documents, and the home is yours.',
    points: [
      'Clear closing instructions provided in advance',
      'Coordination with title, escrow, and agents',
      'On-time closing — even in 10 days when prepared',
    ],
  },
]

export default function ProcessGuidePage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ backgroundColor: '#1c3023' }} className="py-20 px-6 text-center text-white">
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Home Loan Process Guide
        </h1>
        <p className="text-white/80 max-w-xl mx-auto">
          A clear, step-by-step look at what to expect from application to closing.
        </p>
      </section>

      {/* ── Steps ── */}
      <section style={{ backgroundColor: '#f5ecd8' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded border p-8"
              style={{ backgroundColor: 'white', borderColor: '#ede4cc' }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: '#1c3023', opacity: 0.5 }}>
                Step {step.num}
              </p>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
              >
                {step.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {step.points.map((pt) => (
                  <li key={pt} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="mt-0.5" style={{ color: '#1c3023' }}>&#10003;</span>
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
      </section>
    </>
  )
}
