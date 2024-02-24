"use client";

import {
  Button,
  ButtonAnchor,
  ButtonWrapper,
  UnstyledButton,
  UnstyledButtonAnchor,
} from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Label } from "@/components/elements/Label";
import { Panel } from "@/components/elements/Panel";
import { PreviewDialog } from "@/components/elements/PreviewDialog";
import { DeleteDialog } from "@/features/product/ProductDetail/components/DeleteDialog";
import { formatCurrencyString } from "@/functions/helpers/formatNumber";
import { Product } from "@/functions/types/Prisma";
import { useSession } from "next-auth/react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "product-detail";

/* eslint-disable @next/next/no-img-element */
export const ProductDetail = ({ product }: { product: Product }) => {
  const { id, name, categories, description, images, price, user, createdAt } =
    product;

  const deleteDialog = useDialog();
  const previewDialog = useDialog();
  const session = useSession();

  const shouldShow = user.id === session.data?.user.id;

  return (
    <>
      <Panel.Flame hasBorder>
        <Panel.Inner>
          <UnstyledButton onClick={previewDialog.open}>
            <img
              className={styles[`${BLOCK_NAME}-image`]}
              src={images[0]?.src}
              alt=""
            />
          </UnstyledButton>
          <h3 className={styles[`${BLOCK_NAME}-title`]}>{name}</h3>

          {categories ? (
            <ButtonWrapper className={styles[`${BLOCK_NAME}-category-wrapper`]}>
              {categories.map((category) => (
                <UnstyledButtonAnchor
                  key={category.id}
                  href={`/products?category=${category.name}`}
                >
                  <Label>{category.name}</Label>
                </UnstyledButtonAnchor>
              ))}
            </ButtonWrapper>
          ) : null}

          <p className={styles[`${BLOCK_NAME}-price`]}>
            {formatCurrencyString(price)}
          </p>

          <p className={styles[`${BLOCK_NAME}-text`]}>
            出品日: {createdAt.toLocaleDateString()}
          </p>

          <p className={styles[`${BLOCK_NAME}-text`]}>{description}</p>

          {shouldShow && (
            <ButtonWrapper position="end">
              <Button
                onClick={deleteDialog.open}
                variant="outlined"
                theme="danger"
              >
                削除する
              </Button>
              <ButtonAnchor href={`/products/${id}/edit`} variant="outlined">
                変更する
              </ButtonAnchor>
            </ButtonWrapper>
          )}
        </Panel.Inner>
      </Panel.Flame>

      <DeleteDialog dialog={deleteDialog} product={product} />
      <PreviewDialog dialog={previewDialog} images={images} />
    </>
  );
};
