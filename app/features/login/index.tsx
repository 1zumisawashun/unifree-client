"use client";

import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { ErrorDialog } from "@/components/elements/ErrorDialog";
import { LoadingSpinner } from "@/components/elements/LoadingSpinner";
import { Panel } from "@/components/elements/Panel";
import { LoginBody } from "@/features/login/components/LoginBody";
import { loginByFirebaseAuth } from "@/functions/helpers/firebaseAuth";
import { loginByNextAuth } from "@/functions/helpers/nextAuth";
import { useState } from "react";

export function Login() {
  const errorDialog = useDialog();

  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const hasIdToken = (value: any): value is { ok: boolean; idToken: string } =>
    value.ok;

  const login = async (method: "google" | "microsoft") => {
    setIsPending(true);

    try {
      const response = await loginByFirebaseAuth(method);
      if (hasIdToken(response)) {
        await loginByNextAuth(response.idToken); // トップページへリダイレクトされる
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      }
      errorDialog.open();
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <Panel.Flame hasBorder shape="round">
        <Panel.Inner>
          <LoginBody login={login} />
        </Panel.Inner>
      </Panel.Flame>
      <ErrorDialog dialog={errorDialog} message={message} domain="ログイン" />
      {isPending && <LoadingSpinner />}
    </>
  );
}
