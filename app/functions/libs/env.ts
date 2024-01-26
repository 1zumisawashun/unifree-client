import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  // stripe
  STRIPE_SECRET_KEY: str(),
  // firebase-admin
  FIREBASE_TYPE: str(),
  FIREBASE_PROJECT_ID: str(),
  FIREBASE_PRIVATE_KEY_ID: str(),
  FIREBASE_PRIVATE_KEY: str(),
  FIREBASE_CLIENT_EMAIL: str(),
  FIREBASE_CLIENT_ID: str(),
  FIREBASE_AUTH_URI: str(),
  FIREBASE_TOKEN_URI: str(),
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL: str(),
  FIREBASE_CLIENT_X509_CERT_URL: str(),
  FIREBASE_UNIVERSE_DOMAIN: str(),
});

export default env;
