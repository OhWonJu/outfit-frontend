import React, { useState } from "react";
import Image from "next/image";

import useTheme from "@lib/client/hooks/useTheme";
import { Row } from "src/styles/GlobalStyle";
import {
  CardLayout,
  DiscountPercent,
  DiscountPrice,
  DiscountType,
  ImageWrapper,
  InfoBox,
  InfoSection,
  Price,
  PriceBox,
  UtilButtonSection,
} from "./Product.styles";
import { ArrowRight, Heart } from "@components/icons";
import { EllipsisSpan, EllipsisText, Link } from "@components/ui";

interface Props {
  cardType: "MOBILE" | "DESKTOP";
  data: any;
}

const ProductCard: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const [isPined, setIsPined] = useState(false);

  const isDiscount = true;
  const context =
    "다음 휴가에서 영감을 받은 새로운 디자인으로 스타일을 뽐내 보세요. 여름에 어울리는 통기성 좋은 메쉬 스우시 포인트가 양말을 돋보이게 해줍니다. 무게 기준 20% 이상 재생 소재로 제작되어 멋스러운 스타일을 연출하며 환경 보호에도 동참할 수 있습니다.";

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
          <span className="font-bold text-xs truncate">NIKE</span>
          <span className="font-medium pb-1 truncate">{data.name}</span>
          <EllipsisText
            context={context}
            className="text-xs font-semibold"
            style={{ color: theme.gray_primary }}
          />
        </InfoBox>
        <PriceBox className="">
          <div className="__origin_price_and_discount_type__ flex flex-row">
            {isDiscount && (
              <div className="flex flex-row">
                <ArrowRight
                  className="h-[14px] w-[14px] rotate-45"
                  stroke={theme.red_primary}
                  strokeWidth={1.8}
                />
                <DiscountType className="">할인가</DiscountType>
              </div>
            )}
            <Price disable={isDiscount}>
              {data.price.toLocaleString("ko-KR")}원
            </Price>
          </div>
          {/* DISCOUNT PRICE */}
          {isDiscount && (
            <Row className="space-x-1">
              <div className="flex flex-row">
                <DiscountPercent>10%</DiscountPercent>
              </div>
              <DiscountPrice>
                {(
                  data.price - Math.floor(data.price / (100 - 10))
                ).toLocaleString("ko-KR")}
                원
              </DiscountPrice>
            </Row>
          )}
        </PriceBox>
      </InfoSection>
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
