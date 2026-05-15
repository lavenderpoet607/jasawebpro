import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft, Clock, Eye, Share2, Bookmark, Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: '5 Tren Web Development yang Akan Mendominasi 2026',
    excerpt: 'Dari AI-powered development hingga WebAssembly, simak tren terbaru yang akan mengubah cara kita membangun website di tahun 2026.',
    content: `
      <p>Industri web development terus berkembang dengan cepat. Tahun 2026 diprediksi akan membawa perubahan signifikan dalam cara kita membangun dan mengelola website. Berikut adalah 5 tren utama yang akan mendominasi:</p>
      
      <h2>1. AI-Powered Development</h2>
      <p>Kecerdasan buatan kini tidak hanya membantu dalam konten, tetapi juga dalam proses development. Tools seperti GitHub Copilot dan ChatGPT telah mengubah cara developer menulis kode. Di 2026, AI akan semakin terintegrasi dalam IDE dan workflow development.</p>
      
      <h2>2. WebAssembly (WASM)</h2>
      <p>WebAssembly memungkinkan kode berkinerja tinggi seperti C++, Rust, dan Go berjalan di browser. Ini membuka peluang untuk aplikasi web yang sangat kompleks seperti video editing, game, dan simulasi ilmiah.</p>
      
      <h2>3. Edge Computing</h2>
      <p>Dengan Edge Computing, kode dijalankan lebih dekat ke pengguna, mengurangi latency dan meningkatkan performa. Platform seperti CloudFlare Workers dan Vercel Edge Functions semakin populer.</p>
      
      <h2>4. Micro Frontends</h2>
      <p>Arsitektur micro frontends memungkinkan tim yang berbeda bekerja pada bagian aplikasi yang berbeda secara independen. Ini meningkatkan skalabilitas dan kecepatan pengembangan.</p>
      
      <h2>5. Buildless Development</h2>
      <p>Tools seperti Vite dan Snowpack memungkinkan development tanpa proses build yang lama. Ini mempercepat feedback loop dan meningkatkan produktivitas developer.</p>
      
      <p>Dengan memahami tren ini, bisnis Anda dapat tetap kompetitif di era digital. JasaWebPro siap membantu Anda mengimplementasikan teknologi terbaru untuk website bisnis Anda.</p>
    `,
    date: '15 Januari 2026',
    author: 'Andi Wijaya',
    authorAvatar: 'AW',
    authorBio: 'Andi adalah Lead Developer di JasaWebPro dengan pengalaman 8 tahun di industri web development.',
    category: 'Teknologi',
    readTime: '5 menit',
    views: 1240,
    likes: 89,
    comments: 12
  },
  {
    id: 2,
    title: 'Panduan Lengkap Memilih Jasa Pembuatan Website Profesional',
    excerpt: 'Tips dan trik memilih vendor website yang tepat agar bisnis Anda tidak merugi dan mendapatkan hasil maksimal.',
    content: `
      <p>Memilih jasa pembuatan website yang tepat adalah keputusan krusial untuk kesuksesan digital bisnis Anda. Berikut panduan lengkap untuk membantu Anda memilih vendor yang tepat:</p>
      
      <h2>1. Periksa Portofolio dan Pengalaman</h2>
      <p>Lihat proyek sebelumnya yang pernah dikerjakan. Apakah mereka memiliki pengalaman di industri yang sama dengan bisnis Anda? Perhatikan kualitas desain, fungsionalitas, dan performa website yang mereka buat.</p>
      
      <h2>2. Baca Testimoni dan Review Klien</h2>
      <p>Testimoni asli dari klien sebelumnya memberikan gambaran tentang keandalan dan kualitas layanan. Cari review di Google, social media, atau platform freelance.</p>
      
      <h2>3. Evaluasi Proses dan Metodologi</h2>
      <p>Tanyakan tentang proses pengembangan yang mereka gunakan. Apakah ada tahap discovery, design, development, testing, dan deployment yang jelas? Metodologi Agile biasanya lebih fleksibel.</p>
      
      <h2>4. Pastikan Dukungan Pasca Launch</h2>
      <p>Website membutuhkan maintenance rutin. Pastikan vendor menyediakan layanan dukungan teknis, backup, update keamanan, dan training untuk tim Anda.</p>
      
      <h2>5. Bandingkan Harga dan Value</h2>
      <p>Jangan hanya memilih yang termurah. Bandingkan apa yang ditawarkan dengan harga yang diminta. Investasi yang tepat akan menghasilkan ROI yang lebih baik.</p>
      
      <p>Dengan mengikuti panduan ini, Anda dapat menemukan mitra yang tepat untuk mengembangkan website bisnis Anda. Hubungi JasaWebPro untuk konsultasi gratis!</p>
    `,
    date: '10 Januari 2026',
    author: 'Siti Rahma',
    authorAvatar: 'SR',
    authorBio: 'Siti adalah Customer Success Manager di JasaWebPro yang telah membantu 100+ klien memilih solusi digital tepat.',
    category: 'Tips Bisnis',
    readTime: '7 menit',
    views: 892,
    likes: 45,
    comments: 8
  },
  {
    id: 3,
    title: 'Mengapa Bisnis UMKM Perlu Aplikasi Mobile di Era Digital?',
    excerpt: 'Analisis mendalam tentang manfaat aplikasi mobile untuk meningkatkan engagement dan loyalitas pelanggan.',
    content: `
      <p>Di era digital saat ini, memiliki aplikasi mobile bukan lagi kemewahan, tetapi kebutuhan untuk UMKM yang ingin bertumbuh. Berikut adalah alasan mengapa bisnis Anda perlu aplikasi mobile:</p>
      
      <h2>1. Meningkatkan Engagement Pelanggan</h2>
      <p>Aplikasi mobile memungkinkan komunikasi langsung dengan pelanggan melalui push notification. Ini meningkatkan engagement dan membuat pelanggan selalu ingat dengan bisnis Anda.</p>
      
      <h2>2. Pengalaman Pengguna yang Lebih Baik</h2>
      <p>Aplikasi mobile menawarkan pengalaman yang lebih cepat dan responsif dibandingkan mobile website. Navigasi yang intuitif dan fitur offline membuat pelanggan betah.</p>
      
      <h2>3. Loyalitas Pelanggan</h2>
      <p>Dengan fitur loyalty program, reward, dan personalisasi di aplikasi, Anda dapat meningkatkan retensi pelanggan hingga 60%.</p>
      
      <h2>4. Data dan Analitik yang Lebih Kaya</h2>
      <p>Aplikasi mobile memberikan data yang lebih mendalam tentang perilaku pengguna, preferensi, dan kebiasaan mereka. Ini membantu Anda membuat keputusan bisnis yang lebih baik.</p>
      
      <h2>5. Competitive Advantage</h2>
      <p>Masih banyak UMKM yang belum memiliki aplikasi mobile. Dengan memilikinya, Anda mendapatkan keunggulan kompetitif yang signifikan.</p>
      
      <p>JasaWebPro menyediakan layanan pengembangan aplikasi mobile dengan harga terjangkau untuk UMKM. Mulai transformasi digital bisnis Anda sekarang!</p>
    `,
    date: '5 Januari 2026',
    author: 'Budi Santoso',
    authorAvatar: 'BS',
    authorBio: 'Budi adalah Mobile App Developer dengan pengalaman membuat 50+ aplikasi untuk berbagai industri.',
    category: 'Bisnis',
    readTime: '6 menit',
    views: 2103,
    likes: 167,
    comments: 23
  },
  {
    id: 4,
    title: 'Optimasi SEO untuk Website Bisnis: Panduan Praktis 2026',
    excerpt: 'Strategi SEO terbaru yang terbukti efektif meningkatkan peringkat website di halaman pertama Google.',
    content: `
      <p>SEO terus berkembang seiring dengan update algoritma Google. Berikut adalah strategi SEO praktis yang terbukti efektif di tahun 2026:</p>
      
      <h2>1. Konten Berkualitas dan Relevan</h2>
      <p>Google semakin pintar dalam memahami konten. Fokus pada pembuatan konten yang menjawab pertanyaan pengguna dan memberikan nilai nyata. Gunakan semantic keywords dan structured data.</p>
      
      <h2>2. Pengalaman Pengguna (UX)</h2>
      <p>Core Web Vitals menjadi faktor ranking penting. Pastikan website Anda cepat, responsif, dan mudah dinavigasi. Perhatikan Largest Contentful Paint (LCP), First Input Delay (FID), dan Cumulative Layout Shift (CLS).</p>
      
      <h2>3. Mobile-First Indexing</h2>
      <p>Google sekarang menggunakan versi mobile website untuk indexing dan ranking. Pastikan website Anda mobile-friendly dengan responsive design.</p>
      
      <h2>4. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</h2>
      <p>Tunjukkan kredibilitas Anda. Sertakan author bio, sertifikasi, penghargaan, dan testimoni. Untuk website YMYL (Your Money Your Life), ini sangat penting.</p>
      
      <h2>5. Backlink Berkualitas</h2>
      <p>Backlink dari website otoritatif masih menjadi faktor ranking utama. Fokus pada link building alami melalui guest posting, digital PR, dan content marketing.</p>
      
      <p>Optimasi SEO adalah proses berkelanjutan. JasaWebPro menyediakan layanan SEO professional untuk membantu website bisnis Anda meraih peringkat teratas.</p>
    `,
    date: '28 Desember 2025',
    author: 'Dewi Lestari',
    authorAvatar: 'DL',
    authorBio: 'Dewi adalah SEO Specialist bersertifikasi Google dengan pengalaman 6 tahun di digital marketing.',
    category: 'SEO',
    readTime: '8 menit',
    views: 1567,
    likes: 112,
    comments: 15
  },
  {
    id: 5,
    title: 'Perbedaan Website Statis vs Dinamis: Mana yang Tepat untuk Bisnis Anda?',
    excerpt: 'Analisis kelebihan dan kekurangan website statis dan dinamis berdasarkan kebutuhan bisnis.',
    content: `
      <p>Memilih antara website statis dan dinamis adalah keputusan penting. Berikut analisis mendalam untuk membantu Anda menentukan pilihan:</p>
      
      <h2>Website Statis</h2>
      <p><strong>Kelebihan:</strong> Cepat, aman, murah hosting, mudah di-deploy. Cocok untuk landing page, portofolio, atau company profile sederhana.</p>
      <p><strong>Kekurangan:</strong> Sulit diupdate tanpa skill teknis, tidak ada fitur interaktif kompleks.</p>
      
      <h2>Website Dinamis</h2>
      <p><strong>Kelebihan:</strong> Mudah diupdate via CMS, fitur interaktif (login, comment, e-commerce), scalable untuk konten besar.</p>
      <p><strong>Kekurangan:</strong> Lebih lambat, butuh hosting lebih mahal, risiko keamanan lebih tinggi.</p>
      
      <h2>Kapan Memilih Statis?</h2>
      <p>Jika bisnis Anda hanya butuh informasi dasar dan jarang update konten, website statis adalah pilihan tepat.</p>
      
      <h2>Kapan Memilih Dinamis?</h2>
      <p>Jika Anda butuh update rutin, e-commerce, blog, atau fitur interaktif, website dinamis lebih sesuai.</p>
      
      <p>JasaWebPro menyediakan kedua jenis website dengan teknologi terbaik. Konsultasikan kebutuhan bisnis Anda dengan tim kami!</p>
    `,
    date: '20 Desember 2025',
    author: 'Andi Wijaya',
    authorAvatar: 'AW',
    authorBio: 'Andi adalah Lead Developer di JasaWebPro dengan pengalaman 8 tahun di industri web development.',
    category: 'Teknologi',
    readTime: '4 menit',
    views: 734,
    likes: 34,
    comments: 6
  },
  {
    id: 6,
    title: 'Cara Meningkatkan Konversi Website dengan UX Design',
    excerpt: 'Tips desain UX yang dapat meningkatkan konversi penjualan hingga 200% untuk bisnis online Anda.',
    content: `
      <p>User Experience (UX) yang baik dapat meningkatkan konversi website secara signifikan. Berikut adalah tips praktis yang bisa Anda terapkan:</p>
      
      <h2>1. Sederhanakan Navigasi</h2>
      <p>Pengunjung harus bisa menemukan apa yang mereka cari dalam 3 klik. Gunakan menu yang jelas, breadcrumb, dan search bar yang mudah diakses.</p>
      
      <h2>2. Optimasi Kecepatan Loading</h2>
      <p>Setiap detik keterlambatan dapat menurunkan konversi hingga 7%. Gunakan compression, lazy loading, dan CDN untuk mempercepat website.</p>
      
      <h2>3. Call-to-Action (CTA) yang Jelas</h2>
      <p>CTA harus kontras, mudah ditemukan, dan menggunakan action words seperti "Beli Sekarang", "Daftar Gratis", atau "Hubungi Kami".</p>
      
      <h2>4. Testimoni dan Social Proof</h2>
      <p>Tampilkan testimoni pelanggan, rating, jumlah pengguna, atau studi kasus. Ini meningkatkan kepercayaan dan mengurangi keraguan.</p>
      
      <h2>5. Form yang Sederhana</h2>
      <p>Setiap field tambahan di form mengurangi konversi. Hanya minta informasi yang benar-benar diperlukan.</p>
      
      <h2>6. Mobile Optimization</h2>
      <p>Lebih dari 60% traffic berasal dari mobile. Pastikan website Anda responsif dan mudah digunakan di smartphone.</p>
      
      <p>Tim JasaWebPro siap membantu mendesain website dengan UX yang optimal untuk meningkatkan konversi bisnis Anda!</p>
    `,
    date: '15 Desember 2025',
    author: 'Rina Kartika',
    authorAvatar: 'RK',
    authorBio: 'Rina adalah UI/UX Designer dengan award-winning design portfolio di berbagai industri.',
    category: 'Desain',
    readTime: '6 menit',
    views: 945,
    likes: 78,
    comments: 11
  }
]

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = await params
  const post = posts.find((p) => p.id === parseInt(resolvedParams.id))
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link href="/blog" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Blog
        </Link>

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700">
          <div className="h-64 md:h-96 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <div className="text-8xl md:text-9xl drop-shadow-2xl">📱</div>
          </div>

          <div className="p-6 md:p-8 lg:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-full text-sm font-semibold">{post.category}</span>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <Eye className="w-4 h-4 mr-1" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center justify-between py-5 border-y border-gray-200 dark:border-slate-700 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  {post.authorAvatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{post.author}</div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-5 mt-4 md:mt-0">
                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                  <Heart className="w-5 h-5 mr-1.5" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <MessageCircle className="w-5 h-5 mr-1.5" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div 
              className="prose prose-slate dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-indigo-500 prose-h2:pl-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-li:text-gray-700 dark:prose-li:text-gray-300 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-slate-700">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800/50 dark:to-slate-800 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                    {post.authorAvatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Tentang {post.author}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-slate-700">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-5">Bagikan Artikel Ini</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-md hover:shadow-lg">
                  Facebook
                </button>
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-md hover:shadow-lg">
                  Twitter
                </button>
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-md hover:shadow-lg">
                  LinkedIn
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-md hover:shadow-lg">
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-slate-700">
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6">Komentar ({post.comments})</h3>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Ahmad Fauzi</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mt-1.5 leading-relaxed">Artikel yang sangat informatif! Terima kasih insightnya.</p>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mt-2 ml-2">
                      <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">Balas</button>
                      <span>•</span>
                      <span>2 jam lalu</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Lisa Permata</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mt-1.5 leading-relaxed">Apakah ada rekomendasi tools untuk implementasi tips di artikel ini?</p>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mt-2 ml-2">
                      <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">Balas</button>
                      <span>•</span>
                      <span>5 jam lalu</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <textarea 
                      placeholder="Tulis komentar Anda..."
                      className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-xl p-4 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      rows={3}
                    ></textarea>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold mt-3 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
                      Kirim Komentar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Artikel Terkait</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3).map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 h-full hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-br from-indigo-400/30 via-purple-400/30 to-pink-400/30 rounded-t-xl flex items-center justify-center">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">📄</div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 text-lg">{relatedPost.title}</h4>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-3">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      <span>{relatedPost.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}