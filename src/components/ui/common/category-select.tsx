import { categoryTable } from "@/db/schema";

import { Button } from "../button";

interface CategorySelectProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelect = ({ categories }: CategorySelectProps) => {
  return (
    <div className="rounded-3xl bg-[#F4EFFF] p-6">
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Button key={category.id} variant="ghost" className="rounded-full bg-white font-semibold text-xs">
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
