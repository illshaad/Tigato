import React from "react";
import { useRouter } from "next/router";
import products from "../../data/products.json";
import Menu from "../../components/menu";
import Produits from "../../components/produits";
import Presentation from "../../components/presentation";

export default function Commande() {
  const router = useRouter();
  const { name, phone }: { name: string; phone: string } = router.query;
  const sucrer = products.filter((f) => f.type === "Sucrée");
  const saler = products.filter((f) => f.type === "Salé");

  return (
    <div>
      <Menu name={name} />
      <Presentation />
      <Produits products={sucrer} titre="NOS SPECIALITER SUCRER" />
      <Produits products={saler} titre="NOS SPECIALITER SALER" />
    </div>
  );
}
