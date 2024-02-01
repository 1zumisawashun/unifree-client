"use client";

import { ProductForm } from "@/features/product/components/ProductForm";
import { API } from "@/functions/constants/api";
import { getDownloadUrl } from "@/functions/helpers/firebaseStorage";
import { isString } from "@/functions/helpers/typeGuard";
import { Product, UpsertProduct } from "@/functions/models/Products";

const createUrl = API.createStripePrices;
const deleteUrl = API.deleteStripePrices;

export const ProductEdit = ({ product }: { product: Product }) => {
  const {
    name,
    price,
    description,
    images,
    status,
    payment_method,
    active,
    categories,
    stripe_price_id,
  } = product;

  const productEntity = {
    name,
    price: String(price),
    description,
    files: images.map((image) => image.src),
    status,
    paymentMethod: payment_method,
    isDisplay: active,
    categories: categories.map((category) => category.name),
  };

  const edit = async (data: UpsertProduct) => {
    const { files, name, price } = data;

    const promises = files.map(async (file) => {
      if (isString(file)) return file;
      const downloadUrl = await getDownloadUrl({ file });
      return { name: file.name, src: downloadUrl };
    });

    const images = await Promise.all(promises);
    console.log(images);

    // 削除でなくactiveをfalseにして削除した風に見せかける
    const deleteResponse = await fetch(deleteUrl, {
      method: "POST",
      body: JSON.stringify([stripe_price_id]),
    });
    const deleteJson = await deleteResponse.json();
    console.log(deleteJson);

    // priceIdを取得する目的なので最適限のプロパティでok
    const createResponse = await fetch(createUrl, {
      method: "POST",
      body: JSON.stringify({ name, price: +price }),
    });
    const createJson = await createResponse.json();
    console.log(createJson);

    // db logic here
  };

  return <ProductForm submit={edit} product={productEntity} />;
};
