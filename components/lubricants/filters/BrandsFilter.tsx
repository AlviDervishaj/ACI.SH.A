"use client";

import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type BrandOption = { id: string; name: string };

type BrandsFilterProps = {
  brands: BrandOption[];
  selectedBrands: string[];
  onToggleBrand: (brandId: string) => void;
};

export const BrandsFilter = ({
  brands,
  selectedBrands,
  onToggleBrand,
}: BrandsFilterProps) => {
  return (
    <AccordionItem value="brands">
      <AccordionTrigger className="font-medium text-sm">
        Brands
      </AccordionTrigger>
      <AccordionContent>
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {brands.map((brand, index) => (
            <motion.div 
              key={brand.id} 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 300,
                damping: 24
              }}
            >
              <Checkbox 
                id={`brand-${brand.id}`} 
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={() => onToggleBrand(brand.id)}
              />
              <Label 
                htmlFor={`brand-${brand.id}`}
                className="cursor-pointer text-sm"
              >
                {brand.name}
              </Label>
            </motion.div>
          ))}
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
}; 