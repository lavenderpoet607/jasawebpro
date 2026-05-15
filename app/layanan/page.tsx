import Link from 'next/link'
import { Code, Smartphone, Megaphone, Palette } from 'lucide-react'

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Layanan Kami</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Solusi digital lengkap untuk kebutuhan bisnis Anda</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <Code className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
            <p className="text-gray-600">Pembuatan website profesional dengan teknologi modern dan responsif.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <Smartphone className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile App</h3>
            <p className="text-gray-600">Aplikasi mobile native untuk iOS dan Android dengan performa tinggi.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <Megaphone className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Marketing</h3>
            <p className="text-gray-600">Strategi pemasaran digital untuk meningkatkan visibilitas bisnis Anda.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <Palette className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Desain antarmuka yang menarik dan pengalaman pengguna yang optimal.</p>
          </div>
        </div>
      </div>
    </main>
  )
}