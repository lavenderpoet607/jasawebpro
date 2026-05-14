'use client'

import { ArrowRight, Award, Users, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'
import ImageSequence from './ImageSequence'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { useEffect, useState, type MutableRefObject } from 'react'

export default function Hero() {
  const { elementRef, isVisible } = useScrollAnimation()
  const [showSparkles, setShowSparkles] = useState(false)
  
  const typingText = useTypingEffect(
    ['Professional', 'Modern', 'Inovatif', 'Terpercaya'],
    100,
    50,
    1500
  )

  useEffect(() => {
    const timer = setTimeout(() => setShowSparkles(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-dark dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-10 animate-pulse-slow animation-delay-500"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={elementRef as MutableRefObject<HTMLDivElement | null>}
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-30px]'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-semibold text-sm">Solusi Digital Terbaik</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Solusi Web
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                {' '}{typingText}
              </span>
              {' '}Untuk Bisnis Anda
              <span className="wave-hand inline-block">👋</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-up animation-delay-200">
              Kami menyediakan layanan pembuatan website, aplikasi mobile, dan digital marketing 
              yang berkualitas dengan harga terjangkau.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="#contact"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg group"
              >
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#testimonials"
                className="btn-outline"
                >
                Lihat Testimoni
                </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-4 animate-fade-in-up animation-delay-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-sm font-bold border-2 border-white dark:border-gray-800"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">100+ Klien Puas</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:glow animate-fade-in-up animation-delay-100"
              >
                <div className="bg-gradient-to-r from-primary to-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4 animate-float">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  100+
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Project Selesai</p>
                <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-shimmer" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-300"
              >
                <div className="bg-gradient-to-r from-primary to-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4 animate-pulse-slow">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  24/7
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Support</p>
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6 mt-8">
              <div 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200 transform translate-y-8"
              >
                <div className="bg-gradient-to-r from-secondary to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 animate-bounce-slow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-purple-600 bg-clip-text text-transparent">
                  50+
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Klien Puas</p>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-400">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <ImageSequence
                    frameStart={1}
                    frameEnd={240}
                    pathPrefix="/sequence/ezgif-frame-"
                    extension="jpg"
                    speed={24}
                    loop={true}
                    autoplay={true}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}