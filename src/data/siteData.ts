import { PackageItem, EquipmentItem, GalleryItem, AttractionItem } from '@/types/database'

// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  name: "Pantai Surumanis Camp",
  whatsapp: {
    number: "6287779047467",
    defaultMessage: "Halo, saya ingin bertanya tentang Pantai Surumanis Camp"
  },
  contact: {
    instagram: "https://instagram.com/pantaisurumanis",
    tiktok: "https://tiktok.com/@pantaisurumanis",
    whatsapp: "https://wa.me/6281234567890",
    address: "Desa Pasir, Kec. Ayah, Kabupaten Kebumen, Jawa Tengah 54473",
    mapCoordinates: "-7.771720239711861,109.43223449296858"
  },
  meta: {
    title: "Pantai Surumanis Camp - Berkemah dengan Pesona Laut Selatan",
    description: "Nikmati pengalaman camping premium di Pantai Surumanis, Kebumen. Paket lengkap dengan pemandangan laut selatan yang memukau."
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

export const generateWhatsAppUrl = (message?: string) => {
  const text = message || siteConfig.whatsapp.defaultMessage
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`
}

// ============================================
// PACKAGES DATA
// ============================================

export const packagesData: PackageItem[] = [
  {
    id: "pkg-1",
    name: "Paket Solo/Couple",
    price: 150000,
    max_persons: 2,
    is_popular: false,
    image_url: "https://down-id.img.susercontent.com/file/sg-11134201-7qvdc-lg975is06l8l23",
    features: [
      "Tenda dome 2 orang",
      "Matras & sleeping bag 2 set",
      "Akses kamar mandi & toilet bersih",
      "Area api unggun bersama",
      "Free parkir kendaraan"
    ]
  },
  {
    id: "pkg-2",
    name: "Paket Keluarga",
    price: 300000,
    max_persons: 5,
    is_popular: true,
    image_url: "https://down-id.img.susercontent.com/file/sg-11134201-7qvcw-lg975ifsogqo26",
    features: [
      "Tenda family 5 orang",
      "Matras & sleeping bag 5 set",
      "Akses kamar mandi & toilet bersih",
      "Area api unggun bersama",
      "Free parkir kendaraan",
      "Lampu tenda LED",
      "Tarp/flysheet pelindung"
    ]
  },
  {
    id: "pkg-3",
    name: "Paket Group",
    price: 500000,
    max_persons: 10,
    is_popular: false,
    image_url: "https://contents.mediadecathlon.com/p2579363/sq/k$918ce4452fffb87cabc41b77d2b80c12/tenda-camping-mh100-xxl-4-orang-quechua-8755590.jpg?f=480x480&format=auto",
    features: [
      "2 Tenda besar (masing-masing 5 orang)",
      "Matras & sleeping bag 10 set",
      "Akses kamar mandi & toilet bersih",
      "Area api unggun pribadi",
      "Free parkir kendaraan",
      "Lampu tenda LED",
      "Tarp/flysheet pelindung",
      "1 Set alat makan untuk 10 orang"
    ]
  },
]

// ============================================
// EQUIPMENT RENTALS DATA
// ============================================

export const equipmentData: EquipmentItem[] = [
  // Kategori: Masak
  {
    id: "eq-1",
    name: "Kompor Gas Portable",
    price: 25000,
    unit: "pcs",
    category: "masak",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Kompor+Gas"
  },
  {
    id: "eq-2",
    name: "Panci Set (3 ukuran)",
    price: 20000,
    unit: "set",
    category: "masak",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Panci+Set"
  },
  {
    id: "eq-3",
    name: "Alat Makan Lengkap",
    price: 15000,
    unit: "set",
    category: "masak",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Alat+Makan"
  },
  {
    id: "eq-4",
    name: "Cooler Box 25L",
    price: 30000,
    unit: "pcs",
    category: "masak",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Cooler+Box"
  },

  // Kategori: Tidur
  {
    id: "eq-5",
    name: "Kasur Angin Double",
    price: 30000,
    unit: "pcs",
    category: "tidur",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Kasur+Angin"
  },
  {
    id: "eq-6",
    name: "Bantal Premium",
    price: 10000,
    unit: "pcs",
    category: "tidur",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Bantal"
  },
  {
    id: "eq-7",
    name: "Sleeping Bag Extra",
    price: 25000,
    unit: "pcs",
    category: "tidur",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Sleeping+Bag"
  },

  // Kategori: Kelistrikan
  {
    id: "eq-8",
    name: "Lampu LED Camping",
    price: 15000,
    unit: "pcs",
    category: "kelistrikan",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Lampu+LED"
  },
  {
    id: "eq-9",
    name: "Power Bank 20000mAh",
    price: 20000,
    unit: "pcs",
    category: "kelistrikan",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Power+Bank"
  },
  {
    id: "eq-10",
    name: "Extension Cable 10m",
    price: 15000,
    unit: "pcs",
    category: "kelistrikan",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Extension"
  },

  // Kategori: Furnitur
  {
    id: "eq-11",
    name: "Meja Lipat Portable",
    price: 35000,
    unit: "pcs",
    category: "furnitur",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Meja+Lipat"
  },
  {
    id: "eq-12",
    name: "Kursi Lipat Santai",
    price: 20000,
    unit: "pcs",
    category: "furnitur",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Kursi+Lipat"
  },
  {
    id: "eq-13",
    name: "Hammock + Stand",
    price: 40000,
    unit: "set",
    category: "furnitur",
    image_url: "https://via.placeholder.com/400x300/94a3b8/475569?text=Hammock"
  }
]

// ============================================
// GALLERY DATA
// ============================================

export const galleryData: GalleryItem[] = [
  // Kategori: Pemandangan
  {
    id: "gal-1",
    title: "Sunrise Pantai Surumanis",
    category: "pemandangan",
    image_url: "https://awsimages.detik.net.id/community/media/visual/2024/06/21/pantai-surumanis-di-kebumen_169.jpeg?w=1200"
  },
  {
    id: "gal-2",
    title: "Golden Hour di Tepi Pantai",
    category: "pemandangan",
    image_url: "https://ik.imagekit.io/tvlk/blog/2025/06/Destinasi-Wisata-di-Kebumen-Pantai-Surumanis-Kebumen-Shutterstock.webp"
  },
  {
    id: "gal-3",
    title: "Panorama Laut Selatan",
    category: "pemandangan",
    image_url: "https://ik.imagekit.io/tvlk/blog/2025/06/Destinasi-Wisata-di-Kebumen-Pantai-Surumanis-Kebumen-Shutterstock.webp"
  },
  {
    id: "gal-4",
    title: "Bintang Malam di Surumanis",
    category: "pemandangan",
    image_url: "https://via.placeholder.com/800x600/1e293b/94a3b8?text=Bintang+Malam"
  },

  // Kategori: Aktivitas
  {
    id: "gal-5",
    title: "Camping Bersama Keluarga",
    category: "aktivitas",
    image_url: "https://metrojateng.com/wp-content/uploads/2025/09/Pantai-Surumanis.jpg"
  },
  {
    id: "gal-6",
    title: "Api Unggun & BBQ",
    category: "aktivitas",
    image_url: "https://www.jogjasuper.co.id/wp-content/uploads/2025/05/tiket-Pantai-Surumanis.webp"
  },
  {
    id: "gal-7",
    title: "Bermain di Tepi Pantai",
    category: "aktivitas",
    image_url: "https://via.placeholder.com/1200x900/94a3b8/475569?text=Bermain+Pantai"
  },
  {
    id: "gal-8",
    title: "Snorkeling & Berenang",
    category: "aktivitas",
    image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFniWYeUd3C1XMX9FiXqxWgGOk0Wjjfq46rw0fjWyMLV9L7cH7ROmH0XMXNS6iKYnqullUL2yZ9ZqPVEL0YoN6y8HMMxrxHwQbx9YEt5srOPaF6BzrQ9QjbS4r0PBMoYAMeGkuXPS8JID/s1600/31_4_surumanis.jpg"
  },

  // Kategori: Fasilitas
  {
    id: "gal-9",
    title: "Tenda Premium Setup",
    category: "fasilitas",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGehi0VR_dounmAY6OssDvzfMpIMw3jNYVQ3DaT9hVFmM4-o5oQzle8Sk&s=10"
  },
]

// ============================================
// LOCAL ATTRACTIONS DATA
// ============================================

export const attractionsData: AttractionItem[] = [
  {
    id: "attr-1",
    name: "Pantai Menganti",
    category: "pantai",
    description: "Pantai dengan pasir putih yang halus dan air laut jernih kebiruan. Terkenal dengan pemandangan sunset yang memukau. Jarak tempuh sekitar 15 menit dari Pantai Surumanis.",
    image_url: "https://via.placeholder.com/800x600/94a3b8/475569?text=Pantai+Menganti"
  },
  {
    id: "attr-2",
    name: "Goa Jatijajar",
    category: "goa",
    description: "Goa dengan stalaktit dan stalagmit yang indah, dilengkapi dengan pertunjukan wayang kulit legendaris Kamandaka. Sekitar 30 menit perjalanan dari Surumanis.",
    image_url: "https://via.placeholder.com/800x600/94a3b8/475569?text=Goa+Jatijajar"
  },
  {
    id: "attr-3",
    name: "Waduk Wadaslintang",
    category: "danau",
    description: "Waduk dengan pemandangan pegunungan yang sejuk dan tenang. Cocok untuk memancing atau berkeliling dengan perahu. Jarak tempuh sekitar 45 menit.",
    image_url: "https://via.placeholder.com/800x600/94a3b8/475569?text=Waduk"
  },
  {
    id: "attr-4",
    name: "Alun-alun Kebumen",
    category: "kuliner",
    description: "Pusat kota Kebumen dengan berbagai pilihan kuliner khas dan oleh-oleh. Nikmati sate ambal, soto kemiri, dan jajanan tradisional lainnya. Sekitar 35 menit perjalanan.",
    image_url: "https://via.placeholder.com/800x600/94a3b8/475569?text=Alun-alun"
  },
  {
    id: "attr-5",
    name: "Pantai Logending",
    category: "pantai",
    description: "Pantai dengan ombak yang cocok untuk peselancar pemula. Suasana masih alami dan belum terlalu ramai. Jarak sekitar 20 menit dari Surumanis.",
    image_url: "https://via.placeholder.com/800x600/94a3b8/475569?text=Pantai+Logending"
  },
  {
    id: "attr-6",
    name: "Benteng Van Der Wijck",
    category: "sejarah",
    description: "Benteng peninggalan Belanda yang megah dengan arsitektur klasik. Tempat bersejarah yang menarik untuk dikunjungi dan berfoto. Sekitar 40 menit perjalanan.",
    image_url: "https://via.placeholder.com/800x600/94a3b8/475569?text=Benteng"
  }
]