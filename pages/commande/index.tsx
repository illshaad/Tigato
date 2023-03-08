import React from "react";
import { useRouter } from "next/router";
import products from "@/data/products.json";
import Menu from "@/components/menu";
import Produits from "@/components/produits";
import Presentation from "@/components/presentation";
import Reservation from "@/components/reservation";

export default function Commande() {
  const router = useRouter();
  const { name, phone }: { name: string; phone: string } = router.query;
  const sucrer = products.filter((f) => f.type === "Sucrée");
  const saler = products.filter((f) => f.type === "Salé");

  return (
    <div>
      <Menu name={name} />
      <Presentation />
      <Produits products={sucrer} titre="NOS SPECIALITES SUCRER" />
      <Produits products={saler} titre="NOS SPECIALITES SALER" />
      <div className="pt-6 grid place-items-center">
        <Reservation router={router} />
      </div>
    </div>
  );
}
