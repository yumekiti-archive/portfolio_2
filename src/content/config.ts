import { defineCollection, z } from "astro:content";

const WorkCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    from: z.date(),
    to: z.date(),
    thumbnail: z.string(),
    images: z.array(z.string()),
  }),
});

export const collections = <const>{
  work: WorkCollection,
};