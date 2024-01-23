import { Nl2br } from "@/components/elements/Nl2br";
import { tos } from "@/functions/constants/tos";
import styles from "./styles.module.scss";

export function Tos() {
  return (
    <main>
      <h1 className={styles["tos-title"]}>Terms of Service</h1>
      <p className={styles["tos-text"]}>The following text is a sample.</p>
      <Nl2br>{tos}</Nl2br>
    </main>
  );
}
