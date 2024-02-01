import { z } from "zod";

export const zCategory = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const zCategories = z.array(zCategory);

export const zUpsertCategory = zCategory.omit({ id: true });

export const zUpsertCategories = z.array(zUpsertCategory);

export type Category = z.infer<typeof zCategory>;

export type Categories = z.infer<typeof zCategories>;
