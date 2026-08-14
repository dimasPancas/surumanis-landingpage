'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/data/siteData'

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const TiktokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5h-2a3 3 0 0 1-3-3V16a2 2 0 1 1-2-2v-2a4 4 0 0 0-2 7.93V12z"></path>
  </svg>
)

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-3">
              Informasi Pengelola
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-6 leading-tight">
              Butuh bantuan untuk reservasi tempat?
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Tanya seputar fasilitas camping, ketersediaan tenda, tiket masuk, atau akses jalan ke Pantai Surumanis? Jangan ragu hubungi kami.
            </p>

            {/* List Kontak Clean/Minimalist */}
            <div className="flex flex-col border-t border-slate-200">
              <a 
                href={siteConfig.contact.whatsapp} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between py-5 border-b border-slate-200 hover:border-slate-900 transition-colors"
              >
                <div className="flex items-center gap-4 text-slate-900">
                  <WhatsappIcon />
                  <span className="font-medium">WhatsApp Admin</span>
                </div>
                <ArrowUpRight className="text-slate-400 group-hover:text-slate-900 transition-colors" size={20} />
              </a>

              <a 
                href={siteConfig.contact.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between py-5 border-b border-slate-200 hover:border-slate-900 transition-colors"
              >
                <div className="flex items-center gap-4 text-slate-900">
                  <InstagramIcon />
                  <span className="font-medium">Instagram</span>
                </div>
                <ArrowUpRight className="text-slate-400 group-hover:text-slate-900 transition-colors" size={20} />
              </a>

              <a 
                href={siteConfig.contact.tiktok} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between py-5 border-b border-slate-200 hover:border-slate-900 transition-colors"
              >
                <div className="flex items-center gap-4 text-slate-900">
                  <TiktokIcon />
                  <span className="font-medium">TikTok</span>
                </div>
                <ArrowUpRight className="text-slate-400 group-hover:text-slate-900 transition-colors" size={20} />
              </a>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Alamat Lokasi</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                {siteConfig.contact.address}
              </p>
            </div>
          </motion.div>

          {/* Kolom Kanan: Peta (Tanpa shadow berlebihan, cukup border tipis) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 h-[450px] lg:h-[600px] w-full rounded-xl bg-slate-100 border border-slate-200 overflow-hidden"
          >
            <iframe 
              src="https://maps.google.com/maps?q=-7.771720239711861,109.43223449296858&hl=id&z=16&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Pantai Surumanis"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  )
}