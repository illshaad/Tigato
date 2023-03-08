import React from "react";
import { useData } from "../context/context";
export default function InputProduct({
  type,
  name,
  price,
  quantity,
  id,
}: {
  type: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}) {
  const { setInformation, information } = useData();

  const handleChange = (event) => {
    quantity = parseInt(event.target.value, 10);
  };
  const createNewAarray = (products) => {
    setInformation((prev) => {
      const index = prev.findIndex((f) => f.products.id === products.id); // Get index element
      if (index !== -1) {
        prev[index].quantity = quantity; // change value quantity prevSatate
        return [...prev]; // return new state
      } else {
        return [...prev, { products, quantity }]; // return old state any modificated
      }
    });
  };

  return (
    <div className="flex gap-2 justify-center mt-2">
      <input
        onChange={(event) => handleChange(event)}
        type="number"
        min={0}
        placeholder="0"
        className="border rounded-lg p-2 w-14 mt-2"
      />
      <button
        onClick={() => createNewAarray({ type, name, price, id })}
        type="submit"
        className="mt-2 pl-4 pr-4 grid text  gray-900 font-tilt-warp place-items-center rounded rounded-lg border-2 border-{#06a77d}"
      >
        Ajouter
      </button>
    </div>
  );
}
