import type { NextPage } from "next";

import Footer from "@components/footer/Footer";
import { LaunchingBanner } from "@components/launching";
import { IndexContainer, IndexWrapper } from "src/styles/GlobalStyle";

const Home: NextPage = () => {
  return (
    <IndexContainer>
      <IndexWrapper className="overflow-hidden">
        <LaunchingBanner />
      </IndexWrapper>
      <Footer />
    </IndexContainer>
  );
};

export default Home;
