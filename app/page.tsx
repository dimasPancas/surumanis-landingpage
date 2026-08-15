import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PackagesSection from '@/components/PackagesSection'
import FacilitiesSection from '@/components/FacilitiesSection'
import CalculatorSection from '@/components/CalculatorSection'
import FAQSection from '@/components/FAQSection'
import GallerySection from '@/components/GallerySection'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FacilitiesSection />
      <GallerySection />
      <PackagesSection />
      <CalculatorSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}