// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pixelagency.com.au',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-ibm-plex-sans',
      weights: [200, 300, 400, 500, 600, 700],
      styles: ['normal'],
      display: 'fallback'
    },
    {
      provider: fontProviders.google(),
      name: 'Lateef',
      cssVariable: '--font-lateef',
      weights: [200, 300, 400],
      styles: ['normal'],
      display: 'optional'
    }
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/case-studies/private/')
    })
  ]
})
