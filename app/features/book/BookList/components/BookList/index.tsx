"use client"

import { BookItem } from "@/features/book/BookList/components/BookItem";
import { Book } from "@/functions/constants/books";
// import "server-only";
import styles from "./styles.module.scss";

type BookListProps = {
  books: Book[];
};

const BLOCK_NAME = "book-list";

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className={styles[`${BLOCK_NAME}-wrapper`]}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};
