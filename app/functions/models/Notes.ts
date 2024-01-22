import { z } from "zod";
import { zCategories, zUpsertCategories } from "./Categories";

export const zNote = z.object({
  id: z.number().int(),
  title: z.string(),
  categories: zCategories.optional(),
  body: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const zNotes = z.array(zNote);

export const zUpsertNote = z.object({
  title: z.string(),
  categories: zUpsertCategories.optional(),
  body: z.string(),
});

export type Note = z.infer<typeof zNote>;

export type Notes = z.infer<typeof zNotes>;
