'use client'

import { useState, useEffect } from 'react'
import type { Metadata } from 'next'

// Note: 'use client' pages don't export metadata — set it in a parent layout if needed

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
      <section style={{ backgroundColor: '#1c3023' }} className="py-20 px-6 text-center text-white">
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Mortgage Calculator
        </h1>
        <p className="text-white/80">Estimate your monthly payment and explore scenarios</p>
      </section>

      {/* ── Calculator ── */}
      <section style={{ backgroundColor: '#f5ecd8' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="flex flex-col gap-6">
            {[
              { label: 'Home Price', value: price, setter: setPrice, min: 50000, max: 5000000, step: 5000, prefix: '$' },
              { label: 'Down Payment (%)', value: down, setter: setDown, min: 0, max: 100, step: 1, prefix: '' },
              { label: 'Interest Rate (%)', value: rate, setter: setRate, min: 0.5, max: 20, step: 0.1, prefix: '' },
              { label: 'Monthly Property Tax', value: tax, setter: setTax, min: 0, max: 3000, step: 50, prefix: '$' },
              { label: 'Monthly Insurance', value: insurance, setter: setInsurance, min: 0, max: 2000, step: 25, prefix: '$' },
            ].map((field) => (
              <div key={field.label}>
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-semibold" style={{ color: '#1c3023' }}>
                    {field.label}
                  </label>
                  <span className="text-sm font-semibold" style={{ color: '#1c3023' }}>
                    {field.prefix}{field.value.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={field.value}
                  onChange={(e) => field.setter(Number(e.target.value))}
                  className="w-full h-2 rounded appearance-none cursor-pointer"
                  style={{ accentColor: '#1c3023' }}
                />
              </div>
            ))}

            {/* Loan term */}
            <div>
              <label className="text-sm font-semibold block mb-2" style={{ color: '#1c3023' }}>
                Loan Term
              </label>
              <div className="flex gap-3">
                {[10, 15, 20, 30].map((y) => (
                  <button
                    key={y}
                    onClick={() => setTerm(y)}
                    className="flex-1 py-2 text-sm font-semibold rounded border transition-colors"
                    style={{
                      backgroundColor: term === y ? '#1c3023' : 'white',
                      color: term === y ? 'white' : '#1c3023',
                      borderColor: '#1c3023',
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
            style={{ backgroundColor: '#1c3023' }}
          >
            <h2
              className="text-white text-xl font-bold mb-6 text-center"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Estimated Monthly Payment
            </h2>

            <div className="text-center mb-8">
              <p className="text-5xl font-bold text-white mb-1">{formatCurrency(total)}</p>
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
              This is an estimate for informational purposes only. Contact Jamie for an accurate quote.
            </p>

            <a
              href="https://2179191.my1003app.com/794730/register"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-white uppercase tracking-widest text-sm font-semibold px-8 py-4 text-center hover:bg-gray-100 transition-colors"
              style={{ color: '#1c3023' }}
            >
              Get Pre-Approved
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
