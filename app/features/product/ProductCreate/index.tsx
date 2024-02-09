"use client";

import { ProductForm } from "@/features/product/components/ProductForm";
import { createStripeIds } from "@/features/product/hooks/createStripeIds";
import { imagesFactory } from "@/features/product/hooks/imagesFactory";
import { API } from "@/functions/constants/api";
import { UpsertProduct, productEntity } from "@/functions/models/Products";

const url = API.createPrismaProduct;

export const ProductCreate: React.FC = () => {
  const create = async (data: UpsertProduct) => {
    const { files, name, price, ...rest } = data;

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
  };

  return (
    <ProductForm
      submit={create}
      product={productEntity}
      href={"/products"}
      domain="create"
    />
  );
};
