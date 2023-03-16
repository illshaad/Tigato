import React from "react";
export default function Presentation({
  titre,
  sousTitle,
}: {
  titre: string;
  sousTitle: string;
}) {
  return (
    <div>
      <h1 className="text-4xl mt-16 font-bold font-tilt-warp text-cyan-900">
        {titre}
      </h1>
      <p className=" text-1xl  mt-2 pb-6 w-1/2 font-bold  font-tilt-warp text-gray-700 ">
        {sousTitle}
      </p>
    </div>
  );
}
