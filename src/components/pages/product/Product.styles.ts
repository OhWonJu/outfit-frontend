import styled, { css } from "styled-components";
import tw from "twin.macro";

import {
  BORDER_TINE_WIDTH,
  CARDS_BORDER_RADIUS,
  CARDS_MEDIUM_PADDING,
  PRODUCT_CARD_WIDTH,
} from "constants/constants";

// ProductHardCard ------------------------------- //
export const CardLayout = styled.article<any>`
  width: ${PRODUCT_CARD_WIDTH}px;
  border-radius: ${CARDS_BORDER_RADIUS}px;

  ${props => {
    if (!props.isSoldOut) {
      return css`
        border-width: ${BORDER_TINE_WIDTH}px;
        border-color: ${props => props.theme.gray_light + 50};
      `;
    }
  }}

  ${tw`relative mb-14 shadow-md overflow-hidden`}
`;

export const ImageWrapper = styled.div`
  width: ${PRODUCT_CARD_WIDTH}px;
  height: 70%;
  ${tw`relative`};
`;

export const InfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 30%;
  padding: 0px ${CARDS_MEDIUM_PADDING}px;

  ${tw`pt-2 pb-1`};
`;

export const InfoBox = styled.article`
  width: 100%;
  height: 60%;

  ${tw`flex flex-col items-start`};
`;

export const PriceBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

export const Price = styled.span<any>`
  ${props => {
    if (props.disable) {
      return css`
        color: ${props => props.theme.gray_primary};
        text-decoration-color: ${props => props.theme.gray_primary};
        text-decoration: line-through;
        ${tw`text-xs`}
      `;
    } else {
      return css`
        ${tw`text-lg`}
      `;
    }
  }}
  ${tw`font-bold`}
`;

export const DiscountPrice = styled.span`
  ${tw`font-bold text-lg`}
`;

export const DiscountSection = styled.div`
  /* padding-top: ${CARDS_MEDIUM_PADDING + 5}px; */
  /* padding-left: ${CARDS_MEDIUM_PADDING}px; */
  /* ${tw`absolute top-0 left-0 flex flex-row `} */
`;

export const DiscountType = styled.a<any>`
  color: ${props => props.theme.red_primary};
  ${tw`font-bold text-xs pr-1`};
`;

export const DiscountPercent = styled.span`
  color: ${props => props.theme.red_primary};
  ${tw`font-bold text-lg`};
`;

export const UtilButtonSection = styled.div`
  padding-top: ${CARDS_MEDIUM_PADDING + 5}px;
  padding-right: ${CARDS_MEDIUM_PADDING}px;
  ${tw`absolute top-0 right-0`}
`;

export const ProductSoldOutWrapper = styled.div`
  ${tw`absolute inset-0 w-full h-full flex justify-center items-center`}
`;
// ------------------------------- ProductHardCard //

// ProductSoftCard ------------------------------- //
export const SoftCardLayout = styled.article<any>`
  width: 100%;
  border-radius: ${CARDS_BORDER_RADIUS}px;

  ${props => {
    if (!props.isSoldOut) {
      return css`
        border-width: ${BORDER_TINE_WIDTH}px;
        border-color: ${props => props.theme.gray_light + 50};
      `;
    }
  }}

  ${tw`relative mb-14 shadow-md overflow-hidden`}
`;

export const SoftImageWrapper = styled.div`
  width: 100%;
  ${tw`relative`};
`;
// ------------------------------- ProductSoftCard //
