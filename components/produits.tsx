import React, { useState } from "react";
import { useData } from "../context/context";
import InputProduct from "./inputProduct";
import { Products } from "../type";

export default function Produits({
  products,
  titre,
}: {
  products: Products;
  titre: string;
}) {
  const { information } = useData();

  return (
    <div>
      <div className=" mt-6 mb-6 text-center font-bold text-xs border-2 border-cyan-900 rounded-full w-60 font-tilt-warp shadow-xl bg-cyan-900 text-white">
        {titre}
      </div>
      <div className="flex gap-4">
        {products?.map(
          ({ type, name, price, quantity, id }: Products, key: number) => (
            <div
              key={key}
              className="shadow-lg p-1 h-26 border-cyan-900 border-2 rounded-bl-lg rounded-tr-lg "
            >
              <div className="shadow-lg bg-cyan-900 text-white w-6 h-6 text-center align-center text-sm rounded rounded-full">
                {information.find((f) => f.products.id === id)?.quantity}
              </div>

              <div className="grid grid-cols-1 divide-y">
                <h2 className="p-2 text-center font-tilt-warp font-bold text-1xl text-gray-700">
                  Type {type}
                </h2>
                <h2 className="text-1xl font-bold font-tilt-warp text-center border-cyan-900">
                  Nom {name}
                </h2>
                <h3 className="text-sm font-bold  font-tilt-warp text-center border-cyan-900">
                  Prix {price}€ /unité
                </h3>
              </div>
              <InputProduct
                type={type}
                name={name}
                price={price}
                id={id}
                quantity={quantity}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
