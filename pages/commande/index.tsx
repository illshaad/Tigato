import React from "react";
import { useRouter } from "next/router";
import products from "../../data/products.json";
import Menu from "../../composant/menu";
import Produits from "../../composant/produits";
import Presentation from "../../composant/presentation";

export default function Commande() {
  const router = useRouter();
  const { name, phone }: { name: string; phone: string } = router.query;
  const sucrer = products.filter((f) => f.type === "Sucrée");
  const saler = products.filter((f) => f.type === "Salé");
  console.log(sucrer, "?????");
  return (
    <div>
      <Menu name={name} />
      <Presentation />
      <Produits products={sucrer} titre="NOS SPECIALITER SUCRER" />
      <Produits products={saler} titre="NOS SPECIALITER SALER" />
    </div>
  );
}
