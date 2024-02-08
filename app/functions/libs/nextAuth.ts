import { API } from "@/functions/constants/api";
import auth from "@/functions/libs/firebaseAdmin";
import { DecodedIdToken } from "firebase-admin/auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";
import "server-only";

const url = API.createPrismaUser;

type JwtUser = { uid: DecodedIdToken["uid"]; id: number };

/* eslint-disable */
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      /**
       * next-authのsignIn関数で発火する
       * callbacksのsignIn関数との違いは？
       */
      // @ts-ignore
      authorize: async ({ idToken }: { idToken: string }) => {
        try {
          const decodedIdToken = await auth.verifyIdToken(idToken);
          const { uid, picture } = decodedIdToken;

          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ uid, photoURL: picture, displayName: null }),
          });
          const json = await response.json();

          return { uid, id: json.id };
        } catch (err) {
          console.error(err);
          redirect("/login");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    /**
     * authorize関数の返り値をusersで受け取る
     * 引数（user、account、profile、isNewUser）は、ユーザーがサインインした後
     * 新しいsessionでこのコールバックが「最初に呼び出されたときのみ」渡される
     * それ以降の呼び出しではtokenのみが使用可能
     * そのためuserをsessionでも使用したい場合はtokenにuserを追加する必要がある
     */
    async jwt({ token, user }) {
      return { ...token, ...(user as unknown as JwtUser) };
    },
    /**
     * jwtコールバックが呼ばれた後に実行される
     * sessionコールバックはsessionがチェックされるたびに呼ばれる（例:useSession, getServerSession）
     */
    async session({ session, token }) {
      session.user.uid = token.uid;
      session.user.id = token.id;
      /**
       * session.expiresはgetServerSessionで取得できないぽい
       * @see https://github.com/nextauthjs/next-auth/discussions/8907
       */
      session.user.expires = session.expires;

      return session;
    },
  },
};
