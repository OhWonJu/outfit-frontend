import type { AppProps } from "next/app";

import AppHead from "@components/common/AppHead";
import wrapper from "@lib/store/store";
import { ManagedUIContext } from "@components/ui/context";
import { GlobalStyle } from "src/styles/GlobalStyle";
import Layout from "@components/common/Layout";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <ManagedUIContext>
        <GlobalStyle />
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  );
}

// export default App;

export default wrapper.withRedux(App);
