export const apiUrl =
  process.env['NEXT_PUBLIC_API_BASE_URL'] || 'http://localhost:3000'

export const API = {
  // stripe
  createStripePrices: `${apiUrl}/api/stripe/prices/create`,
  updateStripePrices: (priceId: string) =>
    `${apiUrl}/api/stripe/prices/${priceId}/edit`,
  createStripeCheckoutSessions: `${apiUrl}/api/stripe/checkout_sessions/create`
}
