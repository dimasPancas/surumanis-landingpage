'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { galleryData } from '@/data/siteData'
import { GalleryItem } from '@/types/database'
import { X, Image as ImageIcon } from 'lucide-react'

export default function GallerySection() {
  const galleries = galleryData
  const [filteredGalleries, setFilteredGalleries] = useState<GalleryItem[]>(galleryData)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setFilteredGalleries(galleryData)
    } else {
      setFilteredGalleries(galleryData.filter(item => item.category === category))
    }
  }

  const categories = [
    { value: 'all', label: 'Semua' },
    { value: 'pemandangan', label: 'Pemandangan' },
    { value: 'aktivitas', label: 'Aktivitas' },
    { value: 'fasilitas', label: 'Fasilitas' },
  ]

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
            Momen Tak Terlupakan
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Jelajahi keindahan alam, fasilitas, dan keseruan aktivitas yang menanti Anda di Pantai Surumanis Camp.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.value
                  ? 'bg-amber-600 text-white shadow-md transform scale-105'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-amber-500'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid - Masonry Layout */}
        {filteredGalleries.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6"
          >
            {filteredGalleries.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative overflow-hidden rounded-2xl bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={item.image_url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070'
                    }}
                  />

                  {/* Overlay on hover (Teks di Tengah, Hanya Judul) */}
                  <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 text-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold font-serif text-white text-xl md:text-2xl leading-tight drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-slate-50 rounded-3xl"
          >
            <ImageIcon className="mx-auto h-12 w-12 text-slate-300 mb-4" />
            <p className="text-slate-500 text-lg">Belum ada foto untuk kategori ini.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-red-500 text-white transition-colors duration-300"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full cursor-default"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src={selectedImage.image_url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                />
              </div>
              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold font-serif">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}