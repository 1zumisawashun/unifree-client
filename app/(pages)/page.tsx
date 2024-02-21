import { LayoutCenter } from "@/components/layouts/LayoutCenter";
import { Index } from "@/features/index";
import { auth } from "@/functions/helpers/nextAuth/server";

export default async function Page() {
  const { isAuthenticated } = await auth();

  return (
    <LayoutCenter background="index">
      <Index isAuthenticated={isAuthenticated} />
    </LayoutCenter>
  );
}
