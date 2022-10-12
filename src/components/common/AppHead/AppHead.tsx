import Head from "next/head";

const AppHead = ({ title = "OUTFIT" }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="OUTFIT" />
      {/* FONT */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
  );
};

export default AppHead;
