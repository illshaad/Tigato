import React from "react";
import { useRouter } from "next/router";

import Menu from "../composant/menu";
import Produits from "../composant/produits";

export default function Commande() {
  const router = useRouter();
  const { name, phone }: { name: string; phone: string } = router.query;
  return (
    <div>
      <Menu name={name} />
    </div>
  );
}
