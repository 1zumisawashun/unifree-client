"use client";

import { ProductCard } from "@/components/elements/ProductCard";
import { Swiper } from "@/components/elements/Swiper";
import { Product } from "@/functions/constants/products";
import { SwiperSlide } from "swiper/react";

export const IndexList = ({ products }: { products: Product[] }) => {
  return (
    <Swiper max={products?.length - 2}>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard.Item product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
