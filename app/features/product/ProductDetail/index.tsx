"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Panel } from "@/components/elements/Panel";
import { DeleteDialog } from "@/features/product/ProductDetail/components/DeleteDialog";
import { ProductCategory } from "@/features/product/ProductDetail/components/ProductCategory";
import { ProductImage } from "@/features/product/ProductDetail/components/ProductImage";
import { formatCurrencyString } from "@/functions/helpers/formatNumber";
import { Product } from "@/functions/types/Prisma";
import { useSession } from "next-auth/react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "product-detail";

export const ProductDetail = ({ product }: { product: Product }) => {
  const { id, name, categories, description, images, price, user, createdAt } =
    product;

  const deleteDialog = useDialog();
  const session = useSession();

  const shouldShow = user.id === session.data?.user.id;

  return (
    <>
      <Panel.Flame hasBorder>
        <Panel.Inner>
          <ProductImage images={images} />
          <h3 className={styles[`${BLOCK_NAME}-title`]}>{name}</h3>

          {categories ? <ProductCategory categories={categories} /> : null}

          <p className={styles[`${BLOCK_NAME}-price`]}>
            {formatCurrencyString(price)}
          </p>

          <p className={styles[`${BLOCK_NAME}-text`]}>
            {createdAt.toLocaleDateString()} に出品しました
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
    </>
  );
};
