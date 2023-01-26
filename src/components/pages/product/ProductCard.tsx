import React, { useState } from "react";
import Image from "next/image";

import useTheme from "@lib/client/hooks/useTheme";
import { Row } from "src/styles/GlobalStyle";
import {
  CardLayout,
  DiscountPercent,
  DiscountPrice,
  DiscountSection,
  ImageWrapper,
  InfoBox,
  InfoContent,
  InfoSection,
  Price,
  PriceBox,
  UtilButtonSection,
} from "./Product.styles";
import { ArrowRight, Heart } from "@components/icons";
import { EllipsisSpan, Link } from "@components/ui";

interface Props {
  data: any;
}

const ProductCard: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const [isPined, setIsPined] = useState(false);

  // console.log(data);
  return (
    <CardLayout className="aspect-10/16">
      <ImageWrapper>
        <Image
          alt={data.name}
          src={
            data.thumbNails.urls[0] ?? ""
            // JSON.parse(JSON.stringify(item.thumbNails)).urls[0] ?? ""
          }
          fill={true}
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>
      <InfoSection className="">
        <InfoBox className="">
          <span className="font-semibold">{data.name}</span>
          <EllipsisSpan
            context={data.content}
            lineClamp={2}
            lineHeight={1}
            isClickAble={false}
            className="text-sm font-semibold"
            style={{ color: theme.gray_primary, lineHeight: "1rem" }}
          />
          {/* <InfoContent>
            Damn!!! it is soooo cool and gorgeous i love so much much mucho
            grascia!!! fuck that shiiiiiiit scuuurk!!
          </InfoContent> */}
        </InfoBox>
        <PriceBox className="">
          {true && (
            <Row className="pr-1 space-x-1">
              <DiscountPrice>
                {(
                  data.price - Math.floor(data.price / (100 - 10))
                ).toLocaleString("ko-KR")}
                원
              </DiscountPrice>
            </Row>
          )}
          <Price disable={true}>{data.price.toLocaleString("ko-KR")}원</Price>
        </PriceBox>
      </InfoSection>
      {true && (
        <DiscountSection className="">
          <div>
            <ArrowRight
              className="h-6 w-6 rotate-45"
              stroke={theme.red_primary}
              strokeWidth={1.8}
            />
          </div>
          <DiscountPercent>10%</DiscountPercent>
        </DiscountSection>
      )}
      <UtilButtonSection className="">
        <div className="flex flex-col space-y-4 justify-center items-center">
          <button
            className=""
            type="button"
            onClick={() => setIsPined(!isPined)}
          >
            <Heart
              className="h-6 w-6"
              fill={isPined ? theme.red_secondary : theme.gray_light + 70}
              strokeWidth={0}
            />
          </button>
        </div>
      </UtilButtonSection>
    </CardLayout>
  );
};

export default ProductCard;
