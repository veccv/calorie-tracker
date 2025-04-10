import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Provider as ChakraProvider } from "../components/ui/provider";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ChakraProvider>
  );
}
