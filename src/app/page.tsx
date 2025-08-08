import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelect from "@/components/ui/common/category-select";
import Footer from "@/components/ui/common/footer";
import Header from "@/components/ui/common/header";
import ProductList from "@/components/ui/common/product-list";
import { db } from "@/db";
import { productsTable } from "@/db/schema";

import PartnerBrands from "./_components/partner-brands";

const Home = async () => {
  const products = await db.query.productsTable.findMany({
    with: {
      variants: true,
    },
  });

  const newlyCreatedProducts = await db.query.productsTable.findMany({
    orderBy: [desc(productsTable.createdAt)],
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
          className="w-full md:hidden"
        />
       <div className="px-5 hidden md:block">
         <Image
          src="/banner-desktop.svg"
          alt="Leve uma vida com estilo"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full"
        />

       </div>
        <PartnerBrands />

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelect categories={categories} />
        </div>

        <Image
          src="/banner-2.png"
          alt="Seja automáticco"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full"
        />

        <ProductList products={newlyCreatedProducts} title="Novos Produtos" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
