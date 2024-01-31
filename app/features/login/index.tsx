"use client";

import signInGoogle from "@/assets/images/image_signin_google.png";
import signInMicrosoft from "@/assets/images/image_signin_microsoft.png";
import { UnstyledButton } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { ErrorDialog } from "@/components/elements/ErrorDialog";
import { Nl2br } from "@/components/elements/Nl2br";
import { Panel } from "@/components/elements/Panel";
import { NextJsIcon } from "@/components/elements/SvgIcon";
import { InputCheckbox } from "@/components/forms/InputCheckbox";
import { tos } from "@/functions/constants/tos";
import { isUser, login } from "@/functions/helpers/firebaseAuth";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "login";

export function Login() {
  const errorDialog = useDialog();

  const [checkbox, setCheckbox] = useState<boolean>(false);
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
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <div className={styles[`${BLOCK_NAME}-center-wrapper`]}>
          <NextJsIcon />
        </div>
        <hr />

        <p className={styles[`${BLOCK_NAME}-label`]}>
          利用規約 & プライバシーポリシー
        </p>

        <Panel
          scrollable
          hasBorder
          className={styles[`${BLOCK_NAME}-panel-wrapper`]}
        >
          <p className={styles[`${BLOCK_NAME}-panel-text`]}>
            <Nl2br>{tos}</Nl2br>
          </p>
        </Panel>

        <div className={styles[`${BLOCK_NAME}-center-wrapper`]}>
          <InputCheckbox
            onChange={(e) => {
              setCheckbox(e.target.checked);
            }}
          >
            同意する
          </InputCheckbox>
        </div>
        <hr />
        <p className={styles[`${BLOCK_NAME}-text`]}>
          どちらかにて新規登録もしくはログインしてください。
        </p>

        <div className={styles[`${BLOCK_NAME}-button-wrapper`]}>
          <UnstyledButton
            onClick={() => handleLogin("google")}
            aria-disabled={checkbox}
            className={styles[`${BLOCK_NAME}-button`]}
          >
            <Image
              src={signInGoogle}
              alt="sign-in-google"
              width={250}
              height={40}
            />
          </UnstyledButton>
          <UnstyledButton
            onClick={() => handleLogin("microsoft")}
            aria-disabled={checkbox}
            className={styles[`${BLOCK_NAME}-button`]}
          >
            <Image
              src={signInMicrosoft}
              alt="sign-in-microsoft"
              width={250}
              height={40}
            />
          </UnstyledButton>
        </div>
      </div>

      <ErrorDialog dialog={errorDialog} message={message} domain="認証" />
    </>
  );
}
