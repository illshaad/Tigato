import { useRouter } from "next/router";
import React from "react";
import products from "@/data/products.json";
export default function DetailProduct() {
  const router = useRouter();
  const produit = router.query;
  const getNameProduit = Object.keys(produit)[0];
  const getInformationProduct = products.filter(
    (f) => f.redirect === getNameProduit
  );

  return (
    <main className="flex p-20 shadow-xl justify-center gap-40 h-80 w-3/4 bg-[#fffdf7] border-2 rounded-lg  ">
      <div className="p-20">
        <h1 className="text-1xl bg-red-600 font-bold font-tilt-warp text-cyan-900">
          Photo
        </h1>
      </div>
      <div>
        <h1 className="text-1xl font-bold font-tilt-warp text-cyan-900">
          {getInformationProduct[0]?.description}
        </h1>
      </div>
    </main>
  );
}
