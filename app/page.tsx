import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TrustSignals from '@/components/TrustSignals'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <TrustSignals />
      <Contact />
      <Footer />
    </main>
  )
}