import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ParticleBackground from '@/components/ParticleBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JasaWebPro - Solusi Digital Professional',
  description: 'Layanan pembuatan website, aplikasi mobile, dan digital marketing berkualitas',
  keywords: 'jasa web, web development, mobile app, digital marketing',
  authors: [{ name: 'JasaWebPro' }],
  // viewport dihapus dari sini
}

// Tambahkan viewport export terpisah
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ParticleBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}