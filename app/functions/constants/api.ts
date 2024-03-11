export const apiUrl =
  process.env["NEXT_PUBLIC_API_BASE_URL"] || "http://localhost:3000";

export const API = {
  // prisma user
  createPrismaUser: `${apiUrl}/api/prisma/user/create`,
  editPrismaUser: (userId: number) =>
    `${apiUrl}/api/prisma/user/${userId}/edit`,
  // prisma product
  createPrismaProduct: `${apiUrl}/api/prisma/product/create`,
  editPrismaProduct: (productId: number) =>
    `${apiUrl}/api/prisma/product/${productId}/edit`,
  deletePrismaProduct: (productId: number) =>
    `${apiUrl}/api/prisma/product/${productId}/delete`,
  // prisma match
  createPrismaMatch: `${apiUrl}/api/prisma/match/create`,
  // prisma message
  createPrismaMessage: `${apiUrl}/api/prisma/message/create`,
  // stripe
  createStripePrices: `${apiUrl}/api/stripe/prices/create`,
  editStripePrices: (priceId: string) =>
    `${apiUrl}/api/stripe/prices/${priceId}/edit`,
  createStripeCheckoutSessions: `${apiUrl}/api/stripe/checkout_sessions/create`,
};
