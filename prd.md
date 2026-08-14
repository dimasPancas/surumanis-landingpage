# Product Requirement Document (PRD) - Landing Page Pantai Surumanis Camp

## 1. Project Overview
A modern, high-converting, and responsive landing page for "Pantai Surumanis Camp & Wisata" located in Kebumen. The app showcases camping packages, equipment rentals, local attractions, and galleries. It includes an interactive budget calculator with a direct-to-WhatsApp booking system. 
It also contains a secure Admin Panel for the local management (Pokdarwis) to manage content dynamically.

## 2. Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Database & Backend:** Supabase (PostgreSQL, Auth)
- **Deployment Target:** Vercel

## 3. Milestones & Progress
- [x] **Sprint 1:** Admin Dashboard & Complete CRUD System (Done)
- [ ] **Sprint 2:** Public Landing Page & UI/UX Development (CURRENT FOCUS)

---

## 4. CURRENT FOCUS: Sprint 2 (Public Landing Page)

The AI must now focus heavily on building the User-Facing public pages in `src/app/page.tsx` and its components in `src/components/`. 
**CRITICAL:** Must STRICTLY follow the guidelines inside `design.md` to avoid "AI Slop" designs.

### Core Components to Build:
- **`Navbar.tsx`:** Transparent at top, becomes solid glassmorphism on scroll.
- **`Hero.tsx`:** Full-screen imagery of Pantai Surumanis, parallax effect, Fade-Up typography.
- **`PackagesSection.tsx`:** Fetch from `packages` table. Display elegant cards. Highlight `is_popular` package.
- **`RentalsSection.tsx`:** Fetch from `equipment_rentals`. Group by categories elegantly.
- **`CalculatorSection.tsx`:** Floating receipt style. Calculate Package + Equipments. Generate dynamic WhatsApp booking URL.
- **`AttractionsSection.tsx`:** Grid display of `local_attractions`.
- **`GallerySection.tsx`:** Masonry layout fetching from `galleries` table.
- **`Footer.tsx`:** Clean footer with local contact & Pokdarwis info.

---

## 5. Sprint 1 Reference (Admin Panel - ALREADY COMPLETED)
- Protected by `src/middleware.ts`.
- Login flow at `/admin/login`.
- Dashboard layout at `/admin/dashboard/layout.tsx`.
- CRUD pages for Packages, Rentals, Gallery, and Attractions inside `/admin/dashboard/*`.
- Please DO NOT modify Sprint 1 files unless absolutely necessary for Sprint 2 integrations.