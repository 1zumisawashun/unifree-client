import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFallback";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { ProductCard } from "@/components/elements/ProductCard";
import { Product } from "@/functions/types/Prisma";
import { Suspense } from "react";
import "server-only";

export const MypagePost = ({ products }: { products: Product[] }) => {
  // init fetch here
  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<LoadingDot />}>
        <ProductCard.List products={products} />
      </Suspense>
    </ErrorBoundary>
  );
};
