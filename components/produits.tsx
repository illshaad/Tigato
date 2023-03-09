import React, { useState } from "react";
import { useData } from "../context/context";
import { useForm, SubmitHandler } from "react-hook-form";
import InputProduct from "./inputProduct";

type Inputs = {
  name: string;
};

export default function Produits({
  products,
  titre,
}: {
  products: {
    type: string;
    name: string;
    price: number;
    variante?: string;
    redirect: string;
  };
  titre: string;
}) {
  const { handleSubmit } = useForm<Inputs>();

  const { information, commandeForReservation } = useData();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data); //RESERVATON
  };

  return (
    <div>
      <div className="p-2 my-8 text-center font-bold text-1xl border-2 border-cyan-900 rounded-full w-80 font-tilt-warp shadow-xl bg-cyan-900 text-white">
        {titre}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
        {products?.map(({ type, name, price, quantity, id }, key) => (
          <div
            key={"test"}
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
        ))}
      </form>
    </div>
  );
}
