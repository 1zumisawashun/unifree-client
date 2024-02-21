import { Image } from "@/functions/types/Prisma";

const isString = (file: unknown): file is string => {
  return typeof file === "string";
};

const isFile = (file: unknown): file is File => {
  return file instanceof File;
};

// FIXME:オブジェクトの型ガードをちゃんとやりたい
const isImage = (file: any): file is Image => {
  return file?.productId;
};

export { isFile, isImage, isString };
