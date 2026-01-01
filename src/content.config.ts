import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { blog };
