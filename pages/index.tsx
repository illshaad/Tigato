import Head from "next/head";
import { Inter } from "next/font/google";
import Formulaire from "./composant/formulaire";
const inter = Inter({ subsets: ["latin"] });

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
        <div className="h-80 p-6 border bg-[#F7D6E0] rounded-lg ">
          <h2 className="mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            Bienvenu sur Tigato
          </h2>
          <p className="mb-2 text-center font-normal text-gray-700">
            Pour continuer veuillez indiquer votre prénom
          </p>
          <p className="p-4 text-xs align-bottom  text-center font-normal text-gray-700">
            Votre prénom nous serviron à vous contacter pour la réservation de
            votre commande
          </p>
          <Formulaire />
        </div>
      </main>
    </>
  );
}
