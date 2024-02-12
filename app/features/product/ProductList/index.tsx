import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFallback } from "@/components/elements/ErrorFallback";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { ProductCard } from "@/features/product/components/ProductCard";
import { Product } from "@/functions/types/Prisma";
import { Suspense } from "react";
import "server-only";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<LoadingDot />}>
        <ProductCard.List products={products} />
      </Suspense>
    </ErrorBoundary>
  );
};
