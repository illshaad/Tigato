import React, { useState } from "react";
import products from "../../data/products.json";
import { motion } from "framer-motion";

const show = {
  opacity: 1,
  display: "block",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export default function Produits() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`flex ${
        !isVisible ? "h-screen" : null
      } flex-wrap mt-2 mb-2 gap-4 justify-center`}
    >
      {products.map((product, key) => (
        <div
          key={"test"}
          className="shadow-lg  h-50 w-80 p-1 bg-[#bacdb0] rounded-md"
        >
          <h2 className="mb-2 text-2xl font-bold text-center text-[#f3e8ee]">
            {product.type}
          </h2>

          <h2 className="mb-2 text-1xl font-bold text-center text-[#475B63]">
            {product.name}
          </h2>
          <h3 className="mb-2 text-sm font-no text-center text-[#f3e8ee]">
            {isVisible && product.description}
          </h3>
          <h3 className="mb-2 text-sm font-bold text-center text-[#f3e8ee]">
            {product.variante ? `Variante : ${product.variante}` : null}
          </h3>
          <h3 className="mb-2 text-sm font-bold text-center text-[#475B63]">
            Prix {product.price}€ /unité
          </h3>
          <div className="grid gap-2  grid-cols-2">
            <div
              className=" text-center rounded text-xs rounded-lg border-2 border-{#06a77d}"
              onClick={() => setIsVisible(!isVisible)}
            >
              Afficher la description
            </div>
            <div
              className=" text-center text-xs rounded rounded-lg border-2 border-{#06a77d}"
              onClick={() => setIsVisible(!isVisible)}
            >
              Afficher la photo
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
