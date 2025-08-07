import Image from "next/image";

import CategorySelect from "@/components/ui/common/category-select";
import Header from "@/components/ui/common/header";
import ProductList from "@/components/ui/common/product-list";
import { db } from "@/db";

const Home = async () => {
  const products = await db.query.productsTable.findMany({
    with: {
      variants: true,
    },
  });

  const categories = await db.query.categoryTable.findMany({});
  return (
    <div>
      <Header />
      <div className="space-y-6">
        <Image
          src="/banner-1.svg"
          alt="Leve uma vida com estilo"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full"
        />

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelect categories={categories} />
        </div>

        <Image
          src="/banner-2.png"
          alt="Leve uma vida com estilo"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Home;
