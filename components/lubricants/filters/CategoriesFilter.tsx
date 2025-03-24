"use client";

import { motion } from "framer-motion";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type CategoryOption = { id: string; name: string; description?: string };

type CategoriesFilterProps = {
  categories: CategoryOption[];
  selectedCategories: string[];
  onToggleCategory: (categoryId: string) => void;
};

export const CategoriesFilter = ({
  categories,
  selectedCategories,
  onToggleCategory,
}: CategoriesFilterProps) => {
  return (
    <AccordionItem value="categories">
      <AccordionTrigger className="font-medium text-sm">
        Product Categories
      </AccordionTrigger>
      <AccordionContent>
        <motion.div
          animate={{ opacity: 1 }}
          className="space-y-2"
          initial={{ opacity: 0 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
            >
              <Checkbox
                checked={selectedCategories.includes(category.id)}
                id={`category-${category.id}`}
                onCheckedChange={() => onToggleCategory(category.id)}
              />
              <Label
                className="cursor-pointer text-sm"
                htmlFor={`category-${category.id}`}
              >
                {category.name}
              </Label>
            </motion.div>
          ))}
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
};
