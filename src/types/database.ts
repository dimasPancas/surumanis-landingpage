export interface PackageItem {
  id: string;
  name: string;
  price: number;
  max_persons: number;
  features: string[];
  is_popular: boolean;
  image_url?: string;
  created_at?: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  image_url?: string;
  created_at?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image_url: string;
  created_at?: string;
}

export interface AttractionItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image_url?: string;
  created_at?: string;
}