import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFetch";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { BookList as BookListComponent } from "@/features/book/BookList/components/BookList";
import { books } from "@/functions/constants/books";
import { Suspense } from "react";
import "server-only";

export const BookList = async () => {
  // init fetch here
  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<LoadingDot />}>
        <BookListComponent books={books} />
      </Suspense>
    </ErrorBoundary>
  );
};
