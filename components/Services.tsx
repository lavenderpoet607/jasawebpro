'use client'

import { Globe, Smartphone, Megaphone, ShoppingCart, Brush, Code, ArrowRight } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Website modern dengan performa tinggi, responsive, dan SEO friendly untuk bisnis Anda.',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    features: ['React/Next.js', 'Laravel', 'WordPress']
  },
  {
    id: 2,
    title: 'Mobile App',
    description: 'Aplikasi mobile Android & iOS dengan UI/UX menarik dan performa optimal.',
    icon: Smartphone,
    color: 'from-indigo-500 to-purple-500',
    features: ['React Native', 'Flutter', 'Native']
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Tingkatkan visibilitas brand Anda dengan strategi digital marketing terbukti.',
    icon: Megaphone,
    color: 'from-orange-500 to-red-500',
    features: ['SEO', 'SEM', 'Social Media']
  },
  {
    id: 4,
    title: 'E-Commerce',
    description: 'Solusi toko online lengkap dengan payment gateway dan manajemen inventory.',
    icon: ShoppingCart,
    color: 'from-green-500 to-emerald-500',
    features: ['Shopify', 'WooCommerce', 'Custom']
  },
  {
    id: 5,
    title: 'UI/UX Design',
    description: 'Desain modern dan user-friendly untuk meningkatkan pengalaman pengguna.',
    icon: Brush,
    color: 'from-pink-500 to-rose-500',
    features: ['Figma', 'Adobe XD', 'Prototype']
  },
  {
    id: 6,
    title: 'Custom Software',
    description: 'Software custom sesuai kebutuhan spesifik bisnis Anda.',
    icon: Code,
    color: 'from-slate-500 to-gray-500',
    features: ['ERP', 'CRM', 'Dashboard']
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm px-5 py-2 rounded-full mb-4 animate-fade-in-up">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">Layanan Premium</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solusi Digital 
            <span className="text-gradient"> Terlengkap</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Kami menyediakan berbagai layanan digital profesional untuk membantu bisnis Anda berkembang pesat di era digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={service.id} delay={index * 0.1}>
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full`}></div>
                
                <div className="p-8">
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-lg">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-end pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button className="text-slate-400 group-hover:text-blue-600 transition-colors">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}