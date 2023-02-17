import { getRandomPairOfColors } from "@lib/client/colors";
import useWindowSize from "@lib/client/hooks/useWindowSize";
import { useState } from "react";
import { SCREEN_SIZE_LG } from "constants/constants";
import { Col } from "src/styles/GlobalStyle";
import styled from "styled-components";

import { FallowingProductCardData } from "src/commonTypes/product/productType";
import BrandProductCard from "./BrandProductCard";

const mockData = Array(80) // @ts-ignore
  .fill()
  .map((arr, i) => {
    // (arr: 현재값, i:인덱스)
    return {
      brandName: "test",
      productId: String(i),
      productName: "test " + i,
      thumbNail: getRandomPairOfColors()[0],
    } as FallowingProductCardData;
  });

const BrandMarquee = () => {
  const { width: windowWidth } = useWindowSize();

  const [productData, setProductData] =
    useState<Array<FallowingProductCardData>>(mockData);

  // CHUCK DATAS //
  function chunk(data: Array<FallowingProductCardData> = [], size: number = 1) {
    const arr = [];

    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size));
    }

    return arr;
  }

  const MarqueeCols = () => {
    let datas;

    if (windowWidth >= SCREEN_SIZE_LG) {
      datas = chunk(productData, productData.length / 4);
    } else {
      datas = chunk(productData, productData.length / 2);
    }

    return (
      <>
        {datas &&
          datas.map((data, index) => (
            <Col key={index}>
              {data.map(d => (
                <BrandProductCard
                  key={d.productId}
                  cardType={index % 2 === 0 ? "secondary" : "primary"}
                  {...d}
                />
              ))}
            </Col>
          ))}
      </>
    );
  };
  // ------------------------------------------------------------------ //

  return (
    <Container className="h-full w-full grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-9">
      <MarqueeCols />
    </Container>
  );
};

export default BrandMarquee;

const Container = styled.div`
  background-color: ${props => props.theme.background_color};
`;
