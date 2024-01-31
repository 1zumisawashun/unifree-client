import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFallback";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { ProductCard } from "@/components/elements/ProductCard";
import { products } from "@/functions/constants/products";
import { Suspense } from "react";
import "server-only";

export const MypageHistory = async () => {
  // init fetch here
  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<LoadingDot />}>
        <ProductCard.List products={products.reverse()} />
      </Suspense>
    </ErrorBoundary>
  );
};
