import Image from "next/image";
import Link from "next/link";

import { productsTable, productVariantsTable } from "@/db/schema";
import { formatCentsToBrl } from "@/helpers/money";

interface ProductListProps {
  product: typeof productsTable.$inferSelect & {
    variants: (typeof productVariantsTable.$inferSelect)[];
  };
}

const ProductItem = ({ product }: ProductListProps) => {
  const firstVariant = product.variants[0];
  return (
    <Link href="/" className="flex flex-col gap-4">
      <Image
        src={firstVariant.imageUrl}
        width={200}
        height={200}
        alt={firstVariant.name}
        className="rounded-3xl"
      />
      <div className="flex max-w-[200px] flex-col gap-1">
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate text-xs font-medium">
          {product.description}
        </p>
        <p className="truncate text-sm font-semibold">
          {formatCentsToBrl(firstVariant.priceIncents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
