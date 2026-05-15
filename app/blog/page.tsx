import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock, Eye } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: '5 Tren Web Development yang Akan Mendominasi 2026',
    excerpt: 'Dari AI-powered development hingga WebAssembly, simak tren terbaru yang akan mengubah cara kita membangun website di tahun 2026.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    date: '15 Januari 2026',
    author: 'Andi Wijaya',
    authorAvatar: 'AW',
    category: 'Teknologi',
    readTime: '5 menit',
    views: 1240,
    image: '/blog/web-dev-trends.jpg'
  },
  {
    id: 2,
    title: 'Panduan Lengkap Memilih Jasa Pembuatan Website Profesional',
    excerpt: 'Tips dan trik memilih vendor website yang tepat agar bisnis Anda tidak merugi dan mendapatkan hasil maksimal.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '10 Januari 2026',
    author: 'Siti Rahma',
    authorAvatar: 'SR',
    category: 'Tips Bisnis',
    readTime: '7 menit',
    views: 892,
    image: '/blog/choose-website-service.jpg'
  },
  {
    id: 3,
    title: 'Mengapa Bisnis UMKM Perlu Aplikasi Mobile di Era Digital?',
    excerpt: 'Analisis mendalam tentang manfaat aplikasi mobile untuk meningkatkan engagement dan loyalitas pelanggan.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '5 Januari 2026',
    author: 'Budi Santoso',
    authorAvatar: 'BS',
    category: 'Bisnis',
    readTime: '6 menit',
    views: 2103,
    image: '/blog/mobile-app-umkm.jpg'
  },
  {
    id: 4,
    title: 'Optimasi SEO untuk Website Bisnis: Panduan Praktis 2026',
    excerpt: 'Strategi SEO terbaru yang terbukti efektif meningkatkan peringkat website di halaman pertama Google.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '28 Desember 2025',
    author: 'Dewi Lestari',
    authorAvatar: 'DL',
    category: 'SEO',
    readTime: '8 menit',
    views: 1567,
    image: '/blog/seo-guide.jpg'
  },
  {
    id: 5,
    title: 'Perbedaan Website Statis vs Dinamis: Mana yang Tepat untuk Bisnis Anda?',
    excerpt: 'Analisis kelebihan dan kekurangan website statis dan dinamis berdasarkan kebutuhan bisnis.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '20 Desember 2025',
    author: 'Andi Wijaya',
    authorAvatar: 'AW',
    category: 'Teknologi',
    readTime: '4 menit',
    views: 734,
    image: '/blog/static-vs-dynamic.jpg'
  },
  {
    id: 6,
    title: 'Cara Meningkatkan Konversi Website dengan UX Design',
    excerpt: 'Tips desain UX yang dapat meningkatkan konversi penjualan hingga 200% untuk bisnis online Anda.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '15 Desember 2025',
    author: 'Rina Kartika',
    authorAvatar: 'RK',
    category: 'Desain',
    readTime: '6 menit',
    views: 945,
    image: '/blog/ux-conversion.jpg'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog JasaWebPro</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Artikel terbaru seputar teknologi, bisnis, dan digital marketing untuk membantu bisnis Anda berkembang</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">{post.category}</span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.views}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-primary font-semibold flex items-center group/link">
                    Baca <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="px-6 pb-6 flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 mr-2">
                  {post.authorAvatar}
                </div>
                <span className="text-sm text-gray-600">{post.author}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </main>
  )
}