import React from "react";

export default function Menu({ name }: { name: string }) {
  return (
    <div className="flex justify-around">
      <h1 className=" font-tilt-warp font-bold text-sm text-gray-700 ">Logo</h1>
      <h1 className=" font-tilt-warp font-bold text-sm text-gray-700 ">
        Nos Produits
      </h1>
      <h1 className=" font-tilt-warp font-bold text-sm text-gray-700 ">
        Nous Contacter
      </h1>
      <h1 className=" font-tilt-warp font-bold text-sm text-gray-700 ">
        Bonjour {name}
      </h1>
    </div>
  );
}
