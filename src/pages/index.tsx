import { Logo, SingleLine } from "@components/icons";
import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

const BannerImage = () => (
  <BannerWrapper>
    <div className="absolute w-screen h-screen left-0 top-0">
      <div className="relative w-full h-full pt-6">
        <Image
          priority
          src="/mainPage/images/banner_demo.png"
          style={{ marginTop: 100 }}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={"banner"}
        />
      </div>
    </div>
    <div className="flex-1"></div>
    <div className="flex-1 main--banner bg-sky-700 " />
  </BannerWrapper>
);

const Home: NextPage = () => {
  return (
    <Container>
      <div className="relative w-screen h-[80vh]">
        <div className="absolute left-16 top-8 h-full">
          <SingleLine className="w-full h-full" />
        </div>
        <h2 className="absolute right-[43%] bottom-[21%] m-0 font-sansSrif text-4xl sm:text-5xl">
          Our fit
        </h2>
        <h1 className="absolute right-[20%] bottom-[5%] m-0 font-sansSrif text-8xl sm:text-9xl">
          Out Fit
        </h1>
        <span className="absolute right-[20%] bottom-[4%] m-0 font-sansSrif sm:text-xl">
          Choose your fit
        </span>
      </div>
      <div className="w-screen h-96 mt-10 bg-[#262626]"></div>
      <Wrapper></Wrapper>

      <Footer>
        <div className="w-full h-full flex items-center justify-center">
          <h2 className="text-zinc-300">@outfit</h2>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 800vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background_color};
`;

const BannerWrapper = styled.div`
  ${tw`
    flex
    flex-col-reverse
    xmd:flex-row
    w-screen
    h-screen
    mb-12
  `}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 5;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Footer = styled.footer`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Base_Context = styled.div`
  color: ${props => props.theme.text_color_primary};
  /* font-size: 1.5rem; */
  font-weight: 300;
`;
