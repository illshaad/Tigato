import Head from "next/head";
import Formulaire from "../composant/formulaire";

export default function Home() {
  return (
    <>
      <Head>
        <title>Application Tigato</title>
        <meta name="description" content="Tigato" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid h-screen place-items-center">
        <div className="h-80 p-6 border-{#475B63} bg-[#475B63] rounded-lg">
          <h2 className="mb-2 text-3xl font-bold text-center font-tilt-warp  text-[#f7af9d]">
            Tigato
          </h2>
          <p className="mb-2 text-center font-normal text-[#f7af9d]">
            Pour continuer merci indiquer votre prénom
          </p>
          <p className="p-4 text-xs align-bottom text-center font-tilt-warp text-[#f7af9d]">
            Votre prénom nous serviron à vous contacter pour la réservation de
            votre commande
          </p>
          <Formulaire />
        </div>
      </main>
    </>
  );
}
