import React from "react";

import { useRouter } from "next/router";
import InputProduct from "./inputProduct";
import { useForm } from "react-hook-form";

export default function Produits({ products, titre }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const redirection = (produit: string) => {
    return router.push({
      pathname: `/commande/detailProduct`,
      query: produit,
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
        {products?.map(({ type, name, price, redirect }, key) => (
          <div
            key={"test"}
            className="shadow-lg  h-80 w-60 p-1 border-cyan-900 border-2 rounded-bl-lg rounded-tr-lg "
          >
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
            <div className="">
              <InputProduct name={redirect} register={register} />
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
