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
          animate={{ opacity: 1 }}
          className="space-y-4"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* In Stock Filter */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: 5 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Checkbox
              checked={inStock}
              id="in-stock"
              onCheckedChange={(checked) => onToggleInStock(checked as boolean)}
            />
            <Label className="cursor-pointer text-sm" htmlFor="in-stock">
              In Stock Only
            </Label>
          </motion.div>
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
};
