import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const marcas = [
  {
    icon: "/icons_nike.svg",
    title: "Nike",
  },
  {
    icon: "/icons_adidas.svg",
    title: "Adidas",
  },
  {
    icon: "/icons_puma.svg",
    title: "Puma",
  },
  {
    icon: "/icons_newbalance.svg",
    title: "New Balance",
  },
  {
    icon: "/icons-converse.svg",
    title: "Converse",
  },
  {
    icon: "/icons-RalphLauren.svg",
    title: "Polo",
  },
  {
    icon: "/icons-Zara.svg",
    title: "Zara",
  },
];

const PartnerBrands = () => {
  return (
    <>
   <div className="px-5">
   <h3 className="font-semibold">Marcas Parceiras</h3>
   </div>
      <div className="flex gap-2 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {marcas.map((partner, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <Card className="flex h-[90px] w-[80px] min-w-[90px] md:w-[170.57px] md:h-[80px] items-center justify-center rounded-3xl">
              <CardContent>
                <Image
                  src={partner.icon}
                  alt={partner.title}
                  width={30}
                  height={28}
                  
                />
              </CardContent>
            </Card>
            <p className="mt-2 text-xs font-medium">{partner.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PartnerBrands;
