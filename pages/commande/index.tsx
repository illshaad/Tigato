import React from "react";
import { useRouter } from "next/router";
import products from "@/data/products.json";
import Menu from "@/components/menu";
import Produits from "@/components/produits";
import { useData } from "@/context/context";
import Presentation from "@/components/presentation";
import Reservation from "@/components/reservation";
import Image from "next/image";
import Rappel from "@/components/rappel";

export default function Commande() {
  const { commandeForReservation, information } = useData();
  const router = useRouter();
  const { name, phone }: { name: string; phone: string } = router.query;
  const sucrer = products.filter((f) => f.type === "Sucrée");
  const saler = products.filter((f) => f.type === "Salé");

  return (
    <div className="flex">
      <div className="p-4 ">
        <Menu name={name} />
        <Presentation />
        <Produits products={sucrer} titre="NOS SPECIALITES SUCRER" />
        <Produits products={saler} titre="NOS SPECIALITES SALER" />
        <Rappel />
        {commandeForReservation >= 20 && (
          <div className="flex justify-center my-8 ">
            <Reservation
              phone={phone}
              name={name}
              router={router}
              information={information}
            />
          </div>
        )}
      </div>
      <Image src="/apples.jpg" alt="photo" width={600} height={600} />
    </div>
  );
}
