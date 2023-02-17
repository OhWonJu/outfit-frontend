import { BORDER_BASE_WIDTH } from "constants/constants";
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";

// Product Carousle ------------------------- //
// ------------------------- Product Carousle //
//
//
// Product Info ----------------------------- //
export const Price = styled.span<any>`
  ${props => {
    if (props.$disable) {
      return css`
        color: ${props => props.theme.gray_primary};
        text-decoration-color: ${props => props.theme.gray_primary};
        text-decoration: line-through;
      `;
    }
  }}
  ${tw`font-bold text-2xl`}
`;

export const OptionButton = styled.button<any>`
  border-color: ${props => props.theme.gray_primary};
  border-width: ${BORDER_BASE_WIDTH}px;
  ${props => {
    if (props.disabled) {
      return css`
        background-color: ${props => props.theme.gray_light};
        color: ${props => props.theme.gray_dark};
      `;
    } else {
      return css`
        &:hover {
          border-color: ${props => props.theme.black_primary};
        }
      `;
    }
  }}
  ${props => {
    if (props.selected) {
      return css`
        background-color: ${props => props.theme.black_primary};
        border-color: ${props => props.theme.black_primary};
        color: ${props => props.theme.white_primary};
      `;
    }
  }}

  ${tw`rounded-md w-20 h-12 mr-[0.4rem] mb-3 text-center text-lg`}
`;

export const ColorButton = styled.button<any>`
  background-color: ${props => props.$bgColor};
  ${tw`rounded-full w-12 h-12 mr-3 mb-3`}
`;

// Price Animation //
const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px)
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const animation_vertical = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px)
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const DiscountPrice = styled.span`
  opacity: 0;
  @media screen and (max-width: 640px) {
    animation: ${animation_vertical} 800ms ease-out 1;
    animation-delay: 300ms;
    animation-fill-mode: forwards;
  }
  @media screen and (min-width: 641px) {
    animation: ${animation} 800ms ease-out 1;
    animation-delay: 300ms;
    animation-fill-mode: forwards;
  }

  ${tw`font-bold text-3xl`}
`;

const animation_precent = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-40px)
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;
export const DiscountPercent = styled.span`
  color: ${props => props.theme.red_primary};

  opacity: 0;
  animation: ${animation_precent} 700ms ease-out 1;
  animation-delay: 1000ms;
  animation-fill-mode: forwards;

  ${tw`px-2 p-1 font-semibold`};
`;
// //

export const TagSearchContainer = styled.div`
  background-color: ${props => props.theme.blue_priamry};
  color: ${props => props.theme.white_primary};
  ${tw`absolute top-[100%] flex flex-row p-2 rounded-lg text-sm z-50`}
`;

export const TagSpanWrapper = styled.div`
  border-right-width: 1.4px;
  border-color: ${props => props.theme.white_primary};
  & > span {
    color: ${props => props.theme.white_primary};
  }
  ${tw`space-x-2 space-y-2 pr-2`}
`;
// ----------------------------- Product Info //
//
//
// Product Tab - Detail --------------------- //
// --------------------- Product Tab - Detail //
//
//
// Product Tab - Qna ------------------------ //
// ------------------------ Product Tab - Qna //
//
//
// Product Tab - Review --------------------- //
export const ReviewCardWrapper = styled.div`
  @media screen and (max-width: 640px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  /* max-width: 1200px; */
`;

export const GradeTitle = styled.span`
  ${tw`w-[50%] font-medium mr-2`}
`;

export const GradeWrapper = styled.div`
  ${tw`flex flex-row w-[50%] items-center`}
`;

export const GradeBackGround = styled.div`
  position: relative;
  height: 4px;
  width: 100%;
  margin-right: 1rem;
  background-color: ${props => props.theme.gray_light};
  ${tw`rounded-full`};
`;

export const Grade = styled.span<any>`
  width: ${props => props.percent}%;
  background-color: ${props => props.theme.black_primary};
  ${tw`absolute top-0 left-0 bottom-0 rounded-full`}
`;

export const ReviewWriteButton = styled.button`
  background-color: ${props => props.theme.background_color};
  border-width: ${BORDER_BASE_WIDTH}px;
  border-color: ${props => props.theme.gray_light};

  & > div {
    color: ${props => props.theme.gray_primary};
  }

  :hover {
    background-color: ${props => props.theme.container_bg_color};
    border-width: 0px;
    & > div {
      color: ${props => props.theme.text_primary_color};
    }
  }

  ${tw`w-full h-full rounded-md transition-all border-dashed hover:border-solid hover:shadow-md`}
`;
// --------------------- Product Tab - Review //
//
//
// Product Tab ------------------------------ //
export const TabSpan = styled.span<any>`
  color: ${props =>
    props.selected ? props.theme.text_primary_color : props.theme.gray_dark};
  ${tw`font-bold`}
`;
// ------------------------------ Product Tab //
