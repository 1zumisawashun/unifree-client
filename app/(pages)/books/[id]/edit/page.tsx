import { SubHeader } from "@/components/layouts/SubHeader";
import { BookEdit } from "@/features/book/BookEdit";
import { books } from "@/functions/constants/books";

export default async function Page() {
  return (
    <SubHeader title="Book Edit" href="/books">
      <BookEdit book={books[0]!} />
    </SubHeader>
  );
}
