import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const config = {
  apiKey: process.env['NEXT_PUBLIC_FIREBASE_API_KEY'],
  appId: process.env['NEXT_PUBLIC_FIREBASE_APP_ID'],
  messagingSenderId: process.env['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
  projectId: process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'],
  authDomain: process.env['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'],
  storageBucket: process.env['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'],
  measurementId: process.env['NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID']
}

const getFirebaseApp = () => {
  if (getApps().length === 0) {
    return initializeApp(config)
  }
  return getApp()
}

const app = getFirebaseApp()

const auth = getAuth(app)
const storage = getStorage(app)

export { auth, storage }
