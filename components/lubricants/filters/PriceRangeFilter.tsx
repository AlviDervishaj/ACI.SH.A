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
      className="space-y-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="font-medium text-sm">Price Range</h3>
      <div className="px-2">
        <Slider
          value={value}
          max={maxPrice}
          min={minPrice}
          step={1}
          onValueChange={onValueChange}
          className="mb-6"
        />
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="font-medium"
            key={`min-${value[0]}`} 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            €{value[0]}
          </motion.div>
          <motion.div 
            className="font-medium"
            key={`max-${value[1]}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
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