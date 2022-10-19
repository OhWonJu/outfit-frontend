import Head from "next/head";

import { SYMBOL_TEXT } from "src/constants";

const AppHead = ({ title = SYMBOL_TEXT }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="OURFIT" />
      {/* FONT */}
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      /> */}
    </Head>
  );
};

export default AppHead;
