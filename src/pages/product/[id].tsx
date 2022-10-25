import React, { useRef } from "react";

import { NAV_HEIGHT, PRODUCT_PADDING } from "src/constants";
import { Container } from "@components/ui";
import { ProductCarousel, ProductInfo, ProductTabs } from "@components/product";

import { product_01_Data } from "../../../MockData/productData";
import Footer from "@components/Footer/Footer";
import AppHead from "@components/common/AppHead";

const Product = () => {
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <>
      <AppHead title={product_01_Data.name} />
      <Container
        verticalSidebarVisible={false}
        style={{
          paddingTop: PRODUCT_PADDING,
          paddingBottom: NAV_HEIGHT,
        }}
      >
        <div ref={contentRef} className="flex flex-col items-center">
          <ProductCarousel
            parentRef={contentRef}
            imageUrls={product_01_Data.thumbFiles}
            className="mb-16"
          />
          <div className="max-w-[1200px]">
            <ProductInfo {...product_01_Data} />
          </div>
          {/* More... */}
        </div>
      </Container>
      <ProductTabs {...product_01_Data} />
      <Footer />
    </>
  );
};

export default Product;
