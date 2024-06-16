import Resources from '@/markdown/docs/resources/page.mdx'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'List of resources for AI-powered software verification.',
}

export default function Page() {
  return <Resources />
}
