import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1c3023' }} className="text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Col 1 — Licensing */}
        <div className="md:col-span-1">
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Licensed Mortgage Lender. The Becker Team is powered by Xpert Home Lending.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Xpert Home Lending, Inc. is a Real Estate Broker Licensed by the California Department of Real Estate
          </p>
          <p className="text-sm text-gray-300 mb-1">DRE #02166758 &nbsp; NMLS: 2179191</p>
          <a
            href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2179191"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline mb-4 block"
            style={{ color: '#c8960c' }}
          >
            NMLS Consumer Access
          </a>
          <p className="text-sm text-gray-300 mb-1">Corporate Office:</p>
          <p className="text-sm text-gray-300 mb-3">
            100 Highpoint Park Way, Suite 202,<br />Braselton, GA 30517
          </p>
          <p className="text-sm text-gray-300">
            Phone:{' '}
            <a href="tel:4706605693" className="underline" style={{ color: '#c8960c' }}>
              (470) 660-5693
            </a>
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="text-base font-semibold mb-5 tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Programs', href: '/loan-programs' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Popular Programs */}
        <div>
          <h4 className="text-base font-semibold mb-5 tracking-wide">Popular Programs</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Asset Qualifier', href: '/loan-programs/asset-qualifier-loans' },
              { label: 'Mortgage Accelerator', href: '/loan-programs/mortgage-accelerator' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Connect */}
        <div>
          <h4 className="text-base font-semibold mb-5 tracking-wide">Connect</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="tel:7204923335" className="text-sm hover:text-white transition-colors" style={{ color: '#c8960c' }}>
                (720) 492-3335
              </a>
            </li>
            <li>
              <a href="mailto:Jamie@thebeckerteam.com" className="text-sm hover:text-white transition-colors" style={{ color: '#c8960c' }}>
                Jamie@thebeckerteam.com
              </a>
            </li>
            <li>
              <span className="text-sm text-gray-300">NMLS #794730</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo row */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex justify-end items-center gap-4">
        <Image
          src="/images/equal-housing.png"
          alt="Equal Housing Opportunity"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src="/images/equal-housing-lender.png"
          alt="Equal Housing Lender"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src="/images/xpert-logo.png"
          alt="Xpert Home Lending"
          width={60}
          height={50}
          className="object-contain"
        />
      </div>

      {/* License strip */}
      <div className="border-t border-white/10 py-5 px-6">
        <p className="text-xs text-gray-400 text-center max-w-6xl mx-auto leading-relaxed mb-3">
          <strong>Loan Originator Licenses:</strong> California – DFPI Mortgage Loan Originator License (License #CA-DOC794730, #CA-DFPI794730) · Colorado Mortgage Loan Originator License (License #100027807) · Florida Mortgage Loan Originator License (License #LO147810) · Idaho Mortgage Loan Originator License (License #MLO-2080794730) · Indiana-DFI Mortgage Loan Originator License (License #74355) · Louisiana Mortgage Originator License · Michigan Mortgage Loan Originator License (License #794730) · Texas – SML Mortgage Loan Originator
        </p>
        <p className="text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} The Becker Team. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
