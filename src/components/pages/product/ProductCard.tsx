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
  ProductSoldOutWrapper,
  UtilButtonSection,
} from "./Product.styles";
import { ArrowRight, ChevronRight, Heart } from "@components/icons";
import { EllipsisText } from "@components/ui";

import { CATEGORY_MAP, TYPE_MAP } from "constants/products";
import { TKategorie, TType } from "src/commonTypes/product/productType";

type TData = {
  id: string;
  name: string;
  thumbNails: any;
  kategorie: TKategorie;
  type: TType;
  content: string;
  price: number;
};

interface Props {
  cardType: "MOBILE" | "DESKTOP";
  data: TData;
}

const ProductCard: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const [isSoldOut, setIsSoldOut] = useState(
    Math.random() > 0.5 ? false : true,
  );
  const [isPined, setIsPined] = useState(false);

  const isDiscount = true;
  const context =
    "다음 휴가에서 영감을 받은 새로운 디자인으로 스타일을 뽐내 보세요. 여름에 어울리는 통기성 좋은 메쉬 스우시 포인트가 양말을 돋보이게 해줍니다. 무게 기준 20% 이상 재생 소재로 제작되어 멋스러운 스타일을 연출하며 환경 보호에도 동참할 수 있습니다.";

  return (
    <CardLayout
      isSoldOut={isSoldOut}
      className="aspect-10/16 hover:scale-[1.02] hover:-translate-y-3 hover:shadow-lg transition-all"
    >
      {/* PRODUCT THUMB NAIL */}
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

      {/* PRODUCT INFO */}
      <InfoSection className="">
        <InfoBox className="">
          <Row className="w-full justify-between">
            {/* Brand */}
            <span className="font-bold text-xs truncate">NIKE</span>
            <Row style={{ color: theme.gray_primary }}>
              {/* CATEGORY */}
              <a className="font-semibold text-xs truncate">
                {CATEGORY_MAP[data?.kategorie?.kategorie]}
              </a>
              <div className="">
                <ChevronRight
                  className="h-[14px] w-[14px]"
                  stroke={theme.gray_primary}
                  strokeWidth={1.8}
                />
              </div>
              {/* CATEGORY > TYPE */}
              <a className="font-semibold text-xs truncate">
                {TYPE_MAP[data?.type?.type]}
              </a>
            </Row>
          </Row>
          {/* PRODUCT NAME */}
          <span className="font-medium pb-1 truncate">{data.name}</span>
          {/* PRODUCT CONTEXT */}
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

      {/* CARD UTILS */}
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

      {/* SOLD OUT */}
      {isSoldOut && (
        <ProductSoldOutWrapper className="bg-black bg-opacity-10 backdrop-blur-[0.8px]">
          <a
            className="text-2xl font-extrabold -rotate-6"
            style={{ color: theme.white_primary }}
          >
            SOLD OUT
          </a>
        </ProductSoldOutWrapper>
      )}
    </CardLayout>
  );
};

export default ProductCard;
