import { signIn, signOut } from 'next-auth/react'

async function loginByNextAuth(idToken: string) {
  await signIn('credentials', {
    idToken,
    callbackUrl: `/`
  })
}

async function logoutByNextAuth() {
  await signOut({
    callbackUrl: `/login`
  })
}

export { loginByNextAuth, logoutByNextAuth }
