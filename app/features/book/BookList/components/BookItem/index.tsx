"use client";

import { UnstyledButtonAnchor } from "@/components/buttons/UnstyledButtonAnchor";
import { Book } from "@/functions/constants/books";
import { formatCurrencyString } from "@/functions/helpers/formatCurrencyString";
import styles from "./styles.module.scss";

type Props = {
  book: Book;
};

const BLOCK_NAME = "book-item";

/* eslint-disable @next/next/no-img-element */
export const BookItem: React.FC<Props> = ({ book }) => {
  const { id, name, images, price, status, school } = book;
  return (
    <UnstyledButtonAnchor href={`/books/${id}`}>
      <div className={styles[`${BLOCK_NAME}-container`]}>
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
