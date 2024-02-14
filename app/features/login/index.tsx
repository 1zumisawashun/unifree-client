"use client";

import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { ErrorDialog } from "@/components/elements/ErrorDialog";
import { Panel } from "@/components/elements/Panel";
import { LoginBody } from "@/features/login/components/LoginBody";
import { login } from "@/functions/helpers/firebaseAuth";
import { isUser } from "@/functions/helpers/typeGuard";
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
      <Panel.Flame hasBorder shape="round">
        <Panel.GapInner>
          <LoginBody login={handleLogin} />
        </Panel.GapInner>
      </Panel.Flame>
      <ErrorDialog dialog={errorDialog} message={message} domain="認証" />
    </>
  );
}
