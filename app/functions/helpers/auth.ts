import { auth } from "@/functions/libs/firebase";
import { FirebaseError } from "firebase/app";
import { OAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {
  signIn as signInByNextAuth,
  signOut as signOutByNextAuth,
} from "next-auth/react";

const isUser = (item: any) => !!item?.status;

const getProvider = (method: "google" | "microsoft") => {
  switch (method) {
    case "google":
      return new OAuthProvider("google.com");
    case "microsoft":
      return new OAuthProvider("microsoft.com");
    default:
      return new OAuthProvider("google.com");
  }
};

/* eslint-disable */
const login = async (method: "google" | "microsoft") => {
  try {
    const provider = getProvider(method);
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    const idToken = await user.getIdToken();

    const response = await signInByNextAuth("credentials", {
      idToken,
      callbackUrl: `/`,
    });
    console.log(response);

    return { status: "ok" };
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === "auth/account-exists-with-different-credential") {
        return `${error.customData?.["email"]}は他のSNSと連携した既存ユーザーが登録済みです。`;
      }
      return `ログイン/新規登録に失敗しました。\n${error.message}`;
    }
    if (error instanceof Error) {
      return `エラーが発生しました。\n${error.message}`;
    }
    return "エラーが発生しました。";
  }
};

const logout = async () => {
  await signOut(auth);
  await signOutByNextAuth({
    callbackUrl: `/`,
  });
};

export { isUser, login, logout };
