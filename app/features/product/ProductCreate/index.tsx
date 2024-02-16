"use client";

import { createPrismaProduct } from "@/features/product/ProductCreate/hooks/createPrismaProduct";
import { ProductForm } from "@/features/product/components/ProductForm";
import { createStripePrices } from "@/features/product/hooks/createStripePrices";
import { imagesFactory } from "@/features/product/hooks/imagesFactory";
import { UpsertProduct, productEntity } from "@/features/product/product.model";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ProductCreate: React.FC = () => {
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);

  const create = async (data: UpsertProduct) => {
    setIsPending(true);

    const { files, name, price, ...rest } = data;

    try {
      const images = await imagesFactory({ files });
      const stripeIds = await createStripePrices({ name, price });

      const params = {
        ...rest,
        name,
        price: +price,
        images,
        ...stripeIds,
      };

      const json = await createPrismaProduct({ params });
      if (!json) throw new Error();

      router.push(`/products`);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <ProductForm
      submit={create}
      product={productEntity}
      href={"/products"}
      domain="create"
      isPending={isPending}
    />
  );
};
