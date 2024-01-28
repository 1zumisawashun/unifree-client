import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
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
        <SubHeader title="Mypage" href="/">
          <MypageHeader user={session?.user} />
        </SubHeader>
        {children}
      </LayoutContainer>
    </>
  );
}
