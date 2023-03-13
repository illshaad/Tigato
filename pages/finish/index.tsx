import React from "react";
import { useRouter } from "next/router";
export default function FinishReservation() {
  const router = useRouter();

  const redirection = () => router.push("/");

  setTimeout(() => {
    redirection();
  }, 5000);

  return (
    <h1 className="text-2xl p-10 font-bold font-tilt-warp text-cyan-900">
      Nous vous contacterons dans les plus briefs délais pour votre réservation.
      Vous allez être redirigés pour pourvoir prendre une nouvelle commande.
      Merci
    </h1>
  );
}
