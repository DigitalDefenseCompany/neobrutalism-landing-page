import { MetadataRoute } from 'next'

const root = 'https://digitaldefensecompany.github.io'

const DOCS_PAGES = [
  '/docs',
  '/docs/introduction',
  '/docs/getting-started',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: root,
      lastModified: new Date(),
      priority: 1,
    },
    ...DOCS_PAGES.map((page) => ({
      url: root + page,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ]
}
