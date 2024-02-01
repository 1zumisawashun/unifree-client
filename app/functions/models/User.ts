import { z } from "zod";

export const zUser = z.object({
  id: z.number().int(),
  stripe_customer_id: z.string().optional(),
  name: z.string().optional(),
  university: z.string().optional(),
  faculty: z.string().optional(),
  department: z.string().optional(),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
});

export const zUpsertUser = zUser.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type User = z.infer<typeof zUser>;
