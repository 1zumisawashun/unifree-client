import { SubHeader } from "@/components/layouts/SubHeader";
import { BookDetail } from "@/features/book/BookDetail";
import { books } from "@/functions/constants/books";

export default async function Page() {
  return (
    <SubHeader title="Book Item" href="/books">
      <BookDetail book={books[0]!} />
    </SubHeader>
  );
}
