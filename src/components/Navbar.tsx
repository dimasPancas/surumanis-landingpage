'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { generateWhatsAppUrl } from '@/data/siteData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: 'Paket', href: 'packages' },
    { label: 'Galeri', href: 'gallery' },
    { label: 'Kontak', href: 'contact' },
  ]

  const isSolid = isScrolled || isMobileMenuOpen

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid
          // EFEK CRYSTAL GLASS: Putih transparan 50% + Efek blur kaca + Border putih ala pantulan kaca
          ? 'bg-white/50 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-b border-white/60 py-3'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo isSolid={isSolid} />
          </Link>

          {/* Logo/Brand */}
          {/* <Link href="/">
            <h1
              className={`text-2xl font-bold font-serif transition-colors duration-300 ${isSolid ? 'text-slate-900' : 'text-white'
                }`}
            >
              Surumanis
            </h1>
          </Link> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 items-center mr-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-[15px] font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${isSolid
                      ? 'text-slate-700 hover:text-slate-950'
                      : 'text-slate-200 hover:text-white'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${isSolid
                  ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-md hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 hover:-translate-y-0.5'
                }`}
            >
              Reservasi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 -mr-2 rounded-lg transition-colors ${isSolid ? 'text-slate-900' : 'text-white'
              }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/60 backdrop-blur-md border-t border-white/50 overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.1)]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg text-slate-700 font-medium hover:text-slate-950 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-white/40">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center w-full rounded-full px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}