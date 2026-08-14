import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PackagesSection from '@/components/PackagesSection'
import CalculatorSection from '@/components/CalculatorSection'
import GallerySection from '@/components/GallerySection'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PackagesSection />
      <GallerySection />
      <CalculatorSection />
      <ContactSection />
      <Footer />
    </main>
  )
}