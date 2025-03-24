// Types for our filter options
export type PriceRange = [number, number];
export type CategoryOption = { id: string; name: string; description?: string };
export type BrandOption = { id: string; name: string };
export type FilterState = {
  priceRange: PriceRange;
  categories: string[];
  brands: string[];
  rating: number | null;
  inStock: boolean;
};

// Mock data (to be replaced with API data)
export const CATEGORIES: CategoryOption[] = [
  {
    id: "engine_oil",
    name: "Engine Oil",
    description: "Oils for vehicle engines",
  },
  { id: "transmission_fluid", name: "Transmission Fluid" },
  { id: "brake_fluid", name: "Brake Fluid" },
  { id: "hydraulic_oil", name: "Hydraulic Oil" },
  { id: "industrial_oil", name: "Industrial Oil" },
  { id: "specialty_lubricants", name: "Specialty Lubricants" },
];

export const BRANDS: BrandOption[] = [
  { id: "galp", name: "Galp" },
  { id: "shell", name: "Shell" },
  { id: "mobil", name: "Mobil" },
  { id: "castrol", name: "Castrol" },
  { id: "total", name: "Total" },
];

// Min and max price can be adjusted based on your products
export const MIN_PRICE = 0;
export const MAX_PRICE = 100;
