'use client'

import { motion } from 'motion/react'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <h3 className="text-2xl font-bold font-serif text-white mb-3">
              Pantai Surumanis
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Destinasi wisata & camping premium di tepi Laut Selatan Kebumen. Nikmati harmoni alam bersama orang-orang tercinta.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-6 text-sm text-slate-300"
          >
            <button onClick={() => scrollToSection('packages')} className="hover:text-amber-400 transition-colors">
              Paket Camping
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-400 transition-colors">
              Galeri
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">
              Kontak
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Pantai Surumanis Camp. Hak cipta dilindungi.
          </p>
          <p>
            Dikelola oleh <span className="text-slate-400 font-medium">xxx</span>
          </p>
        </div>
      </div>
    </footer>
  )
}