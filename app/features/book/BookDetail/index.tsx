"use client";

import {
  Button,
  ButtonAnchor,
  ButtonWrapper,
  UnstyledButtonAnchor,
} from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Label } from "@/components/elements/Label";
import { Book } from "@/functions/constants/books";
import { formatCurrencyString } from "@/functions/helpers/formatCurrencyString";
import styles from "./styles.module.scss";

type Props = {
  book: Book;
};

const BLOCK_NAME = "book-detail";

/* eslint-disable @next/next/no-img-element */
export const BookDetail: React.FC<Props> = ({ book }) => {
  const { id, name, categories, body, images, price } = book;

  const deleteDialog = useDialog();

  const _delete = async () => {
    const response = await fetch("/api/stripe/prices/delete", {
      method: "POST",
      body: JSON.stringify([id]),
    });
    const json = await response.json();
    // change db active props to false
    console.log(json);
  };

  return (
    <>
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <img
          className={styles[`${BLOCK_NAME}-image`]}
          src={images[0]?.src}
          alt=""
        />
        <h3 className={styles[`${BLOCK_NAME}-title`]}>{name}</h3>

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

        <p className={styles[`${BLOCK_NAME}-price`]}>
          {formatCurrencyString(price)}
        </p>

        <p className={styles[`${BLOCK_NAME}-text`]}>{body}</p>

        <ButtonWrapper position="end">
          <Button onClick={deleteDialog.open} variant="outlined" theme="danger">
            Delete
          </Button>
          <ButtonAnchor href={`/books/${id}/edit`} variant="outlined">
            Edit
          </ButtonAnchor>
        </ButtonWrapper>
      </div>

      <Dialog ref={deleteDialog.ref} close={deleteDialog.close}>
        <div className={styles[`${BLOCK_NAME}-modal-body`]}>
          <p className={styles[`${BLOCK_NAME}-modal-text`]}>
            本当に削除しますか？
          </p>
          <ButtonWrapper position="center">
            <Button
              onClick={deleteDialog.close}
              theme="danger"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button onClick={_delete} theme="danger">
              Delete
            </Button>
          </ButtonWrapper>
        </div>
      </Dialog>
    </>
  );
};
