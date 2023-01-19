import styled, { css } from "styled-components";
import tw from "twin.macro";

import { PRODUCT_CARD_WIDTH } from "src/constants";

// ProductCard ------------------------------- //
export const CardLayout = styled.div<any>`
  width: ${PRODUCT_CARD_WIDTH}px;
  ${tw`relative mb-14 shadow-md`}
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

  ${tw`pt-7 px-2 pb-1`};
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 72%;
`;

export const PriceBox = styled.div`
  width: 100%;
  height: 28%;
  display: flex;
  align-items: flex-end;
`;

export const Price = styled.span<any>`
  ${props => {
    if (props.disable) {
      return css`
        color: ${props => props.theme.gray_primary};
        text-decoration-color: ${props => props.theme.gray_primary};
        text-decoration: line-through;
      `;
    }
  }}
  ${tw`font-bold text-lg`}
`;

export const DiscountPrice = styled.span`
  ${tw`font-bold text-lg`}
`;

export const DiscountPercent = styled.span`
  color: ${props => props.theme.red_primary};
  ${tw`font-semibold text-base pl-1`};
`;

export const UtilButtonSection = styled.div`
  ${tw`absolute right-0 top-0 w-14 space-y-4`}
`;
// ------------------------------- ProductCard //

/*
<div className="w-[300px]">
<Image
  alt={data.name}
  src={
    data.thumbNails.urls[0] ?? ""
    // JSON.parse(JSON.stringify(item.thumbNails)).urls[0] ?? ""
  }
  width={300}
  height={200}
/>
<div className="flex">
  <span>{data.name}</span>
  <span className="ml-auto">
    {data.price.toLocaleString("ko-KR")}원
  </span>
</div>
<div className="text-zinc-400">
  <span className="text-zinc-400">
    {data.kategorie.kategorie} {" > "}
  </span>
  <span className="text-zinc-400">{data.type.type}</span>
</div>
</div>
*/
