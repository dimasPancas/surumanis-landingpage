'use client'

import { motion } from 'motion/react'
import { Car, Camera, Tent, Home, Bath, Building2, Coffee } from 'lucide-react'

const facilities = [
  {
    icon: Car,
    title: 'Area Parkir Luas',
    description: 'Lahan parkir untuk motor dan mobil. Biaya parkir sudah termasuk dalam tiket masuk.'
  },
  {
    icon: Camera,
    title: 'Spot Foto Estetik',
    description: 'Gardu pandang, ranjang jaring, patung elang, dan jembatan kayu dengan latar laut.'
  },
  {
    icon: Tent,
    title: 'Area Camping Ground',
    description: 'Area berkemah yang luas langsung menghadap laut, ideal untuk sunrise dan malam berbintang.'
  },
  {
    icon: Home,
    title: 'Gazebo & Tempat Duduk',
    description: 'Beberapa gazebo tersedia sebagai tempat beristirahat atau berteduh.'
  },
  {
    icon: Bath,
    title: 'Kamar Mandi & Toilet',
    description: 'Fasilitas kamar mandi dan toilet umum untuk kenyamanan pengunjung.'
  },
  {
    icon: Building2,
    title: 'Mushola',
    description: 'Tempat ibadah sederhana tersedia bagi pengunjung yang ingin melaksanakan salat.'
  },
  {
    icon: Coffee,
    title: 'Warung Makan Lokal',
    description: 'Makanan ringan, mi instan, dan jajanan lokal. Tutup di malam hari.'
  }
]

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4 md:mb-5 leading-tight tracking-tight">
            Fasilitas <span className="text-amber-600">Penunjang</span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed px-4">
            Fasilitas yang kami sediakan masih sederhana karena kami mengutamakan keasrian dan nuansa alami. Cocok untuk Anda yang menyukai ketenangan dan suasana "back to nature".
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors duration-200"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-700" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1.5">
                      {facility.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-10"
        >
          <p className="text-sm text-slate-500 leading-relaxed">
            <span className="font-medium text-slate-600">Catatan:</span> Pengunjung yang ingin berkemah disarankan membawa bekal sendiri karena warung tutup di malam hari.
          </p>
        </motion.div>
      </div>
    </section>
  )
}