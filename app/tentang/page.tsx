import { Code, Users, Trophy, Clock } from 'lucide-react'

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tentang Kami</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Mitra terpercaya untuk transformasi digital bisnis Anda</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Siapa Kami?</h2>
            <p className="text-gray-600 mb-4">JasaWebPro adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif. Kami telah membantu ratusan bisnis dari berbagai skala untuk tumbuh dan berkembang di era digital.</p>
            <p className="text-gray-600">Dengan tim yang berpengalaman dan berdedikasi, kami berkomitmen untuk memberikan layanan terbaik dengan kualitas tertinggi.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Visi & Misi</h3>
            <p className="text-gray-300 mb-3"><strong className="text-white">Visi:</strong> Menjadi mitra digital terdepan di Asia Tenggara.</p>
            <p className="text-gray-300"><strong className="text-white">Misi:</strong> Memberikan solusi teknologi yang terjangkau, inovatif, dan berdampak nyata bagi bisnis.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">100+</div>
            <p className="text-gray-600">Klien Puas</p>
          </div>
          <div className="text-center">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <p className="text-gray-600">Proyek Selesai</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">5+</div>
            <p className="text-gray-600">Tahun Pengalaman</p>
          </div>
          <div className="text-center">
            <Code className="w-12 h-12 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">10+</div>
            <p className="text-gray-600">Tim Ahli</p>
          </div>
        </div>
      </div>
    </main>
  )
}