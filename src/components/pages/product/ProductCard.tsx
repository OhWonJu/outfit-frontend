import React from "react";
import Image from "next/image";

import { Row } from "src/styles/GlobalStyle";
import {
  CardLayout,
  DiscountPercent,
  DiscountPrice,
  ImageWrapper,
  InfoBox,
  InfoSection,
  Price,
  PriceBox,
  UtilButtonSection,
} from "./Product.styles";
import { Heart } from "@components/icons";
import useTheme from "@lib/client/hooks/useTheme";

interface Props {
  data: any;
}

const ProductCard: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  console.log(data);
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
          <span className="font-bold">{data.name}</span>
        </InfoBox>
        <PriceBox className="">
          <Price disable={true}>{data.price.toLocaleString("ko-KR")}원</Price>
          {true && (
            <Row className="sm:pl-2">
              <DiscountPrice>
                {(
                  data.price - Math.floor(data.price / (100 - 10))
                ).toLocaleString("ko-KR")}
                원
              </DiscountPrice>
              <DiscountPercent>10%</DiscountPercent>
            </Row>
          )}
        </PriceBox>
      </InfoSection>
      <UtilButtonSection>
        <div className="w-10 h-10 m-2 flex justify-center items-center">
          <div>
            <Heart stroke={theme.white_primary} />
          </div>
        </div>
        <div className="w-10 h-10 m-2" />
      </UtilButtonSection>
    </CardLayout>
  );
};

export default ProductCard;
