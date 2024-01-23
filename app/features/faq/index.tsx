import { Nl2br } from "@/components/elements/Nl2br";
import { faq } from "@/functions/constants/faq";
import styles from "./styles.module.scss";

export function Faq() {
  return (
    <main>
      <h1 className={styles["faq-title"]}>Frequently Asked Questions</h1>
      <p className={styles["faq-text"]}>The following text is a sample.</p>
      <Nl2br>{faq}</Nl2br>
    </main>
  );
}
