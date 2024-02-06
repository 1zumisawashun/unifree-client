import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFallback";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { ProductCard } from "@/components/elements/ProductCard";
import { SearchBar } from "@/features/product/ProductList/components/SearchBar";
import { Product } from "@/functions/types/Prisma";
import { Suspense } from "react";
import "server-only";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <>
      <SearchBar />
      <ErrorBoundary fallback={<ErrorFetch />}>
        <Suspense fallback={<LoadingDot />}>
          <ProductCard.List products={products} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
