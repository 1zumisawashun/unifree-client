"use client";

import { BookItem } from "@/features/book/BookList/components/BookItem";
import { Book } from "@/functions/constants/books";
// import "server-only";
import styles from "./styles.module.scss";

type BookListProps = {
  books: Book[];
};

const BLOCK_NAME = "index-list";

export const IndexList: React.FC<BookListProps> = ({ books }) => {
  const _books = [books[0], books[1]];

  return (
    <div className={styles[`${BLOCK_NAME}-wrapper`]}>
      {_books.map((book) => (
        <BookItem key={book!.id} book={book!} />
      ))}
    </div>
  );
};