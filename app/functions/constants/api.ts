const apiUrl =
  process.env["NEXT_PUBLIC_API_BASE_URL"] || "http://localhost:3000";

export const API = {
  // prisma
  createPrismaUser: `${apiUrl}/api/prisma/user/create`,
  editPrismaUser: (userId: number) =>
    `${apiUrl}/api/prisma/user/${userId}/edit`,
  createPrismaProduct: `${apiUrl}/api/prisma/product/create`,
  editPrismaProduct: (productId: number) =>
    `${apiUrl}/api/prisma/product/${productId}/edit`,
  createPrismaMatch: `${apiUrl}/api/prisma/match/create`,
  //stripe
  createStripePrices: `${apiUrl}/api/stripe/prices/create`,
  editStripePrices: (priceId: string) =>
    `${apiUrl}/api/stripe/prices/${priceId}/edit`,
  createStripeCheckoutSessions: `${apiUrl}/api/stripe/checkout_sessions/create`,
};
