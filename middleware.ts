/**
 * get pathname on server side
 * providerでauth判定する実装の過程で調査、withAuthで組み込みしたので不要
 * @see https://github.com/vercel/next.js/issues/43704#issuecomment-1411186664
 *
 * next-auth + middleware
 * @see https://next-auth.js.org/configuration/nextjs#advanced-usage
 */

import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// The middleware function will only be invoked if the authorized callback returns true.
function middleware(request: NextRequestWithAuth) {
  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}

export default withAuth(middleware, {
  callbacks: {
    authorized: ({ token }) => {
      return !!token;
    },
  },
  pages: {
    signIn: "/login",
  },
});

/**
 * 以下のpathにマッチする場合withAuthが発火する
 * withAuthがtrueを返す場合、middlewareが発火する
 * withAuthがfalseを返す場合、ログインページにリダイレクトされる
 */
export const config = {
  matcher: [
    "/mypage/:path*",
    "/cart/:path*",
    "/products/:path/edit",
    "/products/create",
  ],
};
