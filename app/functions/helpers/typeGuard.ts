import { Image } from "@/functions/models/Image";

const isString = (file: unknown): file is string => {
  return typeof file === "string";
};

const isFile = (file: unknown): file is File => {
  return file instanceof File;
};

// FIXME:オブジェクトの型ガードをちゃんとやりたい
const isImage = (file: unknown): file is Image => {
  return file instanceof Image;
};

const isUser = (user: any) => !!user?.id;

export { isFile, isImage, isString,isUser };
