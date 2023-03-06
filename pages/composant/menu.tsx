import React from "react";
import Produits from "./produits";

export default function Menu({ name }: { name: string }) {
  return (
    <div className="flex">
      <div className="p-6 flex-none">
        <h1 className="italic font-normal text-3xl  text-[#f3e8ee]">
          Nos Produits
        </h1>
        <h1 className="italic font-normal text-3xl  text-[#f3e8ee]">
          Nous Contacter
        </h1>
        <h1 className="italic font-normal text-3xl  text-[#f3e8ee]">
          Bonjour {name}
        </h1>
      </div>

      <div className="flex flex-auto bg-[#475B63] items-center justify-center">
        <Produits />
      </div>
    </div>
  );
}
