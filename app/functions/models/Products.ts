import { status } from "@/functions/types/Common";
import { z } from "zod";
import { zCategories, zUpsertCategories } from "./Categories";
import { zImages, zUpsertImage } from "./Image";

// snake_case
export const zProduct = z.object({
  id: z.number().int(),
  stripe_price_id: z.string(),
  stripe_product_id: z.string(),
  name: z.string(),
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

// upper_camel_case
export const zUpsertProduct = z.object({
  stripePriceId: z.string(),
  stripeProductId: z.string(),
  name: z.string(),
  active: z.boolean(),
  description: z.string(),
  paymentMethod: z.string(),
  status: z.enum(status),
  images: zUpsertImage,
  categories: zUpsertCategories,
});

export type Product = z.infer<typeof zProduct>;

export type Products = z.infer<typeof zProducts>;
