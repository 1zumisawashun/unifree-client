"use client";

import { BookCard } from "@/components/elements/BookCard";
import { Swiper } from "@/components/elements/Swiper";
import { Book } from "@/functions/constants/books";
import { SwiperSlide } from "swiper/react";

export const IndexList = ({ books }: { books: Book[] }) => {
  return (
    <Swiper max={books?.length - 2}>
      {books.map((book) => (
        <SwiperSlide key={book.id}>
          <BookCard.Item book={book} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
