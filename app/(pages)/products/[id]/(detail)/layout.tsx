import { FixedFooterContainer } from "@/features/product/ProductDetail/components/FixedFooterContainer";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { authOptions } from "@/functions/libs/nextAuth";
import { getServerSession } from "next-auth";

export default async function Layout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  const userId = session?.user.id;

  return (
    <>
      <LayoutContainer hasFooter={!!userId}>
        <SubHeader title="Product Item" href="/products">
          {children}
        </SubHeader>
      </LayoutContainer>
      {userId && <FixedFooterContainer userId={userId} productId={params.id} />}
    </>
  );
}
