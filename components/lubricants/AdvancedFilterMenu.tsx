"use client";

import type { FilterState } from "./filters/constants";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Import our filter components
import { PriceRangeFilter } from "./filters/PriceRangeFilter";
import { CategoriesFilter } from "./filters/CategoriesFilter";
import { BrandsFilter } from "./filters/BrandsFilter";
import { AdditionalFilters } from "./filters/AdditionalFilters";
import { ActiveFiltersDisplay } from "./filters/ActiveFiltersDisplay";
import { CATEGORIES, BRANDS, MIN_PRICE, MAX_PRICE } from "./filters/constants";

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const contentVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 30,
      delay: 0.1,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const AdvancedFilterMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openSheet, setOpenSheet] = useState(false);

  // Initialize filter state from URL params
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [MIN_PRICE, MAX_PRICE],
    categories: [],
    brands: [],
    rating: null,
    inStock: false,
  });

  // Active filters count for the badge
  const activeFilterCount =
    (filters.priceRange[0] > MIN_PRICE || filters.priceRange[1] < MAX_PRICE
      ? 1
      : 0) +
    filters.categories.length +
    filters.brands.length +
    (filters.rating ? 1 : 0) +
    (filters.inStock ? 1 : 0);

  // Load filters from URL when component mounts
  useEffect(() => {
    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");
    const categories = searchParams.get("categories");
    const brands = searchParams.get("brands");
    const inStock = searchParams.get("in_stock");

    // Initialize with default values with proper typing
    const newFilters: FilterState = {
      priceRange: [MIN_PRICE, MAX_PRICE],
      categories: [],
      brands: [],
      rating: null,
      inStock: false,
    };

    if (minPrice && maxPrice) {
      newFilters.priceRange = [
        Number.parseInt(minPrice, 10),
        Number.parseInt(maxPrice, 10),
      ];
    }

    if (categories) {
      newFilters.categories = categories.split(",");
    }

    if (brands) {
      newFilters.brands = brands.split(",");
    }

    if (inStock) {
      newFilters.inStock = inStock === "true";
    }

    setFilters(newFilters);
  }, [searchParams]);

  // Apply filters to URL
  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Only add price range if it's different from default
    if (filters.priceRange[0] > MIN_PRICE) {
      params.set("min_price", filters.priceRange[0].toString());
    } else {
      params.delete("min_price");
    }

    if (filters.priceRange[1] < MAX_PRICE) {
      params.set("max_price", filters.priceRange[1].toString());
    } else {
      params.delete("max_price");
    }

    // Add other filters
    if (filters.categories.length > 0) {
      params.set("categories", filters.categories.join(","));
    } else {
      params.delete("categories");
    }

    if (filters.brands.length > 0) {
      params.set("brands", filters.brands.join(","));
    } else {
      params.delete("brands");
    }

    if (filters.inStock) {
      params.set("in_stock", "true");
    } else {
      params.delete("in_stock");
    }

    // Navigate with the new filters
    router.push(`${pathname}?${params.toString()}`);
    setOpenSheet(false);
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      priceRange: [MIN_PRICE, MAX_PRICE],
      categories: [],
      brands: [],
      rating: null,
      inStock: false,
    });
  };

  // Handle category toggle
  const toggleCategory = (categoryId: string) => {
    setFilters((prev) => {
      const categories = prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId];

      return { ...prev, categories };
    });
  };

  // Handle brand toggle
  const toggleBrand = (brandId: string) => {
    setFilters((prev) => {
      const brands = prev.brands.includes(brandId)
        ? prev.brands.filter((id) => id !== brandId)
        : [...prev.brands, brandId];

      return { ...prev, brands };
    });
  };

  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({ ...prev, priceRange: [value[0], value[1]] }));
  };

  // Reset price to defaults
  const resetPrice = () => {
    setFilters((prev) => ({ ...prev, priceRange: [MIN_PRICE, MAX_PRICE] }));
  };

  // Handle in stock toggle
  const toggleInStock = (checked: boolean) => {
    setFilters((prev) => ({ ...prev, inStock: checked }));
  };

  return (
    <div>
      {/* Trigger Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          className="gap-2"
          variant="outline"
          onClick={() => setOpenSheet(true)}
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
          <AnimatePresence mode="wait">
            {activeFilterCount > 0 && (
              <motion.div
                key="badge"
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                initial={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                <Badge className="ml-1 bg-orange-500 hover:bg-orange-600">
                  {activeFilterCount}
                </Badge>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Custom Animated Sheet */}
      <AnimatePresence>
        {openSheet && (
          <>
            {/* Overlay */}
            <motion.div
              animate="visible"
              className="fixed inset-0 z-50 bg-black/80"
              exit="exit"
              initial="hidden"
              variants={overlayVariants}
              onClick={() => setOpenSheet(false)}
            />

            {/* Drawer */}
            <motion.div
              animate="visible"
              className="fixed inset-y-0 right-0 z-50 w-[300px] sm:w-[450px] bg-white dark:bg-neutral-950 shadow-lg p-6 overflow-y-auto border-l border-slate-200 dark:border-slate-700 flex flex-col"
              exit="exit"
              initial="hidden"
              variants={contentVariants}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-lg font-semibold">Filter Products</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Refine your search with multiple filter options
                  </p>
                </motion.div>

                <motion.button
                  className="h-8 w-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpenSheet(false)}
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Content */}
              <motion.div
                animate={{ opacity: 1 }}
                className="py-6 space-y-6 flex-grow"
                initial={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                {/* Price Range Filter */}
                <PriceRangeFilter
                  maxPrice={MAX_PRICE}
                  minPrice={MIN_PRICE}
                  value={filters.priceRange}
                  onValueChange={handlePriceChange}
                />

                {/* Categories and Brands Filters */}
                <Accordion className="w-full" type="multiple">
                  <CategoriesFilter
                    categories={CATEGORIES}
                    selectedCategories={filters.categories}
                    onToggleCategory={toggleCategory}
                  />

                  <BrandsFilter
                    brands={BRANDS}
                    selectedBrands={filters.brands}
                    onToggleBrand={toggleBrand}
                  />

                  <AdditionalFilters
                    inStock={filters.inStock}
                    onToggleInStock={toggleInStock}
                  />
                </Accordion>
              </motion.div>

              {/* Active Filters */}
              <ActiveFiltersDisplay
                brands={BRANDS}
                categories={CATEGORIES}
                inStock={filters.inStock}
                maxPrice={MAX_PRICE}
                minPrice={MIN_PRICE}
                priceRange={filters.priceRange}
                selectedBrands={filters.brands}
                selectedCategories={filters.categories}
                onClearAll={resetFilters}
                onResetPrice={resetPrice}
                onToggleBrand={toggleBrand}
                onToggleCategory={toggleCategory}
                onToggleInStock={toggleInStock}
              />

              {/* Footer */}
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-auto pt-4"
                initial={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex space-x-2 w-full">
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="w-full"
                      type="button"
                      variant="outline"
                      onClick={resetFilters}
                    >
                      Reset
                    </Button>
                  </motion.div>
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      type="button"
                      onClick={applyFilters}
                    >
                      Apply Filters
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
