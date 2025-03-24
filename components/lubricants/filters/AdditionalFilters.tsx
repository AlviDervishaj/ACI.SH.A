"use client";

import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type AdditionalFiltersProps = {
  inStock: boolean;
  onToggleInStock: (checked: boolean) => void;
};

export const AdditionalFilters = ({
  inStock,
  onToggleInStock,
}: AdditionalFiltersProps) => {
  return (
    <AccordionItem value="additional">
      <AccordionTrigger className="font-medium text-sm">
        Additional Filters
      </AccordionTrigger>
      <AccordionContent>
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* In Stock Filter */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Checkbox 
              id="in-stock" 
              checked={inStock}
              onCheckedChange={(checked) => 
                onToggleInStock(checked as boolean)
              }
            />
            <Label 
              htmlFor="in-stock"
              className="cursor-pointer text-sm"
            >
              In Stock Only
            </Label>
          </motion.div>
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
}; 