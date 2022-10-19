import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import wrapper from "@lib/store/store";
import AppHead from "@components/common/AppHead";
import Layout from "@components/common/Layout";
import { ManagedUIContext } from "@components/ui/context";

import { SYMBOL_TEXT } from "src/constants";
import { GlobalStyle } from "src/styles/GlobalStyle";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [title, setTitle] = useState<string>(SYMBOL_TEXT);

  useEffect(() => {
    const path = router.pathname.split("/")[1];
    if (path) setTitle(path + " | " + SYMBOL_TEXT);
    return;
  }, [router]);

  return (
    <>
      <AppHead title={title} />
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
