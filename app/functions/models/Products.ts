import { status } from "@/functions/types/Common";
import { z } from "zod";
import { zCategories } from "./Categories";
import { zImage, zImages } from "./Image";

// fetch from planet-scale
export const zProduct = z.object({
  id: z.number().int(),
  stripe_price_id: z.string(),
  stripe_product_id: z.string(),
  name: z.string(),
  price: z.number(),
  active: z.boolean(),
  description: z.string(),
  payment_method: z.string(),
  status: z.enum(status),
  images: zImages,
  categories: zCategories,
  created_user: z.string(), // uid
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
});

export const zProducts = z.array(zProduct);

export type Product = z.infer<typeof zProduct>;

export type Products = z.infer<typeof zProducts>;

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
  isDisplay: z.boolean(),
  categories: z.array(z.string()),
});

export const productEntity = {
  name: "",
  price: "",
  description: "",
  files: [],
  status: "available",
  paymentMethod: "",
  isDisplay: true,
  categories: [],
};

export type UpsertProduct = z.infer<typeof zUpsertProduct>;
