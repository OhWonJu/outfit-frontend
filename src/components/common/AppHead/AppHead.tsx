import Head from "next/head";

const AppHead = ({ title = "OUTFIT" }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="OUTFIT" />
    </Head>
  );
};

export default AppHead;
