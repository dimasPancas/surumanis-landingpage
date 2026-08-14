# Design System & UI/UX Guidelines: Pantai Surumanis Camp

## 1. Vibe & Art Direction
- **Tema:** "Coastal Serenity & Adventure" (Ketenangan Pesisir & Petualangan).
- **Kesan:** Premium, estetik, hangat, dan mengundang. Bukan website korporat yang kaku.
- **Anti-AI Slop Rules:** 
  - JANGAN gunakan teks *placeholder* generik seperti "Welcome to our website" atau "Discover the beauty". Gunakan bahasa Indonesia yang *engaging*, hangat, dan natural (contoh: "Pelarian Sempurna di Balik Tebing Kebumen").
  - HINDARI *card* kotak standar tanpa modifikasi. Gunakan *rounded corners* besar (`rounded-2xl` atau `rounded-3xl`), efek *glassmorphism* tipis, dan *soft shadows*.
  - JANGAN biarkan *layout* terlalu padat. Gunakan *whitespace/padding* yang luas (`py-20` atau `py-24` untuk *section*).

## 2. Typography Pairings
- **Headings (Judul):** Gunakan font bergaya Serif atau Display yang elegan (seperti `Playfair Display`, `Lora`, atau `Merriweather`). Berikan bobot yang tegas.
- **Body Text (Teks Paragraf):** Gunakan font Sans-Serif yang sangat mudah dibaca dan modern (seperti `Plus Jakarta Sans`, `Inter`, atau `Geist`).
- **Implementasi Next.js:** Konfigurasikan di `src/app/layout.tsx` menggunakan `next/font/google`.

## 3. Color Palette (Tailwind)
- **Background Utama:** `bg-slate-50` atau `#FAFAFA` (Bukan putih bersih `#FFFFFF` agar tidak menyilaukan mata).
- **Primary (Warna Laut/Alam):** `teal-700` (`#0F766E`) hingga `emerald-600` (`#059669`). Gunakan untuk elemen brand, teks highlight, atau background section tertentu.
- **Accent (Warna Senja/Aksi):** `amber-500` (`#F59E0B`) atau `orange-500`. Gunakan KHUSUS untuk tombol Call-to-Action (CTA) seperti "Pesan Sekarang" atau badge "Paling Laris".
- **Teks:** `text-slate-900` untuk Heading, `text-slate-600` untuk paragraf/deskripsi.

## 4. UI Components & Micro-interactions
- **Buttons (Tombol):** 
  - Wajib `rounded-full` (pill shape).
  - Berikan transisi warna halus pada *hover* (`transition-colors duration-300`).
  - Animasi klik/hover menggunakan Framer Motion (`whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}`).
- **Cards (Kartu Paket/Alat):**
  - Border tipis (`border-slate-100`), background putih (`bg-white/80` dengan `backdrop-blur` jika melayang di atas gambar).
  - Hover effect: *Lift-up* sedikit (`-translate-y-1`) dengan bayangan yang menyebar (`hover:shadow-xl`).
- **Images:** Semua gambar menggunakan `object-cover` dengan transisi `hover:scale-105` di dalam *container* yang `overflow-hidden`.

## 5. Layouting per Section
- **Hero Section:** Full-screen (`min-h-screen`). Background gambar pantai resolusi tinggi dengan *dark overlay* (`bg-black/40`) agar teks putih di atasnya terbaca jelas. Teks rata tengah atau kiri dengan efek *Fade Up* (Framer Motion).
- **Packages Section:** *Grid layout* (1 kolom di HP, 3 kolom di Desktop). Paket "Populer" harus lebih menonjol (ukuran lebih besar atau punya border/pita khusus).
- **Calculator/Booking Section:** Buat seolah-olah pengguna sedang melihat "Struk/Nota" interaktif yang mengambang (*floating receipt style*).
- **Gallery Section:** Gunakan *Masonry Layout* (gambar tersusun zig-zag seperti Pinterest), BUKAN *grid* kotak kaku yang membosankan.

## 6. Animasi (Framer Motion)
- **Scroll Reveal:** Setiap *section* baru harus muncul perlahan saat di-*scroll* (menggunakan `initial="hidden" whileInView="visible"`).
- **Stagger Children:** Saat memuat *grid* paket atau galeri, munculkan *card* satu per satu bergantian (*delay* berurutan), jangan muncul serentak.