import Image from "next/image";

import Header from "@/components/ui/common/header";
import ProductList from "@/components/ui/common/product-list";
import { db } from "@/db";

const Home = async () => {
  const products = await db.query.productsTable.findMany({
    with: {
      variants: true,
    },
  });
  return (
    <div>
      <Header />
      <div className="space-y-6">
       <div className="px-5">
       <Image
          src="/banner-1.svg"
          alt="Leve uma vida com estilo"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full"
        />
       </div>
        <ProductList products={products} title="Mais vendidos" />
        <div className="px-5">
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
    </div>
  );
};

export default Home;
