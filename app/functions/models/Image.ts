import { z } from "zod";

const zImage = z.object({
  id: z.number().int(),
  name: z.string(),
  src: z.string(),
});

export const zUpsertImage = zImage.omit({ id: true });

export const zImages = z.array(zImage);
