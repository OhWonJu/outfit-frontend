import React, { useRef } from "react";

import { NAV_HEIGHT, PRODUCT_PADDING } from "src/constants";
import { Container } from "@components/ui";
import { ProductCarousel, ProductInfo } from "@components/product";

import { product_01_Data } from "../../../MockData/productData";

const Product = () => {
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <Container
      verticalSidebarVisible={false}
      style={{
        paddingTop: PRODUCT_PADDING,
        paddingBottom: PRODUCT_PADDING,
      }}
    >
      <div ref={contentRef} className="flex flex-col items-center">
        <ProductCarousel
          parentRef={contentRef}
          imageUrls={product_01_Data.thumbFiles}
          className="mb-16"
        />
        <div className="max-w-[1200px] mb-16">
          <ProductInfo {...product_01_Data} />
        </div>
        {/* More... */}
        <div>More infos</div>
      </div>
    </Container>
  );
};

export default Product;
