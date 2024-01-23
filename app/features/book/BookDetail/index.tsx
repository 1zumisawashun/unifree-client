"use client";

import {
  Button,
  ButtonAnchor,
  ButtonWrapper,
  UnstyledButtonAnchor,
} from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { Label } from "@/components/elements/Label";
import { Book } from "@/functions/constants/books";
import { useDialog } from "@/functions/hooks/useDialog";
import styles from "./styles.module.scss";

type BookDetailProps = {
  book: Book;
};

const BLOCK_NAME = "book-detail";

/* eslint-disable @next/next/no-img-element */
export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  const { id, title, categories, body, images } = book;

  const deleteDialog = useDialog();

  return (
    <>
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <img
          className={styles[`${BLOCK_NAME}-image`]}
          src={images[0]?.src}
          alt=""
        />
        <h3 className={styles[`${BLOCK_NAME}-title`]}>{title}</h3>

        {categories ? (
          <ButtonWrapper>
            {categories.map((category) => (
              <UnstyledButtonAnchor
                key={category.id}
                href={`/books?category=${category.name}`}
              >
                <Label>{category.name}</Label>
              </UnstyledButtonAnchor>
            ))}
          </ButtonWrapper>
        ) : null}

        <p className={styles[`${BLOCK_NAME}-text`]}>{body}</p>

        <ButtonWrapper position="end">
          <ButtonAnchor href={`/books/${id}/edit`}>Edit</ButtonAnchor>
          <Button onClick={deleteDialog.open} variant="outlined">
            Delete
          </Button>
        </ButtonWrapper>
      </div>

      <Dialog ref={deleteDialog.ref} close={deleteDialog.close}>
        <div className={styles[`${BLOCK_NAME}-modal-body`]}>
          <p className={styles[`${BLOCK_NAME}-modal-text`]}>
            本当に削除しますか？
          </p>
          <ButtonWrapper position="center">
            <Button onClick={deleteDialog.close} theme="secondary">
              Cancel
            </Button>
            <Button onClick={() => alert("delete demo")} theme="danger">
              Delete
            </Button>
          </ButtonWrapper>
        </div>
      </Dialog>
    </>
  );
};
