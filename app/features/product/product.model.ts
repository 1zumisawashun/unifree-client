import { z } from "zod";

export const zImage = z.object({
  id: z.number().int(),
  name: z.string(),
  src: z.string(),
  productId: z.number(),
});

const zUpsertProductFile = z.union([z.custom<File>(), zImage]);

const zUpsertProductFiles = z.array(zUpsertProductFile);

// react-hook-form
export const zUpsertProduct = z.object({
  name: z.string(),
  price: z.string(),
  description: z.string(),
  files: zUpsertProductFiles,
  status: z.string(),
  paymentMethod: z.string(),
  categories: z.array(z.number()),
});

export const productEntity = {
  name: "",
  price: "",
  description: "",
  files: [],
  status: "available",
  paymentMethod: "",
  categories: [],
};

export type UpsertProduct = z.infer<typeof zUpsertProduct>;
