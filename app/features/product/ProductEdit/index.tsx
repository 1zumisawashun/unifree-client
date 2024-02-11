"use client";

import { ProductForm } from "@/features/product/components/ProductForm";
import { createStripeIds } from "@/features/product/hooks/createStripeIds";
import { editStripeProduct } from "@/features/product/hooks/editStripeProduct";
import { imagesFactory } from "@/features/product/hooks/imagesFactory";
import { API } from "@/functions/constants/api";
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
    stripePriceId: stripe_price_id,
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

  const url = API.editPrismaProduct(product.id);

  const router = useRouter();

  const edit = async (data: UpsertProduct) => {
    const { files, name, price, ...rest } = data;

    await editStripeProduct({ stripe_price_id });

    const images = await imagesFactory({ files });
    const stripeIds = await createStripeIds({ name, price });

    const params = {
      ...rest,
      name,
      price: +price,
      images,
      ...stripeIds,
    };

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
    });
    const json = await response.json();
    console.log(json, "json");

    router.push(`/products/${product.id}`);
    router.refresh();
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
