import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFallback";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { IndexList as IndexListComponent } from "@/features/index/components/IndexList";
import { IndexListWrapper } from "@/features/index/components/IndexListWrapper";
import { products } from "@/functions/constants/products";
import { Suspense } from "react";
import "server-only";

export const IndexList = async () => {
  // init fetch here

  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<LoadingDot />}>
        <IndexListWrapper title="文系" href={`/products?category=文系`}>
          <IndexListComponent products={products} />
        </IndexListWrapper>

        <IndexListWrapper title="理系" href={`/products?category=理系`}>
          <IndexListComponent products={products} />
        </IndexListWrapper>

        <IndexListWrapper title="おすすめ" href={`/products?category=おすすめ`}>
          <IndexListComponent products={products} />
        </IndexListWrapper>
      </Suspense>
    </ErrorBoundary>
  );
};
