"use client";

import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { ErrorDialog } from "@/components/elements/ErrorDialog";
import { LoginContainer } from "@/features/login/components/LoginContainer";
import { LoginContent } from "@/features/login/components/LoginContent";
import { isUser, login } from "@/functions/helpers/firebaseAuth";
import { useState } from "react";

export function Login() {
  const errorDialog = useDialog();

  const [message, setMessage] = useState<string>("");

  const handleLogin = async (method: "google" | "microsoft") => {
    const response = await login(method);

    if (!isUser(response)) {
      setMessage("");
      errorDialog.open();
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginContent login={handleLogin} />
      </LoginContainer>
      <ErrorDialog dialog={errorDialog} message={message} domain="認証" />
    </>
  );
}
