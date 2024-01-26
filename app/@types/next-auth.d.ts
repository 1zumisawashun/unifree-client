/* eslint-disable */
import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      // Firebaseの認証情報
      uid: string;
      emailVerified?: boolean;
      token: unknown;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    // Firebaseの認証情報
    uid: string;
    emailVerified: boolean;
    token: unknown;
  }
}
