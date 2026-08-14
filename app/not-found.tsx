'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Home, ArrowLeft, Waves } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full text-center">

        {/* Animated Wave Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-slate-300"
            >
              <Waves size={120} strokeWidth={1.5} />
            </motion.div>

            {/* 404 Text Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-6xl font-bold text-slate-400 font-serif">404</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4 leading-tight"
        >
          Halaman Tidak Ditemukan
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto"
        >
          Sepertinya halaman yang Anda cari tersesat di pantai.
          Mungkin ombak membawanya pergi, atau mungkin memang tidak pernah ada. 🏖️
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary Button - Home */}
          <Link
            href="/"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            <Home size={20} />
            Kembali ke Beranda
          </Link>
        </motion.div>

        {/* Additional Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <p className="text-sm text-slate-500">
            Butuh bantuan? Hubungi kami melalui{' '}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
            >
              WhatsApp
            </a>
          </p>
        </motion.div>

      </div>
    </div>
  )
}
