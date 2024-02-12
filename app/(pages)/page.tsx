import { Header } from "@/components/layouts/Header";
import { LayoutCenter } from "@/components/layouts/LayoutCenter";
import { Index } from "@/features/index";
import { authOptions } from "@/functions/libs/nextAuth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = !!session;

  return (
    <>
      <Header />
      <LayoutCenter background="index">
        <Index isAuthenticated={isAuthenticated} />
      </LayoutCenter>
    </>
  );
}
