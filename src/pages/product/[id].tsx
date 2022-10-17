import React, { useEffect, useRef, useState } from "react";

import useTheme from "@lib/hooks/useTheme";
import { NAV_HEIGHT, PRODUCT_PADDING } from "src/constants";
import { Container } from "@components/ui";
import { ProductCarousel, ProductInfo } from "@components/product";

import { thumbFiles, productData } from "../../../MockData/productData";

const Product = () => {
  const theme = useTheme();

  return (
    <Container
      verticalSidebarVisible={false}
      style={{
        paddingTop: NAV_HEIGHT + PRODUCT_PADDING,
        paddingBottom: PRODUCT_PADDING,
      }}
    >
      <div className="flex flex-col items-center">
        <ProductCarousel imageUrls={thumbFiles} className="mb-16" />
        <div className="max-w-[1200px]">
          <ProductInfo {...productData} />
        </div>
        {/* More... */}
      </div>
    </Container>
  );
};

export default Product;
