import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experienceCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    location: z.string(),
    title: z.string(),
    start: z.number(),
    end: z.number().nullable().optional(),
  }),
});

export const collections = {
  experience: experienceCollection,
};
