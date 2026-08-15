'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { packagesData, equipmentData, generateWhatsAppUrl } from '@/data/siteData'
import { PackageItem, EquipmentItem } from '@/types/database'
import { Plus, Minus, Calendar, User, Info, Wallet, AlertCircle } from 'lucide-react'

export default function CalculatorSection() {
  const packages = packagesData
  const equipment = equipmentData
  const [name, setName] = useState('')
  const [selectedPackageId, setSelectedPackageId] = useState('')
  const [numPeople, setNumPeople] = useState(2)
  const [date, setDate] = useState('')
  const [selectedEquipment, setSelectedEquipment] = useState<Record<string, number>>({})

  const selectedPackage = packages.find(pkg => pkg.id === selectedPackageId)

  // Auto-adjust numPeople when package changes
  useEffect(() => {
    if (selectedPackage && selectedPackage.max_persons) {
      // If current numPeople exceeds new package's max, adjust it
      if (numPeople > selectedPackage.max_persons) {
        setNumPeople(selectedPackage.max_persons)
      }
    }
  }, [selectedPackageId])

  const toggleEquipment = (id: string, quantity: number) => {
    setSelectedEquipment(prev => ({
      ...prev,
      [id]: quantity,
    }))
  }

  const removeEquipment = (id: string) => {
    setSelectedEquipment(prev => {
      const newState = { ...prev }
      delete newState[id]
      return newState
    })
  }

  const calculateSubtotal = () => {
    return selectedPackage ? selectedPackage.price : 0
  }

  const calculateEquipmentTotal = () => {
    return Object.entries(selectedEquipment).reduce((total, [id, qty]) => {
      const item = equipment.find(e => e.id === id)
      return total + (item ? item.price * qty : 0)
    }, 0)
  }

  const calculateGrandTotal = () => {
    return calculateSubtotal() + calculateEquipmentTotal()
  }

  const generateWhatsAppMessage = () => {
    if (!selectedPackage || !date || !name) return '#'

    const equipmentList = Object.entries(selectedEquipment)
      .map(([id, qty]) => {
        const item = equipment.find(e => e.id === id)
        return item ? `• ${item.name} (${qty} ${item.unit}) - Rp ${(item.price * qty).toLocaleString('id-ID')}` : ''
      })
      .filter(Boolean)
      .join('\n')

    const message = `Halo, saya ingin booking Pantai Surumanis Camp:\n\n` +
      `*Nama Pemesan:* ${name}\n` +
      `*Paket:* ${selectedPackage.name}\n` +
      `*Tanggal:* ${new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}\n` +
      `*Jumlah Orang:* ${numPeople} orang\n\n` +
      `*Equipment Tambahan:*\n${equipmentList || 'Tidak ada'}\n\n` +
      `*Total Biaya:* Rp ${calculateGrandTotal().toLocaleString('id-ID')}\n\n` +
      `Terima kasih!`

    return generateWhatsAppUrl(message)
  }

  const groupedEquipment = equipment.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, EquipmentItem[]>)

  const categoryLabels: Record<string, string> = {
    masak: 'Peralatan Masak',
    tidur: 'Peralatan Tidur',
    kelistrikan: 'Peralatan Kelistrikan',
    furnitur: 'Furnitur',
  }

  const isFormValid = selectedPackage && date && name.trim() !== '';

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
            Hitung Biaya Petualanganmu
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Pilih paket, tambahkan equipment yang dibutuhkan, dan dapatkan estimasi biaya secara instan.
          </p>
        </motion.div>

        {/* Layout Grid: Kiri untuk Form, Kanan untuk Receipt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* KOLOM KIRI - FORM PENGISIAN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Card 1: Detail Pesanan */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-bold font-serif text-slate-900">1. Detail Pesanan</h3>
                <p className="text-slate-500 text-sm mt-1">Lengkapi informasi dasar camping Anda.</p>
              </div>

              {/* Input Nama Lengkap */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                  <User size={16} />
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Package Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Pilih Paket <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:outline-none transition-colors text-slate-900 bg-white"
                  >
                    <option value="">-- Pilih Paket --</option>
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} - Rp {pkg.price.toLocaleString('id-ID')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                    <Calendar size={16} />
                    Tanggal Camp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:outline-none transition-colors text-slate-900 bg-white"
                  />
                </div>
              </div>

              {/* Number of People */}
              <div className="space-y-2 pt-2">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Jumlah Orang
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setNumPeople(Math.max(1, numPeople - 1))}
                    disabled={numPeople <= 1}
                    className={`p-3 rounded-full transition-colors ${
                      numPeople <= 1
                        ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                        : 'bg-slate-100 hover:bg-slate-200'
                    }`}
                  >
                    <Minus color={numPeople <= 1 ? '#cbd5e1' : 'black'} size={20} />
                  </button>
                  <span className="text-2xl font-bold text-slate-900 min-w-[3rem] text-center">
                    {numPeople}
                  </span>
                  <button
                    onClick={() => {
                      const maxCapacity = selectedPackage?.max_persons || 999
                      setNumPeople(Math.min(maxCapacity, numPeople + 1))
                    }}
                    disabled={selectedPackage && numPeople >= selectedPackage.max_persons}
                    className={`p-3 rounded-full transition-colors ${
                      selectedPackage && numPeople >= selectedPackage.max_persons
                        ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                        : 'bg-slate-100 hover:bg-slate-200'
                    }`}
                  >
                    <Plus 
                      size={20} 
                      color={selectedPackage && numPeople >= selectedPackage.max_persons ? '#cbd5e1' : 'black'} 
                    />
                  </button>
                </div>
                
                {/* Helper text showing capacity */}
                {selectedPackage && (
                  <div className="flex items-start gap-2 mt-3">
                    {numPeople >= selectedPackage.max_persons ? (
                      <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg text-sm">
                        <AlertCircle size={16} className="flex-shrink-0" />
                        <span className="font-medium">
                          Kapasitas maksimal paket ini adalah {selectedPackage.max_persons} orang
                        </span>
                      </div>
                    ) : (
                      <p className="text-slate-500 text-sm">
                        Kapasitas: {numPeople} / {selectedPackage.max_persons} orang
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Card 2: Peralatan Tambahan */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-bold font-serif text-slate-900">2. Peralatan Tambahan</h3>
                <p className="text-slate-500 text-sm mt-1">Sewa alat tambahan sesuai kebutuhan Anda (Opsional).</p>
              </div>

              <div className="space-y-8">
                {Object.entries(groupedEquipment).map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="font-semibold text-amber-800 inline-block px-3 py-1 rounded-lg text-sm">
                      {categoryLabels[category] || category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors ${selectedEquipment[item.id] > 0
                              ? 'border-amber-500 bg-amber-50/30'
                              : 'border-slate-100 hover:border-amber-200'
                            }`}
                        >
                          <div className="flex-1">
                            <p className="font-medium text-slate-900 text-sm">{item.name}</p>
                            <p className="text-sm font-semibold text-amber-600 mt-1">
                              Rp {item.price.toLocaleString('id-ID')}<span className="text-xs text-slate-500 font-normal">/{item.unit}</span>
                            </p>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            {selectedEquipment[item.id] > 0 ? (
                              <>
                                <button
                                  onClick={() => toggleEquipment(item.id, selectedEquipment[item.id] - 1)}
                                  className="p-1.5 rounded-md bg-white border border-slate-200 shadow-sm hover:bg-slate-50 text-slate-700"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="w-6 text-center font-semibold text-slate-800">
                                  {selectedEquipment[item.id]}
                                </span>
                                <button
                                  onClick={() => toggleEquipment(item.id, selectedEquipment[item.id] + 1)}
                                  className="p-1.5 rounded-md bg-amber-600 hover:bg-amber-700 text-white shadow-sm"
                                >
                                  <Plus size={16} />
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => toggleEquipment(item.id, 1)}
                                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-600 hover:text-white text-slate-700 text-sm font-medium transition-all"
                              >
                                Tambah
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN - RECEIPT (STICKY DI DESKTOP) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden flex flex-col">

              {/* Header Card (Clean & Dark) */}
              <div className="bg-slate-900 px-5 py-5 md:px-6 md:py-6 text-white relative">
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-2 bg-slate-800 rounded-lg text-amber-400">
                    <Wallet size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-serif tracking-wide">Estimasi Biaya</h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-0.5">Pantai Surumanis Camp</p>
                  </div>
                </div>
              </div>

              {/* Rincian / Body */}
              <div className="p-5 md:p-6 flex flex-col gap-5 md:gap-6">

                {/* Line Items */}
                <div className="space-y-4">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Rincian Pesanan</h4>

                  {name && (
                    <div className="flex justify-between items-center text-sm pb-3 border-b border-slate-100">
                      <span className="text-slate-500">Pemesan</span>
                      <span className="font-semibold text-slate-900 truncate max-w-[150px]">{name}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-start text-sm gap-4">
                    <span className="text-slate-600 leading-relaxed">
                      {selectedPackage ? selectedPackage.name : 'Belum pilih paket'}
                    </span>
                    <span className="font-semibold text-slate-900 whitespace-nowrap">
                      Rp {calculateSubtotal().toLocaleString('id-ID')}
                    </span>
                  </div>

                  {calculateEquipmentTotal() > 0 && (
                    <div className="flex justify-between items-start text-sm gap-4">
                      <span className="text-slate-600">Sewa Alat Tambahan</span>
                      <span className="font-semibold text-slate-900 whitespace-nowrap">
                        Rp {calculateEquipmentTotal().toLocaleString('id-ID')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Divider Dashed (Khas Struk/Receipt) */}
                <div className="border-t-2 border-dashed border-slate-200 w-full" />

                {/* Grand Total */}
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-slate-900 font-bold text-sm md:text-base">Total Bayar</span>
                    <span className="text-2xl md:text-3xl font-bold text-amber-600 tracking-tight">
                      Rp {calculateGrandTotal().toLocaleString('id-ID')}
                    </span>
                  </div>
                  <p className="text-[11px] md:text-xs text-slate-400 text-right">
                    *Harga dapat berubah menyesuaikan ketersediaan
                  </p>
                </div>

                {/* Info Box jika form belum lengkap */}
                {!isFormValid && (
                  <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex gap-3 items-start text-sm mt-2">
                    <Info size={16} className="mt-0.5 text-slate-400 flex-shrink-0" />
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      Silakan isi <strong>Nama</strong>, pilih <strong>Paket</strong>, dan <strong>Tanggal</strong> untuk melanjutkan.
                    </p>
                  </div>
                )}

                {/* WhatsApp Button */}
                <a
                  href={isFormValid ? generateWhatsAppMessage() : undefined}
                  target={isFormValid ? "_blank" : undefined}
                  rel={isFormValid ? "noopener noreferrer" : undefined}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 md:py-4 font-semibold text-sm md:text-base transition-all mt-2 ${isFormValid
                      ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/25 hover:-translate-y-0.5 cursor-pointer'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                    }`}
                  onClick={(e) => {
                    if (!isFormValid) {
                      e.preventDefault()
                    }
                  }}
                >
                  {/* Ikon WhatsApp SVG Kecil */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={!isFormValid ? 'opacity-50' : ''}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}