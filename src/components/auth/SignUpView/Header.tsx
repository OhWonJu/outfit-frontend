import React from "react";
import { SYMBOL_TEXT } from "src/constants";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

export default function Header() {
  return (
    <Wrapper>
      <div>
        <H1>{SYMBOL_TEXT}</H1>
      </div>
      <div>
        <H3>Join us! for your best out fit</H3>
      </div>
    </Wrapper>
  );
}

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px)
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  ${tw`flex flex-col items-center pb-10`}
`;

const H1 = styled.h1`
  opacity: 0;
  animation: ${animation} 1000ms ease-out 1;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  ${tw`font-extrabold text-7xl mb-3`}
`;

const H3 = styled.h3`
  opacity: 0;
  animation: ${animation} 800ms ease-out 1;
  animation-delay: 800ms;
  animation-fill-mode: forwards;
  ${tw`font-semibold`}
`;
