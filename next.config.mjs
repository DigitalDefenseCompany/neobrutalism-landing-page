import createMDX from '@next/mdx'
import rehypeExpressiveCode from 'rehype-expressive-code'
import codeImport from 'remark-code-import'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[codeImport]],
    rehypePlugins: [[rehypeExpressiveCode, {}]],
  },
})

export default withMDX(nextConfig)
