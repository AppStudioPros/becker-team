export function trackWebsiteLead(source: 'Contact form' | 'Strategy review form') {
  type TrackEvent = (command: 'event', event: 'generate_lead', data: { lead_source: string }) => void

  try {
    const { gtag } = window as Window & { gtag?: TrackEvent }
    gtag?.('event', 'generate_lead', { lead_source: source })
  } catch {
    // A tracking failure must not affect the confirmation shown to the borrower.
  }
}
