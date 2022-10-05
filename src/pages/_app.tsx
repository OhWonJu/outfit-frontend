import type { AppProps } from "next/app";

import AppHead from "@components/common/AppHead";
import wrapper from "@lib/store/store";
import { ManagedUIContext } from "@components/ui/context";
import { GlobalStyle } from "src/styles/GlobalStyle";
import Layout from "@components/common/Layout";
import "../styles/globals.css";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <>
      <AppHead />
      <ManagedUIContext>
        <GlobalStyle />
        <Layout pageProps={pageProps} path={router.pathname}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  );
}

// export default App;

export default wrapper.withRedux(App);
