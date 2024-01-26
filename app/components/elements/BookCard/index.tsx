import { UnstyledButtonAnchor } from "@/components/buttons/UnstyledButtonAnchor";
import { Book } from "@/functions/constants/books";
import { formatCurrencyString } from "@/functions/helpers/formatCurrencyString";
import "server-only";
import styles from "./styles.module.scss";

const BLOCK_NAME = "book-card";

/* eslint-disable @next/next/no-img-element */
const Item = ({ book }: { book: Book }) => {
  const { id, name, images, price, status, school } = book;
  return (
    <UnstyledButtonAnchor href={`/books/${id}`}>
      <div className={styles[`${BLOCK_NAME}-wrapper`]}>
        <div className={styles[`${BLOCK_NAME}-layer`]} data-status={status}>
          <img
            className={styles[`${BLOCK_NAME}-image`]}
            src={images[0]?.src}
            alt=""
          />
          <p>SOLD OUT</p>
        </div>
        <p className={styles[`${BLOCK_NAME}-title`]}>{name}</p>
        <div className={styles[`${BLOCK_NAME}-content`]}>
          <p>{school}</p>
          <span>|</span>
          <p>{formatCurrencyString(price)}</p>
        </div>
      </div>
    </UnstyledButtonAnchor>
  );
};

const List = ({ books }: { books: Book[] }) => {
  return (
    <div className={styles[`${BLOCK_NAME}-list`]}>
      {books.map((book) => (
        <Item key={book.id} book={book} />
      ))}
    </div>
  );
};

export const BookCard = {
  List,
  Item,
};
