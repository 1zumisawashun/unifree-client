"use client";

import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { ErrorDialog } from "@/components/elements/ErrorDialog";
import { LoadingSpinner } from "@/components/elements/LoadingSpinner";
import { Panel } from "@/components/elements/Panel";
import { LoginBody } from "@/features/login/components/LoginBody";
import { login } from "@/functions/helpers/firebaseAuth";
import { isUser } from "@/functions/helpers/typeGuard";
import { useState } from "react";

export function Login() {
  const errorDialog = useDialog();

  const [message, setMessage] = useState<string>("");
  const [isPending, setIsPending] = useState(false);

  const handleLogin = async (method: "google" | "microsoft") => {
    setIsPending(true);
    try {
      const response = await login(method);
      if (!isUser(response)) throw new Error("ログインに失敗しました");
    } catch (error) {
      console.log(error);
      setMessage("");
      errorDialog.open();
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <Panel.Flame hasBorder shape="round">
        <Panel.Inner>
          <LoginBody login={handleLogin} />
        </Panel.Inner>
      </Panel.Flame>
      <ErrorDialog dialog={errorDialog} message={message} domain="認証" />
      {isPending && <LoadingSpinner />}
    </>
  );
}
