"use client";

import { motion } from "framer-motion";

import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

type PriceRangeFilterProps = {
  minPrice: number;
  maxPrice: number;
  value: [number, number];
  onValueChange: (value: number[]) => void;
};

export const PriceRangeFilter = ({
  minPrice,
  maxPrice,
  value,
  onValueChange,
}: PriceRangeFilterProps) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="font-medium text-sm">Price Range</h3>
      <div className="px-2">
        <Slider
          className="mb-6"
          max={maxPrice}
          min={minPrice}
          step={1}
          value={value}
          onValueChange={onValueChange}
        />
        <motion.div
          animate={{ opacity: 1 }}
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            key={`min-${value[0]}`}
            animate={{ scale: 1 }}
            className="font-medium"
            initial={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            €{value[0]}
          </motion.div>
          <motion.div
            key={`max-${value[1]}`}
            animate={{ scale: 1 }}
            className="font-medium"
            initial={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            €{value[1]}
          </motion.div>
        </motion.div>
      </div>
      <Separator />
    </motion.div>
  );
};
