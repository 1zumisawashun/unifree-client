import { BookCard } from "@/components/elements/BookCard";
import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFallback";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { IndexListWrapper } from "@/features/index/components/IndexListWrapper";
import { books } from "@/functions/constants/books";
// import { authOptions } from "@/functions/libs/nextAuth";
// import { getServerSession } from "next-auth";
import { Suspense } from "react";
import "server-only";

export const IndexList = async () => {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  // init fetch here

  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<LoadingDot />}>
        <IndexListWrapper title="文系" href={`/books?category=文系`}>
          <BookCard.List books={[books[0]!, books[1]!]} />
        </IndexListWrapper>

        <IndexListWrapper title="理系" href={`/books?category=理系`}>
          <BookCard.List books={[books[2]!, books[3]!]} />
        </IndexListWrapper>

        <IndexListWrapper title="おすすめ" href={`/books?category=おすすめ`}>
          <BookCard.List books={[books[4]!, books[0]!]} />
        </IndexListWrapper>
      </Suspense>
    </ErrorBoundary>
  );
};
