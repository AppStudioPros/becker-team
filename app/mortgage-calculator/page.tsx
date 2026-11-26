'use client'

import { useState } from 'react'

function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function calcMonthly(principal: number, annualRate: number, years: number): number {
  if (annualRate === 0) return principal / (years * 12)
  const r = annualRate / 100 / 12
  const n = years * 12
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

export default function CalculatorPage() {
  const [price, setPrice] = useState(400000)
  const [down, setDown] = useState(20)
  const [rate, setRate] = useState(7.0)
  const [term, setTerm] = useState(30)
  const [tax, setTax] = useState(300)
  const [insurance, setInsurance] = useState(150)

  const loanAmount = price * (1 - down / 100)
  const monthly = calcMonthly(loanAmount, rate, term)
  const total = monthly + tax + insurance

  return (
    <>
      {/* ── Header ── */}
      <section style={{ backgroundColor: '#1F2E2A' }} className="py-20 px-6 text-center text-white">
        <h1
          className="text-6xl md:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Mortgage Calculator
        </h1>
        <p className="text-white/80">Estimate your monthly payment and explore scenarios</p>
      </section>

      {/* ── Calculator ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 px-6 pb-0">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="flex flex-col gap-6">
            {[
              { id: 'home-price', label: 'Home Price', value: price, setter: setPrice, min: 50000, max: 5000000, step: 5000, prefix: '$' },
              { id: 'down-payment', label: 'Down Payment (%)', value: down, setter: setDown, min: 0, max: 100, step: 1, prefix: '' },
              { id: 'interest-rate', label: 'Interest Rate (%)', value: rate, setter: setRate, min: 0.5, max: 20, step: 0.1, prefix: '' },
              { id: 'property-tax', label: 'Monthly Property Tax', value: tax, setter: setTax, min: 0, max: 3000, step: 50, prefix: '$' },
              { id: 'home-insurance', label: 'Monthly Insurance', value: insurance, setter: setInsurance, min: 0, max: 2000, step: 25, prefix: '$' },
            ].map((field) => (
              <div key={field.label}>
                <div className="flex justify-between mb-1">
                  <label htmlFor={field.id} className="text-sm font-semibold" style={{ color: '#1F2E2A' }}>
                    {field.label}
                  </label>
                  <span className="text-sm font-semibold" style={{ color: '#1F2E2A' }}>
                    {field.prefix}{field.value.toLocaleString()}
                  </span>
                </div>
                <input
                  id={field.id}
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={field.value}
                  onChange={(e) => field.setter(Number(e.target.value))}
                  className="w-full h-2 rounded appearance-none cursor-pointer"
                  style={{ accentColor: '#1F2E2A' }}
                />
              </div>
            ))}

            {/* Loan term */}
            <div>
              <span id="loan-term-label" className="text-sm font-semibold block mb-2" style={{ color: '#1F2E2A' }}>
                Loan Term
              </span>
              <div role="group" aria-labelledby="loan-term-label" className="flex gap-3">
                {[10, 15, 20, 30].map((y) => (
                  <button
                    key={y}
                    aria-pressed={term === y}
                    onClick={() => setTerm(y)}
                    className="flex-1 py-2 text-sm font-semibold rounded border transition-colors"
                    style={{
                      backgroundColor: term === y ? '#1F2E2A' : 'white',
                      color: term === y ? 'white' : '#1F2E2A',
                      borderColor: '#1F2E2A',
                    }}
                  >
                    {y} yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div
            className="rounded p-8 flex flex-col justify-center"
            style={{ backgroundColor: '#1F2E2A' }}
          >
            <h2
              className="text-white text-xl font-bold mb-6 text-center"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Estimated Monthly Payment
            </h2>

            <div className="text-center mb-8">
              <p role="status" aria-live="polite" aria-atomic="true" className="text-5xl font-bold text-white mb-1"><span className="sr-only">Estimated monthly payment: </span>{formatCurrency(total)}</p>
              <p className="text-white/60 text-sm">per month (estimated)</p>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/20 pt-6">
              {[
                { label: 'Loan Amount', val: formatCurrency(loanAmount) },
                { label: 'Principal & Interest', val: formatCurrency(monthly) },
                { label: 'Property Tax', val: formatCurrency(tax) },
                { label: 'Home Insurance', val: formatCurrency(insurance) },
              ].map((row) => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-white/70 text-sm">{row.label}</span>
                  <span className="text-white text-sm font-semibold">{row.val}</span>
                </div>
              ))}
            </div>

            <p className="text-white/50 text-xs mt-6 text-center">
              This estimate excludes mortgage insurance and HOA dues. If either applies, add it to your monthly budget.
            </p>

            <a
              href="https://2179191.my1003app.com/794730/register"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-white uppercase tracking-widest text-sm font-semibold px-8 py-4 rounded text-center hover:bg-gray-100 transition-colors"
              style={{ color: '#1F2E2A' }}
            >
              Get Pre-Approved
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-24 md:py-36 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.55), rgba(20,35,25,0.55)), url("/images/cta-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to get started?
        </h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Let&apos;s discuss your unique situation and find the perfect loan for you
        </p>
        <a
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
