```markdown
# Database Schema & TypeScript Interfaces

## 1. Supabase Tables Reference

### Table: `packages`
- `id` (uuid, primary key)
- `name` (varchar)
- `price` (int)
- `max_persons` (int)
- `features` (text array)
- `is_popular` (boolean)
- `image_url` (text, optional)
- `created_at` (timestamptz)

### Table: `equipment_rentals`
- `id` (uuid, primary key)
- `name` (varchar)
- `price` (int)
- `unit` (varchar, e.g. 'pcs', 'set')
- `category` (varchar, e.g. 'masak', 'tidur')
- `image_url` (text, optional)
- `created_at` (timestamptz)

### Table: `galleries`
- `id` (uuid, primary key)
- `title` (varchar)
- `category` (varchar)
- `image_url` (text)
- `created_at` (timestamptz)

### Table: `local_attractions`
- `id` (uuid, primary key)
- `name` (varchar)
- `category` (varchar)
- `description` (text)
- `image_url` (text, optional)
- `created_at` (timestamptz)

## 2. TypeScript Interfaces (`src/types/database.ts`)

```typescript
export interface PackageItem {
  id: string;
  name: string;
  price: number;
  max_persons: number;
  features: string[];
  is_popular: boolean;
  image_url?: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  image_url?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image_url: string;
}

export interface AttractionItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image_url?: string;
}