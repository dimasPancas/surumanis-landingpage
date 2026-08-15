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
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detect active section
      const sections = ['facilities', 'gallery', 'packages', 'faq', 'contact']
      const scrollPosition = window.scrollY + 150 // Offset for navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    handleScroll() // Call once on mount
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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
    { label: 'Fasilitas', href: 'facilities' },
    { label: 'Galeri', href: 'gallery' },
    { label: 'Paket', href: 'packages' },
    { label: 'FAQ', href: 'faq' },
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
              {navLinks.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-[15px] font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 px-3 py-1.5 rounded-lg ${
                      isActive
                        ? 'bg-amber-500 text-white'
                        : isSolid
                        ? 'text-slate-700 hover:text-slate-950'
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
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

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 h-screen w-[75%] max-w-sm bg-white shadow-2xl z-50 md:hidden flex flex-col"
            >
              {/* Header - Fixed Top */}
              <div className="flex items-center justify-between p-5 border-b border-slate-200 flex-shrink-0">
                <Logo isSolid={true} />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} strokeWidth={1.5} className="text-slate-900" />
                </button>
              </div>

              {/* Navigation Links - Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href
                    return (
                      <button
                        key={link.href}
                        onClick={() => scrollToSection(link.href)}
                        className={`text-left text-base font-medium transition-all px-4 py-3 rounded-lg ${
                          isActive
                            ? 'bg-amber-500 text-white shadow-sm'
                            : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                        }`}
                      >
                        {link.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Footer - Fixed Bottom */}
              <div className="px-6 py-5 border-t border-slate-200 flex-shrink-0 bg-white">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center w-full rounded-full px-6 py-3.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold transition-all shadow-sm"
                >
                  Hubungi Kami
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}