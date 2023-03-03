import {
  SCREEN_SIZE_LG,
  SCREEN_SIZE_MD,
  SCREEN_SIZE_SM,
  SCREEN_SIZE_XL,
  SCREEN_SIZE_XMD,
} from "constants/constants";
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";

export const ProductListWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  flex: 0 0 50%;
  max-width: 50%;
  ${tw`px-1`}

  @media screen and (min-width: ${SCREEN_SIZE_SM}px) {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    ${tw`px-1`}
  }

  @media screen and (min-width: ${SCREEN_SIZE_XMD}px) {
    flex: 0 0 50%;
    max-width: 50%;
    ${tw`px-2`}
  }

  @media screen and (min-width: ${1000}px) {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    ${tw`px-2`}
  }

  @media screen and (min-width: ${1250}px) {
    flex: 0 0 25%;
    max-width: 25%;
    ${tw`px-2`}
  }

  @media screen and (min-width: ${1500}px) {
    flex: 0 0 20%;
    max-width: 20%;
    ${tw`px-2`}
  }

  /* 
  @media screen and (min-width: ${SCREEN_SIZE_XMD}px) {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  } */
`;
