"use client";
import NextImage, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

type Image = {
  src: string | StaticImageData;
  alt: string;
  blurredDataUrl?: string;
  width?: number;
  height?: number;
};

// NOTE:Image型を内包していればok
type HasImageProperties<T> = T extends Image ? T : never;

export const Avatar =  <T,>(image: HasImageProperties<T>) => {
  // NOTE:下記だとLSが発生しない
  return (
    <NextImage
      src={image.src}
      alt={image.alt}
      width={30}
      height={30}
      className={styles["avatar"]}
      placeholder="blur"
      // blurDataURL={image.blurredDataUrl}
    ></NextImage>
  );
};
