import React from "react";
import Image from "next/image";
export default function Presentation() {
  return (
    <div className="p-10 flex justify-around">
      <div className="flex-initial w-64">
        <h1 className="text-5xl font-bold font-tilt-warp text-cyan-900">
          Spécialité traiteur Mauricienne
        </h1>

        <p className="text-gray-700 mt-8 font-bold text-1xl font-tilt-warp pb-6">
          La cuisine mauricienne est une fusion de différentes cultures,
          notamment indienne, africaine, chinoise, créole et française.
        </p>
      </div>
      <div className="flex-initial w-64">
        <Image
          className="rounded-xl"
          src="/island.png"
          width={500}
          height={500}
          alt="mauritius"
        />
      </div>
    </div>
  );
}
