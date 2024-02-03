import { z } from "zod";

export const zImage = z.object({
  id: z.number().int(),
  name: z.string(),
  src: z.string(),
});

export const zUpsertImage = zImage.omit({ id: true });

export const zImages = z.array(zImage);

export type Image = z.infer<typeof zImage>
