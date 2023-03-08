import React, { useState } from "react";
import { useRouter } from "next/router";
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

  const { information } = useData();

  const router = useRouter();

  const redirection = (produit: string) => {
    return router.push({
      pathname: `/commande/detailProduct`,
      query: produit,
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data); //RESERVATON
  };

  return (
    <div>
      <div className="p-10 font-bold text-4xl text-center font-tilt-warp text-cyan-900">
        {titre}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center gap-4"
      >
        {products?.map(({ type, name, price, redirect, quantity, id }, key) => (
          <div
            key={"test"}
            className="shadow-lg h-80 w-60 p-1 border-cyan-900 border-2 rounded-bl-lg rounded-tr-lg "
          >
            <div className=" shadow-lg bg-cyan-600 text-white w-6 h-6 text-center align-center text-sm rounded rounded-full">
              {information.find((f) => f.products.id === id)?.quantity}
            </div>

            <div className="grid grid-cols-1 divide-y">
              <h2 className="p-6 text-center font-tilt-warp font-bold text-1xl text-gray-700">
                Type {type}
              </h2>
              <h2 className="mb-2 text-1xl font-bold font-tilt-warp text-center border-cyan-900">
                Nom {name}
              </h2>
              <h3 className="mb-2 text-sm font-bold  font-tilt-warp text-center border-cyan-900">
                Prix {price}€ /unité
              </h3>
            </div>
            <div
              className=" text-center mt-4 p-2 font-tilt-warp rounded  rounded-lg border-2 border-cyan-900"
              onClick={() => redirection(redirect)}
            >
              Vers la description
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
