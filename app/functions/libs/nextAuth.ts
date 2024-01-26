import auth from "@/functions/libs/firebaseAdmin";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import "server-only";

/* eslint-disable */
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      // @ts-ignore
      authorize: async ({ idToken }: any) => {
        if (idToken) {
          try {
            const decoded = await auth.verifyIdToken(idToken);
            return decoded;
          } catch (err) {
            console.error(err);
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    // sessionにJWTトークンからのユーザ情報を格納
    async session({ session, token }) {
      session.user.emailVerified = token.email_verified;
      session.user.uid = token.uid;
      session.user.expires = session.expires;
      session.user.token = token.idToken;
      return session;
    },
  },
};
