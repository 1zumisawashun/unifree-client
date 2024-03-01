import { Nl2br } from "@/components/elements/Nl2br";
import { tos } from "@/functions/constants/tos";
import "server-only";

export function Tos() {
  return (
    <main>
      <Nl2br>{tos}</Nl2br>
    </main>
  );
}
