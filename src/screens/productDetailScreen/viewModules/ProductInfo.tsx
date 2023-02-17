import React, { useState } from "react";

import useTheme from "@lib/client/hooks/useTheme";
import { Col, Row } from "src/styles/GlobalStyle";
import { Check, ChevronRight, Star } from "@components/icons";
import { Button, Tag } from "@components/ui";
import { TProductDetailData } from "src/commonTypes/product/productType";

import {
  ColorButton,
  DiscountPercent,
  DiscountPrice,
  OptionButton,
  Price,
  TagSearchContainer,
  TagSpanWrapper,
} from "../ProductDetail.styles";

interface IProductInfoProps {
  data: TProductDetailData;
  selectSize: number;
  setSelectSize: React.Dispatch<React.SetStateAction<number>>;
  selectColor: string;
  setSelectColor: React.Dispatch<React.SetStateAction<string>>;
  tagSelected: Array<string>;
  _tagClickHandler: Function;
}

const ProductInfo: React.FC<IProductInfoProps> = ({
  data,
  selectSize,
  setSelectSize,
  selectColor,
  setSelectColor,
  tagSelected,
  _tagClickHandler,
}) => {
  const {
    brand,
    colorCode,
    context,
    discount,
    grade,
    kategorie,
    name,
    price,
    reviewCount,
    size,
    stock,
  } = data;

  const theme = useTheme();

  const [isSoldOut, setisSoldOut] = useState(false);

  return (
    <div className="flex flex-col xmd:flex-row w-full">
      {/*  INFO Col */}
      <Col className="relative xmd:max-w-[750px] xmd:mr-16">
        <Row className="justify-between">
          <h2 className="m-0 font-bold text-xl">{brand}</h2>
          <Row className="items-center">
            <div className="pb-[6px] pr-[2px]">
              <Star className="w-4 h-4" />
            </div>
            <span className="pr-3 font-semibold">{grade}</span>
            <span
              className="font-semibold"
              style={{
                color: theme.gray_primary,
                textDecoration: "underline",
                textDecorationColor: theme.gray_dark,
                textDecorationThickness: 1,
              }}
            >
              후기 {reviewCount}개
            </span>
          </Row>
        </Row>
        <h1 className="m-0 mb-1 font-semibold">{name}</h1>
        {/* Tags */}
        <Row className="relative mb-5 flex-wrap">
          {kategorie.map((data, index) => (
            <Tag
              key={index}
              context={data}
              onClick={() => _tagClickHandler(data)}
              className="mr-1 mb-0 text-xs"
            />
          ))}
          {tagSelected.length > 0 && <TagSearchButton tags={tagSelected} />}
        </Row>
        {/* PRICE */}
        <div className="flex flex-col sm:flex-row mb-10 sm:items-center">
          <Price $disable={discount.able}>
            {price.toLocaleString("ko-KR")} 원
          </Price>
          {discount.able && (
            <Row className="sm:pl-3">
              <DiscountPrice>
                {(
                  price - Math.floor(price / (100 - discount.percent))
                ).toLocaleString("ko-KR")}{" "}
                원
              </DiscountPrice>
              <DiscountPercent>{discount.percent}% 할인</DiscountPercent>
            </Row>
          )}
        </div>
        <span className="leading-6 max-w-[90%] mb-16 xmd:mb-0">{context}</span>
        <span className="mb-16 xmd:mb-0 xmd:absolute bottom-0 left-0">
          {JSON.stringify(size)}
        </span>
      </Col>

      {/* OPTONS & ACTION BUTTON COL */}
      <Col className="xmd:max-w-[450px] xmd:ml-5">
        {/* size choose */}
        <Col className="mb-5">
          <h2 className="font-semibold text-xl mb-3">사이즈 선택</h2>
          <Row className="flex-wrap">
            {stock.map((data, index) => (
              <OptionButton
                key={index}
                disabled={data.quantity <= 0}
                selected={index === selectSize}
                onClick={() => setSelectSize(index)}
              >
                {data.option}
              </OptionButton>
            ))}
          </Row>
        </Col>
        {/* Color Choose */}
        <Col className="mb-5">
          <h2 className="font-semibold text-xl mb-3">색상 선택</h2>
          <Row className="flex-wrap">
            {colorCode.map((data, index) => (
              <ColorButton
                key={index}
                $bgColor={data.code}
                selected={data.name === selectColor}
                onClick={() => setSelectColor(data.name)}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor:
                      data.name === selectColor
                        ? theme.black_primary + 20
                        : "transparent",
                  }}
                >
                  <Check
                    className={`w-5 h-5 mx-auto my-auto transition-colors`}
                    stroke={
                      data.name === selectColor
                        ? theme.white_primary
                        : "transparent"
                    }
                  />
                </div>
              </ColorButton>
            ))}
          </Row>
        </Col>
        {/* BUTTONS */}
        <>
          {isSoldOut ? (
            <Button className="mb-4" variant="disabled" type="button" disabled>
              <span>SOLD OUT</span>
            </Button>
          ) : (
            <Button className="mb-4" variant="flat" type="button">
              <span>Buy Now</span>
            </Button>
          )}
        </>
        <Button
          className="mb-4"
          variant="naked"
          type="button"
          disabled={isSoldOut}
        >
          Add to Cart
        </Button>
        <Button variant="naked" type="button">
          Pin to wishlist
        </Button>
      </Col>
    </div>
  );
};

export default ProductInfo;

const TagSearchButton: React.FC<{
  tags: Array<string>;
}> = ({ tags }) => {
  const theme = useTheme();
  return (
    <TagSearchContainer className="shadow-lg">
      <TagSpanWrapper>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </TagSpanWrapper>
      <button className="flex flex-row items-center pl-2 ">
        <span
          className="min-w-[25px] text-center"
          style={{ color: theme.white_primary }}
        >
          검색
        </span>
        <ChevronRight
          className="w-4 h-4"
          stroke={theme.white_primary}
          strokeWidth={2}
        />
      </button>
    </TagSearchContainer>
  );
};
