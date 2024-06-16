import DocsLayout from '@/layouts/Docs'

export default function MainDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DocsLayout>{children}</DocsLayout>
    </>
  )
}
