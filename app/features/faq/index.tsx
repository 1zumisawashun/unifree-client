import { Nl2br } from "@/components/elements/Nl2br";
import { faq } from "@/functions/constants/faq";
import "server-only";

export function Faq() {
  return (
    <main>
      <Nl2br>{faq}</Nl2br>
    </main>
  );
}
