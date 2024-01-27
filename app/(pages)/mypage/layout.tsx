import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { MypageHeader } from "@/features/mypage/MypageHeader";
import { authOptions } from "@/functions/libs/nextAuth";
import { getServerSession } from "next-auth";
import "server-only";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Header />
      <LayoutContainer>
        <MypageHeader user={session?.user} />
        {children}
      </LayoutContainer>
    </>
  );
}
