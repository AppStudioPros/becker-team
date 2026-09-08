'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface Props {
  children: React.ReactNode
}

const inputClass = 'w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/70 transition-colors'
const labelClass = 'block text-white text-sm mb-1'

export default function StrategyReviewModal({ children }: Props) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    newsletter: false,
    purchaseOrRefi: '',
    savings: '',
    monthlyIncome: '',
    mortgageBalance: '',
    mortgageLength: '',
    taxesInsurance: '',
    autoPayments: '',
    studentLoans: '',
    creditCards: '',
    monthsIntoMortgage: '',
    otherExpenses: '',
    secondHome: '',
    yearsToRetirement: '',
    anythingElse: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/strategy-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer inline-block">
        {children}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(10,20,15,0.85)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div
            className="relative w-full max-w-2xl rounded overflow-y-auto max-h-[90vh]"
            style={{ backgroundColor: '#1F2E2A' }}
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h2
                className="text-2xl md:text-3xl font-bold text-white text-left"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                See Whether Your Numbers Fit The Strategy
              </h2>
              <p className="text-white/60 text-sm mt-1 text-left">
                Answer a few quick questions and our team will review your cash flow, mortgage and goals to tell you whether this strategy is worth exploring.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 p-2 rounded hover:bg-white/10 transition-colors text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <div className="px-8 py-7 text-left">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <p
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    Submission received!
                  </p>
                  <p className="text-white/70 mb-8">
                    The Becker Team will review your scenario and be in touch within 1–2 business days.
                  </p>
                  <button
                    onClick={() => { setOpen(false); setStatus('idle') }}
                    className="uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded"
                    style={{ backgroundColor: '#B98942', color: '#fff' }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">

                  {/* Name */}
                  <div>
                    <p className={labelClass}>Name</p>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <label className="text-white/50 text-xs mb-1 block">First Name (required)</label>
                        <input required name="firstName" value={form.firstName} onChange={handleChange} placeholder="" className={inputClass} />
                      </div>
                      <div>
                        <label className="text-white/50 text-xs mb-1 block">Last Name (required)</label>
                        <input required name="lastName" value={form.lastName} onChange={handleChange} placeholder="" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email (required)</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Newsletter */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={form.newsletter as boolean}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border border-white/40 accent-[#B98942]"
                    />
                    <span className="text-white text-sm">Sign up for news and updates</span>
                  </label>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Purchase or refi */}
                  <div>
                    <label className={labelClass}>Are you looking at a purchase or refinance? (required)</label>
                    <select required name="purchaseOrRefi" value={form.purchaseOrRefi} onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/30 pb-2 text-white text-sm focus:outline-none focus:border-white/70 transition-colors"
                      style={{ appearance: 'none' }}
                    >
                      <option value="" disabled style={{ color: '#1F2E2A' }}>Select one</option>
                      <option value="Purchase" style={{ color: '#1F2E2A' }}>Purchase</option>
                      <option value="Refinance" style={{ color: '#1F2E2A' }}>Refinance</option>
                    </select>
                  </div>

                  {/* Savings */}
                  <div>
                    <label className={labelClass}>How much do you have in savings / rainy-day funds?</label>
                    <input name="savings" value={form.savings} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Monthly income */}
                  <div>
                    <label className={labelClass}>How much monthly net income is deposited into checking?</label>
                    <input name="monthlyIncome" value={form.monthlyIncome} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Mortgage balance (refi only) */}
                  <div>
                    <label className={labelClass}>What is the balance and rate on your current mortgage? (only for refinance)</label>
                    <input name="mortgageBalance" value={form.mortgageBalance} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* How long had mortgage */}
                  <div>
                    <label className={labelClass}>How long have you had the current mortgage?</label>
                    <input name="mortgageLength" value={form.mortgageLength} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Taxes & insurance */}
                  <div>
                    <label className={labelClass}>How much are monthly property taxes and homeowners insurance?</label>
                    <input name="taxesInsurance" value={form.taxesInsurance} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Auto payments */}
                  <div>
                    <label className={labelClass}>How much are your auto payments?</label>
                    <input name="autoPayments" value={form.autoPayments} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Student loans */}
                  <div>
                    <label className={labelClass}>How much are your student loan payments?</label>
                    <input name="studentLoans" value={form.studentLoans} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Credit cards / household */}
                  <div>
                    <label className={labelClass}>How much do you spend monthly on credit cards / groceries / entertainment / child care / household expenses?</label>
                    <input name="creditCards" value={form.creditCards} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Months into mortgage (refi) */}
                  <div>
                    <label className={labelClass}>How many months/years are you into the current mortgage? (only for refinance)</label>
                    <input name="monthsIntoMortgage" value={form.monthsIntoMortgage} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Other expenses */}
                  <div>
                    <label className={labelClass}>Any other monthly expenses?</label>
                    <input name="otherExpenses" value={form.otherExpenses} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Second home */}
                  <div>
                    <label className={labelClass}>Do you have a second-home payment?</label>
                    <input name="secondHome" value={form.secondHome} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Years to retirement */}
                  <div>
                    <label className={labelClass}>How many years until retirement?</label>
                    <input name="yearsToRetirement" value={form.yearsToRetirement} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Anything else */}
                  <div>
                    <label className={labelClass}>Anything else we should know?</label>
                    <textarea name="anythingElse" value={form.anythingElse} onChange={handleChange} rows={3} className={inputClass} />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="uppercase tracking-widest text-sm font-semibold py-4 rounded disabled:opacity-60 transition-opacity"
                    style={{ backgroundColor: '#B98942', color: '#fff' }}
                  >
                    {status === 'sending' ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
