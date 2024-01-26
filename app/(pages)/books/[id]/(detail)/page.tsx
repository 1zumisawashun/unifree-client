import { FixedFooter } from "@/components/layouts/FixedFooter";
import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { BookDetail } from "@/features/book/BookDetail";
import { books } from "@/functions/constants/books";

export default function Page({ params }: { params: { id: string } }) {
  const book = books.find((book) => book.id === params.id);
  // console.log(book);

  return (
    <>
      <Header />
      <LayoutContainer hasFooter>
        <SubHeader title="Book Item" href="/books">
          <BookDetail book={book!} />
        </SubHeader>
      </LayoutContainer>
      <FixedFooter book={book!} />
    </>
  );
}
