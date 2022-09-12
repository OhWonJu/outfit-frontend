import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { GlobalStyle } from "src/styles/GlobalStyle";
import { ManagedUIContext } from "src/components/ui/context";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OUTFIT</title>
        <meta name="description" content="OUTFIT" />
      </Head>
      <ManagedUIContext>
        <GlobalStyle />
        <Component {...pageProps} />
      </ManagedUIContext>
    </>
  );
}

export default App;
