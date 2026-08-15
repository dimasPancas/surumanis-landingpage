'use client'

import { useState } from 'react'
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
  const [selectedPackageId, setSelectedPackageId] = useState<string>('')

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId)
    
    // Scroll to calculator section
    setTimeout(() => {
      const calculatorElement = document.getElementById('calculator')
      if (calculatorElement) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = calculatorElement.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FacilitiesSection />
      <GallerySection />
      <PackagesSection onSelectPackage={handleSelectPackage} />
      <CalculatorSection preSelectedPackageId={selectedPackageId} />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
