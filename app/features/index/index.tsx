import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFallback";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { IndexList as IndexListComponent } from "@/features/index/components/IndexList";
import { IndexListWrapper } from "@/features/index/components/IndexListWrapper";
import { books } from "@/functions/constants/books";
import { Suspense } from "react";
import "server-only";

export const IndexList = async () => {
  // init fetch here

  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<LoadingDot />}>
        <IndexListWrapper title="文系" href={`/books?category=文系`}>
          <IndexListComponent books={books} />
        </IndexListWrapper>

        <IndexListWrapper title="理系" href={`/books?category=理系`}>
          <IndexListComponent books={books} />
        </IndexListWrapper>

        <IndexListWrapper title="おすすめ" href={`/books?category=おすすめ`}>
          <IndexListComponent books={books} />
        </IndexListWrapper>
      </Suspense>
    </ErrorBoundary>
  );
};
