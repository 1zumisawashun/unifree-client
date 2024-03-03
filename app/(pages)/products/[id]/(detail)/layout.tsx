import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { FixedFooterContainer } from "@/features/product/ProductDetail/components/FixedFooterContainer";
import { authOptions } from "@/functions/libs/nextAuth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

const title = "Product Detail";

export const metadata: Metadata = {
  title: `UniFli | ${title}`,
};

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
        <SubHeader title={title} href="/products">
          {children}
        </SubHeader>
      </LayoutContainer>
      {userId && <FixedFooterContainer userId={userId} productId={params.id} />}
    </>
  );
}
