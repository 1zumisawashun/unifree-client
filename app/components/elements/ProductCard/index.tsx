import { UnstyledButtonAnchor } from "@/components/buttons/UnstyledButtonAnchor";
import { formatCurrencyString } from "@/functions/helpers/formatNumber";
import { Product } from "@/functions/types/Prisma";
import styles from "./styles.module.scss";

const BLOCK_NAME = "product-card";

// mypageでも使用するためcomponentsディレクトリに格納している

/* eslint-disable @next/next/no-img-element */
const Item = ({ product }: { product: Product }) => {
  const { id, name, images, price, status } = product;
  return (
    <UnstyledButtonAnchor href={`/products/${id}`}>
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
          <p>〇〇大学</p>
          <span>|</span>
          <p>{formatCurrencyString(price)}</p>
        </div>
      </div>
    </UnstyledButtonAnchor>
  );
};

const List = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles[`${BLOCK_NAME}-list`]}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export const ProductCard = {
  List,
  Item,
};
