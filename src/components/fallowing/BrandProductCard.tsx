import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FallowingProductCardData } from "types/product";

type BrandProductCard = FallowingProductCardData & {
  cardType: "primary" | "secondary";
};

const BrandProductCard: FC<BrandProductCard> = ({
  cardType,
  brandName,
  productId,
  productName,
  thumbNail,
}) => {
  // function getImageLightness(imageSrc, callback) {
  //   var img = document.createElement("img");
  //   img.src = imageSrc;
  //   img.style.display = "none";
  //   document.body.appendChild(img);

  //   var colorSum = 0;

  //   img.onload = function () {
  //     // create canvas
  //     var canvas = document.createElement("canvas");
  //     canvas.width = this.width;
  //     canvas.height = this.height;

  //     var ctx = canvas.getContext("2d");
  //     ctx.drawImage(this, 0, 0);

  //     var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //     var data = imageData.data;
  //     var r, g, b, avg;

  //     for (var x = 0, len = data.length; x < len; x += 4) {
  //       r = data[x];
  //       g = data[x + 1];
  //       b = data[x + 2];

  //       avg = Math.floor((r + g + b) / 3);
  //       colorSum += avg;
  //     }

  //     var brightness = Math.floor(colorSum / (this.width * this.height));
  //     callback(brightness);
  //   };
  // }

  // JUST FOR TEST CASE
  function getTextColorByBackgroundColor(hexColor: string) {
    const c = hexColor.substring(1); // 색상 앞의 # 제거
    const rgb = parseInt(c, 16); // rrggbb를 10진수로 변환
    const r = (rgb >> 16) & 0xff; // red 추출
    const g = (rgb >> 8) & 0xff; // green 추출
    const b = (rgb >> 0) & 0xff; // blue 추출
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    // 색상 선택
    return luma < 127.5 ? "white" : "black"; // 글자색이
  }

  return (
    <Wrapper
      className="relative w-full px-4 mb-7 lg:mb-9"
      cardType={cardType}
      thumbNail={thumbNail}
    >
      <ProductInfo textColorType={getTextColorByBackgroundColor(thumbNail)}>
        <BrandName className="font-bold mr-3 text-xl">{brandName}</BrandName>
        <ProductName className="font-medium text-xl">{productName}</ProductName>
      </ProductInfo>
    </Wrapper>
  );
};

export default BrandProductCard;

const Wrapper = styled.div<any>`
  aspect-ratio: ${props => (props.cardType === "primary" ? "3/4" : "2/3")};
  background-image: ${props => props.thumbNail};
  background-color: ${props => props.thumbNail};
`;

const BrandName = styled.a``;

const ProductName = styled.a``;

const ProductInfo = styled.div<any>`
  position: absolute;
  bottom: 1rem;
  color: ${props =>
    props.textColorType === "white"
      ? props.theme.text_secondary_color
      : props.theme.text_primary_color};
`;
