import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Digital Defense Co.',
    template: '%s - Digital Defense Co.',
  },
  description: 'AI-Powered Software Verification Platform',
  keywords: [
    'software verification',
    'AI verification',
    'blockchain security',
    'formal verification',
    'VeriGood.ai',
  ],
  authors: [{ name: 'Digital Defense Co.', url: 'https://github.com/DigitalDefenseCompany' }],
  openGraph: {
    type: 'website',
    description: 'AI-Powered Software Verification Platform',
    images: ['https://digitaldefensecompany.github.io/preview.png'],
    url: 'https://digitaldefensecompany.github.io/',
    title: 'Digital Defense Co.',
  },
  metadataBase: new URL('https://digitaldefensecompany.github.io/'),
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Defense Co. - AI-Powered Software Verification',
    description: 'AI-Powered Software Verification Platform',
    images: ['https://digitaldefensecompany.github.io/preview.png'],
    creator: '@digitaldefenseco',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Navbar />
      <div id="drawer"></div>
      <div id="modal"></div>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
