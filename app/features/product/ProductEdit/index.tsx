"use client";

import { editPrismaProduct } from "@/features/product/ProductEdit/hooks/editPrismaProduct";
import { ProductForm } from "@/features/product/components/ProductForm";
import { createStripePrices } from "@/features/product/hooks/createStripePrices";
import { editStripePrices } from "@/features/product/hooks/editStripePrices";
import { imagesFactory } from "@/features/product/hooks/imagesFactory";
import { UpsertProduct } from "@/functions/models/Products";
import { Product } from "@/functions/types/Prisma";
import { useRouter } from "next/navigation";

export const ProductEdit = ({ product }: { product: Product }) => {
  const {
    name,
    price,
    description,
    images,
    status,
    paymentMethod: payment_method,
    categories,
  } = product;

  const productEntity = {
    name,
    price: String(price),
    description,
    files: images,
    status,
    paymentMethod: payment_method!,
    categories: categories.map((category) => category.id),
  };

  const router = useRouter();

  const edit = async (data: UpsertProduct) => {
    const { files, name, price, ...rest } = data;

    try {
      const response = await editStripePrices({ product });
      if (!response) throw new Error();

      const images = await imagesFactory({ files });
      const stripeIds = await createStripePrices({ name, price });

      const params = {
        ...rest,
        name,
        price: +price,
        images,
        ...stripeIds,
      };

      const json = await editPrismaProduct({ product, params });
      if (!json) throw new Error();

      router.push(`/products/${product.id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductForm
      submit={edit}
      product={productEntity}
      href={`/products/${product.id}`}
      domain="edit"
    />
  );
};
