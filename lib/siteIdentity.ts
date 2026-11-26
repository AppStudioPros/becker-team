export const siteUrl = 'https://www.thebeckerteam.com'

const officeAddress = {
  '@type': 'PostalAddress',
  streetAddress: '201 Columbine Street, Suite 300',
  addressLocality: 'Denver',
  addressRegion: 'CO',
  postalCode: '80206',
  addressCountry: 'US',
}

const xpert = {
  '@type': 'Organization',
  '@id': 'https://xperthomelending.com/#organization',
  name: 'Xpert Home Lending, Inc.',
  identifier: 'Company NMLS #2179191',
  url: 'https://xperthomelending.com/',
}

export const teamReference = {
  '@type': 'FinancialService',
  '@id': siteUrl + '/#business',
  name: 'The Becker Team',
  url: siteUrl + '/',
}

export const jamieBecker = {
  '@type': 'Person',
  '@id': siteUrl + '/about#jamie-becker',
  name: 'Jamie Becker',
  jobTitle: 'Mortgage Broker',
  identifier: 'Individual NMLS #794730',
  url: siteUrl + '/about',
  telephone: '+17204923335',
  email: 'Jamie@thebeckerteam.com',
  address: officeAddress,
  worksFor: [teamReference, xpert],
  sameAs: [
    'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/794730',
    'https://www.zillow.com/lender-profile/Jamie%20Becker/',
    'https://www.linkedin.com/in/jamiebeckermortgage',
    'https://xperthomelending.com/loan-directory/james-becker',
  ],
}

export const teamLogo = {
  '@type': 'ImageObject',
  url: siteUrl + '/icon.png',
  width: 192,
  height: 192,
}

export const beckerTeam = {
  ...teamReference,
  address: officeAddress,
  telephone: jamieBecker.telephone,
  email: jamieBecker.email,
  logo: teamLogo,
  founder: { '@id': jamieBecker['@id'], '@type': 'Person', name: jamieBecker.name, url: jamieBecker.url },
  parentOrganization: xpert,
  sameAs: [
    'https://www.google.com/maps?cid=14064244300182174262',
    'https://reviews.birdeye.com/the-becker-team-166555775229585',
    'https://www.linkedin.com/company/the-becker-team',
  ],
}
