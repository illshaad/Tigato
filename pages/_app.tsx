import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DataFoodProvider } from "../context/context";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataFoodProvider>
      <Component {...pageProps} />;
    </DataFoodProvider>
  );
}
