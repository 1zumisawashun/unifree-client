import logo from "@/assets/images/image_logo_header.png";
import signInGoogle from "@/assets/images/image_signin_google.png";
import { UnstyledButton } from "@/components/buttons";
import { InputCheckbox } from "@/components/forms/InputCheckbox";
import { LoginTos } from "@/features/login/components/LoginTos";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "login-body";

export function LoginBody({
  login,
}: {
  login: (method: "google" | "microsoft") => Promise<void>;
}) {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <div className={styles[`${BLOCK_NAME}-center-wrapper`]}>
        <Image src={logo} alt="" width={150} height={50} />
      </div>

      <p className={styles[`${BLOCK_NAME}-label`]}>
        利用規約 & プライバシーポリシー
      </p>

      <LoginTos />

      <div className={styles[`${BLOCK_NAME}-center-wrapper`]}>
        <InputCheckbox
          onChange={(e) => {
            setCheckbox(e.target.checked);
          }}
        >
          同意する
        </InputCheckbox>
      </div>

      <p className={styles[`${BLOCK_NAME}-text`]}>
        どちらかにて新規登録もしくはログインしてください。
      </p>

      <div className={styles[`${BLOCK_NAME}-button-wrapper`]}>
        <UnstyledButton
          onClick={() => login("google")}
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
      </div>
    </div>
  );
}
