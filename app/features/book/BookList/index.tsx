import { BookCard } from "@/components/elements/BookCard";
import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFallback";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { SearchBar } from "@/features/book/BookList/components/SearchBar";
import { books } from "@/functions/constants/books";
import { Suspense } from "react";
import "server-only";

export const BookList = async () => {
  // init fetch here
  return (
    <>
      <SearchBar />
      <ErrorBoundary fallback={<ErrorFetch />}>
        <Suspense fallback={<LoadingDot />}>
          <BookCard.List books={books} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
