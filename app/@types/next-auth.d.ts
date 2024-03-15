/* eslint-disable */
import { DefaultSession } from 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      uid: string
      id: number
      isAdmin: boolean
      expires: string
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    uid: string
    id: number
    isAdmin: boolean
    expires: string
  }
}
