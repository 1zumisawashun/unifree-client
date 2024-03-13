import { createPrismaUser } from '@/features/login/hooks/createPrismaUser'
import auth from '@/functions/libs/firebaseAdmin'
import { DecodedIdToken } from 'firebase-admin/auth'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import 'server-only'

type User = { uid: DecodedIdToken['uid']; id: number }

/* eslint-disable */
export const authOptions = {
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
          const decodedIdToken = await auth.verifyIdToken(idToken)
          const { uid, picture } = decodedIdToken
          const user = await createPrismaUser({ uid, picture })
          return user
        } catch (err) {
          console.log('authorize error:', err)
          return null
        }
      }
    })
  ],
  /**
   * The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
   * @see https://next-auth.js.org/configuration/options
   */
  session: {
    strategy: 'jwt'
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
      return { ...token, ...(user as unknown as User) }
    },
    /**
     * jwtコールバックが呼ばれた後に実行される
     * sessionコールバックはsessionがチェックされるたびに呼ばれる（例:useSession, getServerSession）
     */
    async session({ session, token }) {
      session.user.uid = token.uid
      session.user.id = token.id
      /**
       * session.expiresはgetServerSessionで取得できないぽい
       * @see https://github.com/nextauthjs/next-auth/discussions/8907
       *
       * 公式ドキュメントでも触れられているぽい（This means that the expires value is stripped away from session in Server Components.）
       * @see https://next-auth.js.org/configuration/nextjs#in-app-directory
       */
      session.user.expires = session.expires

      return session
    }
  }
} satisfies NextAuthOptions
