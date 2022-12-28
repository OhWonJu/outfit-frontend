import type { NextPage } from "next";

import Footer from "@components/footer/Footer";
import { LaunchingBanner } from "@components/launching";
import { IndexContainer, IndexWrapper } from "src/styles/GlobalStyle";
import { useLocalStorage } from "@lib/client/hooks/useLocalStorage";

const Home: NextPage = () => {
  const [_, toLight] = useLocalStorage("theme");

  return (
    <IndexContainer>
      <IndexWrapper className="overflow-hidden">
        {/* <LaunchingBanner /> */}
      </IndexWrapper>
      <button
        onClick={() => toLight("light")}
        className="z-200 w-16 h-16 absolute top-1/2 left-1/2 bg-black"
      >
        LIGHT
      </button>
      <Footer />
    </IndexContainer>
  );
};

export default Home;
