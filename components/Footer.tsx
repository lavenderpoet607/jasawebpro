import { Code } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">JasaWebPro</span>
            </div>
            <p className="text-gray-400">
              Solusi digital terpercaya untuk membantu bisnis Anda berkembang di era digital.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/layanan" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/layanan" className="hover:text-primary transition-colors">Mobile App</Link></li>
              <li><Link href="/layanan" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/layanan" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/tentang" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/kebijakan-privasi" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 JasaWebPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}