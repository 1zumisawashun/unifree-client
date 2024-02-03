"use client";

import { ProductForm } from "@/features/product/components/ProductForm";
import { API } from "@/functions/constants/api";
import { getDownloadUrl } from "@/functions/helpers/firebaseStorage";
import { isFile } from "@/functions/helpers/typeGuard";
import { UpsertProduct, productEntity } from "@/functions/models/Products";

const url = API.createStripePrices;

export const ProductCreate: React.FC = () => {
  const create = async (data: UpsertProduct) => {
    const { files, name, price } = data;

    const promises = files.map(async (file) => {
      if (isFile(file)) {
        const downloadUrl = await getDownloadUrl({ file });
        return { name: file.name, src: downloadUrl };
      }
      return file;
    });

    const images = await Promise.all(promises);
    console.log(images);

    // priceIdを取得する目的なので最適限のプロパティでok
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, price: +price }),
    });
    const json = await response.json();
    console.log(json);

    // db logic here
  };

  return <ProductForm submit={create} product={productEntity} />;
};
