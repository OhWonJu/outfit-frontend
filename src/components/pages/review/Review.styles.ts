import styled, { css } from "styled-components";
import tw from "twin.macro";

import {
  BORDER_TINE_WIDTH,
  CARDS_BORDER_RADIUS,
  CARDS_PADDING,
} from "src/constants";

export const Card = styled.div`
  position: relative;
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_light + 50};
  background-color: ${props => props.theme.container_bg_color};
  border-radius: ${CARDS_BORDER_RADIUS}px;
  padding: ${CARDS_PADDING}px;
  width: 90vw;
  max-width: 400px;
  min-width: 300px;
  height: 600px;
  ${tw`md:min-h-0  shadow-md`}
`;

export const ReviewWriteCard = styled(Card)`
  padding: 0;
  ${tw`shadow-none`}
`;

export const CardHeader = styled.div`
  height: 13%;
  ${tw`flex flex-col min-w-full `}
`;

export const AvatarWrapper = styled.div`
  ${tw`h-full `}
`;

export const UserName = styled.a`
  color: ${props => props.theme.text_primary_color};
  ${tw`font-bold text-base`}
`;

export const Date = styled.a`
  color: ${props => props.theme.gray_primary};
  ${tw`font-bold text-xs`};
`;

export const CardImageSection = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
`;

export const CardIndicatorWrapper = styled.div`
  height: 5%;
  ${tw`flex justify-center items-center`}
`;

export const CardInfoSection = styled.section`
  height: 32%;
  ${tw`flex flex-col`}
`;

export const BuyerInfoWrapper = styled.div`
  ${tw`flex flex-col w-full`}
`;
export const BuyerInfo = styled.div`
  ${tw`flex flex-row w-full`}
`;

export const BuyerInfoLeft = styled.div`
  ${tw` w-[20%]`}
`;

export const BuyerInfoRight = styled.div``;

export const BuyerInfoText = styled.a`
  color: ${props => props.theme.gray_dark};
  ${tw`font-semibold text-sm  pr-1`};
`;

export const BuyerComment = styled.div``;
