## 3. Core Features & UX Flow

### A. Navigation & Hero Section
- Clean Navbar with logo, quick links (Paket, Sewa Alat, Wisata, Galeri), and CTA "Pesan Sekarang".
- Hero section with high-quality background imagery of Pantai Surumanis, headline, tagline, and entrance animations using Framer Motion.

### B. Camping Packages (`/components/PackagesSection.tsx`)
- Display dynamic packages fetched from Supabase `packages` table.
- Highlight "Paling Laris" package with a custom badge/border.
- Show package name, price, max persons, and feature checklists.

### C. Equipment Rental Add-ons (`/components/RentalsSection.tsx`)
- Display custom gear rentals fetched from Supabase `equipment_rentals` table.
- Grouped/filtered by categories (masak, tidur, kelistrikan, furnitur).

### D. Interactive Camp Budget Calculator (`/components/CalculatorSection.tsx`)
- Allows user to select 1 base camping package.
- Allows user to select additional equipment with quantities (+ / -).
- Real-time total price calculation with smooth Framer Motion number transitions.
- "Pesan via WhatsApp" button: Generates a pre-filled URL to WhatsApp containing:
  - Selected Package
  - Additional Items & Quantities
  - Calculated Total Price
  - Booking Template Text

### E. Local Attractions & Guide (`/components/AttractionsSection.tsx`)
- Grid cards showing nearby spots (Bukit Surumanis, Kuliner Lokal, Spot Sunset) from `local_attractions` table.

### F. Interactive Gallery (`/components/GallerySection.tsx`)
- Grid display of photo documentations from `galleries` table with filter tabs.

## 4. UI/UX Design System Guidelines
- **Color Palette:**
  - Primary: Coastal Emerald / Teal (`emerald-600`, `teal-500`)
  - Accent: Warm Sunset Orange (`amber-500`, `orange-500`)
  - Background: Soft Slate/Zinc (`slate-50`, `zinc-900` for dark accents)
- **Typography:** Modern, clean sans-serif (Inter / Geist).
- **Animations:** Subtle scroll-triggered fade-ins and scale-ups using Framer Motion.

## 5. File & Folder Structure
```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PackagesSection.tsx
│   ├── RentalsSection.tsx
│   ├── CalculatorSection.tsx
│   ├── AttractionsSection.tsx
│   ├── GallerySection.tsx
│   └── Footer.tsx
├── lib/
│   └── supabase.ts
└── types/
    └── database.ts