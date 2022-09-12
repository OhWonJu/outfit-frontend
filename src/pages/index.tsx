import type { NextPage } from "next";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background__color};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    /* color: ${props => props.theme.text__color__primary}; */
    font-size: 2.5rem;
    font-weight: 900;
  }
`;
const Footer = styled.footer`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Heading = tw.div`
  font-bold text-4xl mb-1 rotate-3 skew-x-6
`;

const Base_Context = styled.div`
  color: ${props => props.theme.text__color__primary};
  /* font-size: 1.5rem; */
  font-weight: 300;
`;

const Context = tw(Base_Context)`
  mt-2 text-sm -rotate-3 -skew-x-6
`;

const TextBox = tw(Base_Context)<any>`
  m-5 shadow-md ${props => (props.rounded ? "rounded-md" : null)}
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>OUR FIT</Heading>
        <div style={{ perspective: 150 }}>
          <div
            className="title text-slate-500 tracking-widest"
            style={{ transform: "rotateY(30deg)", marginLeft: 20 }}
          >
            OUTFIT
          </div>
        </div>
        <Context>CHOOSE YOUR FIT</Context>
        <TextBox className="bg-slate-100 p-3" rounded={true}>
          can i append className?
        </TextBox>
      </Wrapper>

      <Footer>
        <div className="w-full h-full flex items-center justify-center">
          <h2 className="text-zinc-300">@outfit</h2>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;
