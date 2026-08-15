'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { generateWhatsAppUrl } from '@/data/siteData'

export default function Hero() {
  const scrollToPackages = () => {
    const element = document.getElementById('packages')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/surumanis-hero.jpg"
          alt="Pantai Surumanis"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] sm:object-center transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white pt-12 sm:pt-0">
        {/* Badge / Subtitle */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide"
        >
          Wisata & Camping Kebumen
        </motion.div> */}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 sm:mb-6 leading-tight tracking-tight"
        >
          Berkemah dengan Pesona
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-500">
            Laut Selatan
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-lg md:text-xl mb-8 text-slate-200 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2"
        >
          Rasakan harmoni antara petualangan dan ketenangan di tepi Samudra Hindia.
          Nikmati sunrise, api unggun di bawah bintang, dan momen tak terlupakan.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-[280px] sm:max-w-none mx-auto mt-2 sm:mt-0"
        >
          <button
            onClick={scrollToPackages}
            className="w-full sm:w-auto rounded-full px-6 py-3 sm:px-8 sm:py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/25 hover:-translate-y-0.5"
          >
            Lihat Paket
          </button>

          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full px-6 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base transition-all hover:-translate-y-0.5 text-center"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={scrollToPackages}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/70 hover:text-white transition-colors p-2"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  )
}