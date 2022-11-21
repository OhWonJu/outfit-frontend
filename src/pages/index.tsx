import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

import Footer from "@components/footer/Footer";
import { LaunchingBanner } from "@components/launching";

const Home: NextPage = () => {
  return (
    <Container>
      <Wrapper className="overflow-hidden">
        <LaunchingBanner />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-color: ${({ theme }) => theme.background_color};
  ${tw`absolute inset-0`}
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background_color};
  ${tw`w-full h-screen`}
`;
