import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const linksCollection = defineCollection({
  loader: file('src/content/links.yaml'),
  schema: z.object({
    id: z.string().optional(),
    order: z.number().default(0),
    title: z.string(),
    url: z.string().url(),
    themeColor: z.string().default('#000000'),
    icon: z.string().optional(),
  }),
});

export const collections = {
  'links': linksCollection,
};
