'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { trackWebsiteLead } from '@/lib/leadAnalytics'

interface Props {
  children: React.ReactNode
}

const inputClass = 'w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/70 transition-colors'
const labelClass = 'block text-white text-sm mb-1'

const financialFields = [
  ['savings', 'How much do you have in savings / rainy-day funds?'],
  ['monthlyIncome', 'How much monthly net income is deposited into checking?'],
  ['mortgageBalance', 'What is the balance and rate on your current mortgage? (only for refinance)'],
  ['mortgageLength', 'How long have you had the current mortgage?'],
  ['taxesInsurance', 'How much are monthly property taxes and homeowners insurance?'],
  ['autoPayments', 'How much are your auto payments?'],
  ['studentLoans', 'How much are your student loan payments?'],
  ['creditCards', 'How much do you spend monthly on credit cards / groceries / entertainment / child care / household expenses?'],
  ['monthsIntoMortgage', 'How many months/years are you into the current mortgage? (only for refinance)'],
  ['otherExpenses', 'Any other monthly expenses?'],
  ['secondHome', 'Do you have a second-home payment?'],
  ['yearsToRetirement', 'How many years until retirement?'],
] as const

const initialForm = {
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
}

export default function StrategyReviewModal({ children }: Props) {
  const baseId = useId()
  const fieldId = (name: string) => `${baseId}-${name}`
  const trigger = useRef<HTMLButtonElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const title = useRef<HTMLHeadingElement>(null)
  const confirmation = useRef<HTMLParagraphElement>(null)
  const inFlight = useRef(false)
  const submission = useRef<{ body: string, key: string } | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if (status === 'success' && dialog.current?.open) {
      confirmation.current?.focus()
    }
  }, [status])

  function openDialog() {
    dialog.current?.showModal()
    title.current?.focus()
  }

  function resetAfterSuccess() {
    if (status !== 'success') return
    setStatus('idle')
    setForm(initialForm)
    submission.current = null
  }

  function closeDialog() {
    resetAfterSuccess()
    dialog.current?.close()
  }

  function closeOnBackdrop(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.currentTarget !== event.target) return
    const { top, right, bottom, left } = event.currentTarget.getBoundingClientRect()
    if (event.clientX < left || event.clientX >= right || event.clientY < top || event.clientY >= bottom) {
      closeDialog()
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const field = event.currentTarget
    const value = field instanceof HTMLInputElement && field.type === 'checkbox' ? field.checked : field.value
    setForm((previous) => ({ ...previous, [field.name]: value }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (inFlight.current) return
    inFlight.current = true
    setStatus('sending')

    const request = new AbortController()
    const deadline = window.setTimeout(() => request.abort(), 15000)

    try {
      const body = JSON.stringify(form)
      if (submission.current?.body !== body) {
        submission.current = { body, key: crypto.randomUUID() }
      }
      const response = await fetch('/api/strategy-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': submission.current.key,
        },
        body,
        signal: request.signal,
      })
      if (response.ok && (await response.json())?.ok === true) {
        setStatus('success')
        trackWebsiteLead('Strategy review form')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      window.clearTimeout(deadline)
      inFlight.current = false
    }
  }

  return (
    <>
      <button
        type="button"
        ref={trigger}
        className="cursor-pointer inline-block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5EFE6]"
        aria-haspopup="dialog"
        aria-controls={fieldId('dialog')}
        onClick={openDialog}
      >
        {children}
      </button>

      <dialog
        ref={dialog}
        id={fieldId('dialog')}
        className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[90dvh] overflow-y-auto overscroll-contain rounded backdrop:bg-[rgba(10,20,15,0.85)]"
        style={{ backgroundColor: '#1F2E2A' }}
        aria-labelledby={fieldId('title')}
        aria-describedby={fieldId('intro')}
        onClick={closeOnBackdrop}
        onCancel={resetAfterSuccess}
        onClose={() => { if (!dialog.current?.open) trigger.current?.focus() }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h2
            ref={title}
            id={fieldId('title')}
            tabIndex={-1}
            className="pr-8 text-2xl md:text-3xl font-bold text-white text-left"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            See Whether Your Numbers Fit The Strategy
          </h2>
          <p id={fieldId('intro')} className="text-white/75 text-sm mt-1 pr-8 text-left">
            Answer a few quick questions and our team will review your cash flow, mortgage and goals to tell you whether this strategy is worth exploring.
          </p>
          <button
            type="button"
            onClick={closeDialog}
            className="absolute top-5 right-5 p-2 rounded hover:bg-white/10 transition-colors text-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-7 text-left">
          <div role="status" className={status === 'success' ? 'text-center py-10' : undefined}>
            {status === 'success' && (
              <>
                <p
                  ref={confirmation}
                  tabIndex={-1}
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  Submission received!
                </p>
                <p className="text-white/70 mb-8">
                  The Becker Team will review your scenario and be in touch within 1–2 business days.
                </p>
                <button
                  type="button"
                  onClick={closeDialog}
                  className="uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded"
                  style={{ backgroundColor: '#B98942', color: '#1F2E2A' }}
                >
                  Close
                </button>
              </>
            )}
          </div>
          {status !== 'success' && (
            <form onSubmit={handleSubmit} aria-busy={status === 'sending'} className="flex flex-col gap-7">
              <fieldset disabled={status === 'sending'} className="min-w-0 flex flex-col gap-7">
                {/* Name */}
                <div>
                  <p className={labelClass}>Name</p>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <label htmlFor={fieldId('firstName')} className="text-white/75 text-xs mb-1 block">First Name (required)</label>
                      <input required id={fieldId('firstName')} maxLength={120} autoComplete="given-name" name="firstName" value={form.firstName} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor={fieldId('lastName')} className="text-white/75 text-xs mb-1 block">Last Name (required)</label>
                      <input required id={fieldId('lastName')} maxLength={120} autoComplete="family-name" name="lastName" value={form.lastName} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor={fieldId('email')} className={labelClass}>Email (required)</label>
                  <input required type="email" id={fieldId('email')} maxLength={254} autoComplete="email" name="email" value={form.email} onChange={handleChange} className={inputClass} />
                </div>

                {/* Newsletter */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={form.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border border-white/40 accent-[#B98942]"
                  />
                  <span className="text-white text-sm">Sign up for news and updates</span>
                </label>

                {/* Phone */}
                <div>
                  <label htmlFor={fieldId('phone')} className={labelClass}>Phone</label>
                  <input type="tel" id={fieldId('phone')} maxLength={80} autoComplete="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
                </div>

                {/* Purchase or refi */}
                <div>
                  <label htmlFor={fieldId('purchaseOrRefi')} className={labelClass}>Are you looking at a purchase or refinance? (required)</label>
                  <select required id={fieldId('purchaseOrRefi')} name="purchaseOrRefi" value={form.purchaseOrRefi} onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/30 pb-2 text-white text-sm focus:outline-none focus:border-white/70 transition-colors"
                    style={{ appearance: 'none' }}
                  >
                    <option value="" disabled style={{ color: '#1F2E2A' }}>Select one</option>
                    <option value="Purchase" style={{ color: '#1F2E2A' }}>Purchase</option>
                    <option value="Refinance" style={{ color: '#1F2E2A' }}>Refinance</option>
                  </select>
                </div>

                {financialFields.map(([name, label]) => (
                  <div key={name}>
                    <label htmlFor={fieldId(name)} className={labelClass}>{label}</label>
                    <input
                      id={fieldId(name)}
                      name={name}
                      maxLength={300}
                      value={form[name]}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                ))}

                {/* Anything else */}
                <div>
                  <label htmlFor={fieldId('anythingElse')} className={labelClass}>Anything else we should know?</label>
                  <textarea id={fieldId('anythingElse')} maxLength={3000} name="anythingElse" value={form.anythingElse} onChange={handleChange} rows={3} className={inputClass} />
                </div>
              </fieldset>

              <p role="alert" className={status === 'error' ? 'text-red-200 text-sm' : 'sr-only'}>
                {status === 'error' && (
                  <>
                    We couldn&apos;t confirm your request was sent. Try again, or call{' '}
                    <a href="tel:7204923335" className="font-semibold underline">(720) 492-3335</a>.
                  </>
                )}
              </p>

              <button
                type="submit"
                aria-disabled={status === 'sending'}
                className="uppercase tracking-widest text-sm font-semibold py-4 rounded aria-disabled:opacity-60 transition-opacity"
                style={{ backgroundColor: '#B98942', color: '#1F2E2A' }}
              >
                {status === 'sending' ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  )
}
