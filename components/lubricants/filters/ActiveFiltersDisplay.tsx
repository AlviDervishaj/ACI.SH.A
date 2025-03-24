"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type CategoryOption = { id: string; name: string; description?: string };
type BrandOption = { id: string; name: string };

type ActiveFiltersDisplayProps = {
  priceRange: [number, number];
  selectedCategories: string[];
  selectedBrands: string[];
  inStock: boolean;
  categories: CategoryOption[];
  brands: BrandOption[];
  minPrice: number;
  maxPrice: number;
  onClearAll: () => void;
  onResetPrice: () => void;
  onToggleCategory: (categoryId: string) => void;
  onToggleBrand: (brandId: string) => void;
  onToggleInStock: (checked: boolean) => void;
};

export const ActiveFiltersDisplay = ({
  priceRange,
  selectedCategories,
  selectedBrands,
  inStock,
  categories,
  brands,
  minPrice,
  maxPrice,
  onClearAll,
  onResetPrice,
  onToggleCategory,
  onToggleBrand,
  onToggleInStock,
}: ActiveFiltersDisplayProps) => {
  // Calculate active filter count
  const activeFilterCount =
    (priceRange[0] > minPrice || priceRange[1] < maxPrice ? 1 : 0) +
    selectedCategories.length +
    selectedBrands.length +
    (inStock ? 1 : 0);

  if (activeFilterCount === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        initial={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="mb-6">
          <CardContent className="p-3">
            <h4 className="font-medium text-sm mb-2">Active Filters:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              <AnimatePresence>
                {priceRange[0] > minPrice || priceRange[1] < maxPrice ? (
                  <motion.div
                    key="price-range"
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <Badge
                      className="flex gap-1 items-center"
                      variant="outline"
                    >
                      €{priceRange[0]} - €{priceRange[1]}
                      <button type="button" onClick={onResetPrice}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  </motion.div>
                ) : null}

                {selectedCategories.map((catId) => {
                  const category = categories.find((c) => c.id === catId);

                  return category ? (
                    <motion.div
                      key={`cat-${catId}`}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      <Badge
                        className="flex gap-1 items-center"
                        variant="outline"
                      >
                        {category.name}
                        <button
                          type="button"
                          onClick={() => onToggleCategory(catId)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    </motion.div>
                  ) : null;
                })}

                {selectedBrands.map((brandId) => {
                  const brand = brands.find((b) => b.id === brandId);

                  return brand ? (
                    <motion.div
                      key={`brand-${brandId}`}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      <Badge
                        className="flex gap-1 items-center"
                        variant="outline"
                      >
                        {brand.name}
                        <button
                          type="button"
                          onClick={() => onToggleBrand(brandId)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    </motion.div>
                  ) : null;
                })}

                {inStock && (
                  <motion.div
                    key="in-stock"
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <Badge
                      className="flex gap-1 items-center"
                      variant="outline"
                    >
                      In Stock
                      <button
                        type="button"
                        onClick={() => onToggleInStock(false)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="mt-2"
                size="sm"
                type="button"
                variant="ghost"
                onClick={onClearAll}
              >
                Clear All
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};
