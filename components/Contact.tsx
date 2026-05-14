'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle, Calendar, Shield } from 'lucide-react'
import { ContactFormData } from '@/types'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,  // Ini akan muncul di Reply-to & isi email
        message: data.message,
      }

      const result = await emailjs.send(
        'service_00li1kf',
        'template_et5x72g',
        templateParams,
        'y-R5SOPrfgd8PMrt-'
      )

      if (result.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.',
          confirmButtonColor: '#2563eb',
          timer: 3000,
          showConfirmButton: true
        })
        reset()
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: 'Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.',
          confirmButtonColor: '#dc2626'
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Terjadi kesalahan koneksi. Silakan coba lagi.',
        confirmButtonColor: '#dc2626'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const whatsappNumber = '6281311685803'
  
  const whatsappMessage = encodeURIComponent(
    'Halo JasaWebPro! \n\n' +
    'Saya tertarik dengan layanan yang ditawarkan.\n\n' +
    'Informasi Saya:\n' +
    'Nama: [Nama Anda]\n' +
    'Email: [Email Anda]\n\n' +
    'Yang ingin saya tanyakan/butuhkan:\n' +
    '[Ceritakan kebutuhan Anda di sini]\n\n' +
    'Terima kasih.'
  )
  
  const orderMessage = encodeURIComponent(
    'Halo JasaWebPro! \n\n' +
    'Saya ingin *ORDER* layanan pembuatan website/aplikasi.\n\n' +
    '*Data Diri*:\n' +
    'Nama: [Nama Lengkap]\n' +
    'Email: [Email Aktif]\n\n' +
    '*Detail Proyek*:\n' +
    'Jenis Website: [Company Profile / E-Commerce / Landing Page / Lainnya]\n' +
    'Fitur yang dibutuhkan: [Sebutkan fitur]\n' +
    'Target Selesai: [Tanggal]\n' +
    'Budget: [Rp ...]\n\n' +
    'Mohon info lebih lanjut. Terima kasih.'
  )
  
  const consultMessage = encodeURIComponent(
    'Halo JasaWebPro! \n\n' +
    'Saya ingin *KONSULTASI* GRATIS untuk proyek digital saya.\n\n' +
    'Nama: [Nama Anda]\n' +
    'Email: [Email Anda]\n' +
    'No WhatsApp: [Nomor Anda]\n\n' +
    'Yang ingin saya konsultasikan:\n' +
    '[Ceritakan ide atau masalah bisnis Anda]\n\n' +
    'Terima kasih, mohon direspon.'
  )
  
  const priceMessage = encodeURIComponent(
    'Halo JasaWebPro! \n\n' +
    'Saya ingin menanyakan *DAFTAR HARGA* untuk layanan:\n\n' +
    'Web Development\n' +
    'Mobile App\n' +
    'Digital Marketing\n' +
    'E-Commerce\n' +
    'UI/UX Design\n' +
    'Custom Software\n\n' +
    'Nama: [Nama Anda]\n' +
    'Email: [Email Anda]\n\n' +
    'Tolong kirimkan informasi harga dan paket lengkapnya. Terima kasih.'
  )

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jasawebpro148@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:jasawebpro148@gmail.com'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 813-1168-5803',
      color: 'from-green-500 to-emerald-500',
      link: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    },
    {
      icon: MapPin,
      title: 'Alamat',
      value: 'Jakarta, Indonesia',
      color: 'from-orange-500 to-red-500',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Jam Kerja',
      value: 'Senin - Jumat: 09:00 - 18:00',
      color: 'from-purple-500 to-pink-500',
      subValue: 'Sabtu: 09:00 - 14:00'
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-500"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm px-5 py-2 rounded-full mb-4 animate-fade-in-up">
            <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Hubungi Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Siap Memulai 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Proyek Anda?</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Konsultasikan kebutuhan digital Anda dengan tim profesional kami. Kami siap membantu 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 dark:border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </span>
                Informasi Kontak
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link?.includes('wa.me') ? '_blank' : undefined}
                    rel={item.link?.includes('wa.me') ? 'noopener noreferrer' : undefined}
                    className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 group ${item.link !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className={`bg-gradient-to-r ${item.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-700 dark:text-slate-200">{item.title}</p>
                      <p className="text-slate-600 dark:text-slate-300">{item.value}</p>
                      {item.subValue && (
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{item.subValue}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Mengapa Memilih Kami?</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>Respon cepat dalam 1x24 jam</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>Garansi kepuasan 100%</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>Support gratis setelah project selesai</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>Harga terjangkau & berkualitas</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${consultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-5 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Konsultasi Gratis</p>
                    <p className="text-blue-100 text-xs">Diskusikan ide & kebutuhan Anda</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-full p-2 group-hover:translate-x-1 transition-transform">
                  <Send className="w-4 h-4" />
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${orderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-5 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Order Sekarang</p>
                    <p className="text-green-100 text-xs">Langsung pesan dengan format terstruktur</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-full p-2 group-hover:translate-x-1 transition-transform">
                  <Send className="w-4 h-4" />
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${priceMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-5 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Tanya Harga & Paket</p>
                    <p className="text-purple-100 text-xs">Info lengkap biaya & promo terbaru</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-full p-2 group-hover:translate-x-1 transition-transform">
                  <Send className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Send className="w-5 h-5" />
                Kirim Pesan
              </h3>
              <p className="text-blue-100 mt-1">Isi form di bawah untuk konsultasi gratis</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Nama harus diisi' })}
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {String(errors.name.message)}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email harus diisi',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email tidak valid'
                      }
                    })}
                    placeholder="contoh@email.com"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {String(errors.email.message)}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    {...register('message', { required: 'Pesan harus diisi' })}
                    placeholder="Ceritakan kebutuhan Anda..."
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {String(errors.message.message)}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                    Atau kirim pesan langsung ke WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    +62 813-1168-5803
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animation-delay-500 { animation-delay: 2s; }
      `}</style>
    </section>
  )
}