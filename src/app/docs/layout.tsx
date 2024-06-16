import Sidebar from '@/components/sidebar'
import { MAIN_SIDEBAR } from '@/data/sidebar-links'
import DocsLayout from '@/layouts/Docs'

export default function MainDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar links={MAIN_SIDEBAR} />
      <DocsLayout>{children}</DocsLayout>
    </>
  )
}
