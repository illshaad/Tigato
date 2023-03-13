import Head from "next/head";
import Formulaire from "../components/formulaire";

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
        <div className="h-[300] p-6 bg-cyan-900 rounded-lg">
          <h2 className="mb-2 text-3xl font-bold text-center font-tilt-warp  text-white">
            Tigato
          </h2>
          <p className="mb-2 text-center font-normal text-white">
            Pour continuer merci indiquer votre prénom
          </p>
          <p className="p-4 text-xs align-bottom text-center font-tilt-warp text-white">
            Votre prénom nous serviron à vous contacter pour la réservation de
            votre commande
          </p>
          <Formulaire />
        </div>
      </main>
    </>
  );
}
