import GettingStarted from '@/markdown/docs/getting-started/page.mdx'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'Customize your software verification process.',
}

export default function Page() {
  return <GettingStarted />
}
