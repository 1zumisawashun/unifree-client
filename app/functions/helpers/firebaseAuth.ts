import { auth } from '@/functions/libs/firebase'
import { FirebaseError } from 'firebase/app'
import { OAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const getProvider = (method: 'google' | 'microsoft') => {
  switch (method) {
    case 'google':
      return new OAuthProvider('google.com')
    case 'microsoft':
      return new OAuthProvider('microsoft.com')
    default:
      return new OAuthProvider('google.com')
  }
}

/* eslint-disable */
async function loginByFirebaseAuth(
  method: 'google' | 'microsoft'
): Promise<
  { ok: boolean; idToken: string } | { ok: boolean; message: string }
> {
  try {
    const provider = getProvider(method)
    const userCredential = await signInWithPopup(auth, provider)
    const idToken = await userCredential.user.getIdToken()

    return { ok: true, idToken }
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        return {
          ok: false,
          message: `${error.customData?.['email']}は他のSNSと連携した既存ユーザーが登録済みです。`
        }
      }
      return {
        ok: false,
        message: `ログイン/新規登録に失敗しました。\n${error.message}`
      }
    }
    if (error instanceof Error) {
      return {
        ok: false,
        message: `エラーが発生しました。\n${error.message}`
      }
    }
    return {
      ok: false,
      message: `エラーが発生しました。`
    }
  }
}

async function logoutByFirebaseAuth() {
  await signOut(auth)
}

export { loginByFirebaseAuth, logoutByFirebaseAuth }
