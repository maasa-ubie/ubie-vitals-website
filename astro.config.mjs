import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx({
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'append',
        properties: {
          className: ['linkHeading']
        },
        content: {
          type: 'element',
          tagName: 'span',
          properties: {
            className: ['linkHeadingIcon']
          },
          children: [{
            type: 'text',
            value: '#'
          }]
        }
      }],
    ]
  }), icon()],
  site: 'https://ubie-vitals.github.io',
});
