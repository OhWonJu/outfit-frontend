import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";

import { BORDER_BASE_WIDTH } from "src/constants";
import useTheme from "@lib/hooks/useTheme";
import { Col, Row } from "src/styles/GlobalStyle";
import { SNSLogIn, SubmitButton } from "@components/auth/LoginView/LoginView";
import { Check } from "@components/icons";
import { Tag } from "@components/ui";

interface ProductInfoProps {
  id: string;
  name: string;
  price: number;
  discount: {
    able: boolean;
    percent?: number;
  };
  kategorie: Array<string>;
  context: string;
  stock: Array<{ option: number; quantity: number }>;
  colorCode: Array<{ name: string; code: string }>;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  id,
  name,
  price,
  discount,
  kategorie,
  context,
  stock,
  colorCode,
}) => {
  const theme = useTheme();

  const [selectSize, setSelectSize] = useState<number>(null);
  const [selectColor, setSelectColor] = useState<number>(null);

  return (
    <Row className="w-full">
      {/*  INFO Cal */}
      <Col className="relative max-w-[750px] mr-16">
        <h1 className="m-0 mb-1 font-semibold">{name}</h1>
        {/* Tags */}
        <Row className="mb-5">
          {kategorie.map(data => (
            <Tag context={data} className="mr-1 mb-0 text-xs" />
          ))}
        </Row>
        {/* PRICE */}
        <Row className="mb-10 items-center">
          <Price $disable={discount.able}>
            {price.toLocaleString("ko-KR")} 원
          </Price>
          {discount.able && (
            <Row className="pl-3">
              <DiscountPrice>
                {(
                  price - Math.floor(price / (100 - discount.percent))
                ).toLocaleString("ko-KR")}{" "}
                원
              </DiscountPrice>
              <DiscountPercent>{discount.percent}% 할인</DiscountPercent>
            </Row>
          )}
        </Row>
        <span className="leading-6  max-w-[90%]">{context}</span>
      </Col>
      {/* OPTONS & ACTION BUTTOn COL */}
      <Col className="max-w-[450px] ml-5">
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
                $bgColor={data.code}
                selected={index === selectColor}
                onClick={() => setSelectColor(index)}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor:
                      index === selectColor
                        ? theme.black_primary + 20
                        : "transparent",
                  }}
                >
                  <Check
                    className={`w-5 h-5 mx-auto my-auto transition-colors`}
                    stroke={
                      index === selectColor
                        ? theme.white_primary
                        : "transparent"
                    }
                  />
                </div>
              </ColorButton>
            ))}
          </Row>
        </Col>
        <SubmitButton className="mb-4">
          <span>Add to Cart</span>
        </SubmitButton>
        <SNSLogIn>Pin to wishlist</SNSLogIn>
      </Col>
    </Row>
  );
};

export default ProductInfo;

const Price = styled.span<any>`
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

const OptionButton = styled.button<any>`
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

  ${tw`rounded-md w-20 h-14 mr-[0.4rem] mb-3 text-center text-lg`}
`;

const ColorButton = styled.button<any>`
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

const DiscountPrice = styled.span`
  opacity: 0;
  animation: ${animation} 1000ms ease-out 1;
  animation-delay: 300ms;
  animation-fill-mode: forwards;

  ${tw`font-bold text-3xl`}
`;

const DiscountPercent = styled.span`
  color: ${props => props.theme.red_primary};

  opacity: 0;
  animation: ${animation} 1000ms ease-out 1;
  animation-delay: 1000ms;
  animation-fill-mode: forwards;

  ${tw`px-2 p-1 font-semibold`};
`;
// ---------------------------------------------- //
