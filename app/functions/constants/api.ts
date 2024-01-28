const apiUrl =
  process.env["NEXT_PUBLIC_API_BASE_URL"] || "http://localhost:3000";

export const API = {
  createStripePrices: `${apiUrl}/api/stripe/prices/create`,
  deleteStripePrices: `${apiUrl}/api/stripe/prices/delete`,
  createStripeCheckoutSessions: `${apiUrl}/api/stripe/checkout_sessions/create`,
};
