'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Apakah boleh membawa tenda dan perlengkapan sendiri?',
    answer: 'Tentu saja boleh. Anda hanya perlu membayar tiket masuk dan biaya sewa lahan (kavling) per tenda.'
  },
  {
    question: 'Bagaimana akses jalan menuju lokasi, apakah bisa untuk mobil?',
    answer: 'Akses jalan sudah beraspal dan cor semen, bisa dilalui sepeda motor maupun mobil pribadi hingga area parkir utama.'
  },
  {
    question: 'Jam berapa waktu check-in dan check-out untuk camping?',
    answer: 'Check-in dibuka mulai pukul 14.00 WIB dan check-out maksimal pukul 11.00 WIB keesokan harinya.'
  },
  {
    question: 'Apakah air di kamar mandi menggunakan air tawar?',
    answer: 'Ya, seluruh toilet dan kamar mandi bilas kami menggunakan sumber air tawar bersih.'
  },
  {
    question: 'Bagaimana jika cuaca buruk atau hujan lebat saat jadwal camp?',
    answer: 'Anda dapat mengajukan reschedule (perubahan jadwal) maksimal H-1 dengan mengonfirmasi ke admin WhatsApp kami.'
  },
  {
    question: 'Bolehkah berenang di laut Pantai Surumanis?',
    answer: 'Pengunjung dilarang berenang di laut lepas demi keselamatan karena ombak laut selatan, namun bermain air di tepian karang saat surut diperbolehkan dengan tetap berhati-hati.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4 md:mb-5 leading-tight tracking-tight">
            Pertanyaan <span className="text-amber-600">Populer</span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed px-4">
            Temukan jawaban cepat seputar reservasi, akses, dan aturan berkemah di Pantai Surumanis.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors duration-200"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-xl"
                aria-expanded={openIndex === index}
              >
                <span className="text-base md:text-lg font-semibold text-slate-900 leading-relaxed pr-2">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2}
                />
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-4 md:px-6 md:pb-5 pt-0">
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}