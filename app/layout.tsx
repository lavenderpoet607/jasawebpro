import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
//declare module '*.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ParticleBackground from '@/components/ParticleBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JasaWebPro - Solusi Digital Professional',
  description: 'Layanan pembuatan website, aplikasi mobile, dan digital marketing berkualitas',
  keywords: 'jasa web, web development, mobile app, digital marketing',
  authors: [{ name: 'JasaWebPro' }],
  viewport: 'width=device-width, initial-scale=1',
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