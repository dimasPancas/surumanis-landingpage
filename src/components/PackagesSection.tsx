'use client'

import { useRef } from 'react'
import { motion } from 'motion/react'
import { packagesData } from '@/data/siteData'
import { Check, Users, ChevronRight, ChevronLeft } from 'lucide-react'

interface PackagesSectionProps {
  onSelectPackage: (packageId: string) => void
}

export default function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  const packages = packagesData
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 280 
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="packages" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4 md:mb-5 leading-tight tracking-tight">
            Pilihan Paket <span className="text-amber-600">Camping Terbaik</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed px-4">
            Pilih paket yang sesuai dengan kebutuhan liburan Anda. Tersedia fasilitas lengkap untuk pasangan hingga keluarga.
          </p>
        </motion.div>

        {/* Slider Wrapper with Floating Arrows */}
        {packages.length > 0 ? (
          <div className="relative group">
            
            {/* Tombol Kiri (Desktop) */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-6 z-20 hidden md:flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-slate-100 text-slate-600 hover:text-slate-900 hover:scale-105 transition-all focus:outline-none"
              aria-label="Geser ke kiri"
            >
              <ChevronLeft size={24} strokeWidth={2} />
            </button>

            {/* Tombol Kanan (Desktop) */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-6 z-20 hidden md:flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-slate-100 text-slate-600 hover:text-slate-900 hover:scale-105 transition-all focus:outline-none"
              aria-label="Geser ke kanan"
            >
              <ChevronRight size={24} strokeWidth={2} />
            </button>

            {/* Slider Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              ref={sliderRef}
              className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 -mx-5 px-5 md:-mx-6 md:px-6 lg:mx-0 lg:px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="relative snap-start shrink-0 w-[75vw] sm:w-[320px] md:w-[350px] lg:w-[380px] bg-white rounded-2xl border border-slate-200 flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Popular Badge */}
                  {pkg.is_popular && (
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-slate-900/90 backdrop-blur-md text-amber-400 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wide border border-slate-700/50 shadow-sm">
                        ★ PALING DIMINATI
                      </div>
                    </div>
                  )}

                  {/* Package Image */}
                  <div className="relative h-44 sm:h-52 md:h-60 overflow-hidden bg-slate-100 group-hover:bg-slate-200">
                    <img
                      src={pkg.image_url || 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070'}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Package Content */}
                  <div className="p-5 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-1">
                      {pkg.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs md:text-sm mb-4 md:mb-5 pb-4 md:pb-5 border-b border-slate-100">
                      <Users size={14} className="md:w-4 md:h-4" />
                      <span>Kapasitas maks. {pkg.max_persons} org</span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <Check size={16} className="text-slate-400 flex-shrink-0 mt-0.5 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                          <span className="text-slate-600 text-sm md:text-sm leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price & CTA Button */}
                    <div className="mt-auto pt-2">
                      <div className="mb-4 md:mb-5">
                        <span className="text-xs md:text-sm text-slate-500 block mb-0.5 md:mb-1">Harga mulai</span>
                        <span className="text-xl md:text-2xl font-bold text-slate-900">
                          Rp {pkg.price.toLocaleString('id-ID')}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectPackage(pkg.id)}
                        className={`w-full flex items-center justify-center gap-2 rounded-xl px-5 py-3 md:px-6 md:py-3.5 text-sm font-semibold transition-all duration-300 ${
                          pkg.is_popular
                            ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-sm hover:shadow-md hover:-translate-y-0.5'
                            : 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5'
                        }`}
                      >
                        Pilih Paket
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
            <p className="text-slate-500 text-sm md:text-base">
              Paket belum tersedia saat ini. Silakan hubungi admin untuk informasi lebih lanjut.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}