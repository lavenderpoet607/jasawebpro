'use client'

import { Shield, Target, Zap, TrendingUp, Users, Award } from 'lucide-react'
import AnimatedCard from './AnimatedCard'

const trustSignals = [
  {
    id: 1,
    title: 'Terjamin & Aman',
    description: 'Garansi kepuasan 100% dan keamanan data terenkripsi untuk semua proyek.',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    stats: '100% Garansi'
  },
  {
    id: 2,
    title: 'Hasil Terukur',
    description: 'Setiap proyek dilengkapi dengan laporan kinerja dan analitik lengkap.',
    icon: Target,
    color: 'from-indigo-500 to-purple-500',
    stats: '+200% Traffic'
  },
  {
    id: 3,
    title: 'Cepat & Efisien',
    description: 'Pengerjaan tepat waktu dengan metodologi agile yang terbukti efektif.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    stats: '2x Lebih Cepat'
  },
  {
    id: 4,
    title: 'Meningkatkan Bisnis',
    description: 'Solusi digital yang dirancang khusus untuk growth bisnis Anda.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    stats: '+150% Konversi'
  },
  {
    id: 5,
    title: 'Tim Profesional',
    description: 'Didukung oleh developer dan desainer berpengalaman di bidangnya.',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    stats: '10+ Expert'
  },
  {
    id: 6,
    title: 'Award Winning',
    description: 'Diakui sebagai mitra terbaik untuk solusi digital inovatif.',
    icon: Award,
    color: 'from-purple-500 to-violet-500',
    stats: '5 Awards'
  },
]

export default function TrustSignals() {
  return (
    <section id="keunggulan" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm px-5 py-2 rounded-full mb-4 animate-fade-in-up">
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Mengapa Memilih Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Keunggulan 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Layanan Kami</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Lebih dari sekedar jasa pembuatan website, kami menjadi mitra pertumbuhan digital bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustSignals.map((item, index) => (
            <AnimatedCard key={item.id} delay={index * 0.1}>
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full`}></div>
                
                <div className="p-8">
                  <div className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-2">
                    <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-bold text-2xl`}>
                      {item.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium">
                      <span>Terbukti</span>
                      <div className="flex gap-0.5 ml-2">
                        {[1,2,3,4,5].map((star) => (
                          <svg key={star} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <div className="text-center px-6">
              <p className="text-3xl font-bold text-blue-600">100+</p>
              <p className="text-sm text-slate-500">Project Berhasil</p>
            </div>
            <div className="text-center px-6 border-l border-slate-200 dark:border-slate-700">
              <p className="text-3xl font-bold text-indigo-600">98%</p>
              <p className="text-sm text-slate-500">Klien Puas</p>
            </div>
            <div className="text-center px-6 border-l border-slate-200 dark:border-slate-700">
              <p className="text-3xl font-bold text-purple-600">24/7</p>
              <p className="text-sm text-slate-500">Dukungan Penuh</p>
            </div>
            <div className="text-center px-6 border-l border-slate-200 dark:border-slate-700">
              <p className="text-3xl font-bold text-cyan-600">3 Tahun</p>
              <p className="text-sm text-slate-500">Berpengalaman</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  )
}