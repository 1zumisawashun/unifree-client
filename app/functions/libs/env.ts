import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  STRIPE_SECRET_KEY: str(),
});

export default env;
