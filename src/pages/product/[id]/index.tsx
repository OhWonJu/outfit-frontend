import React, { useRef } from "react";

import { NAV_HEIGHT, PRODUCT_PADDING } from "src/constants";
import { Container } from "@components/ui";
import { ProductCarousel, ProductInfo, ProductTabs } from "@components/pages/product";

import Footer from "@components/footer/Footer";
import AppHead from "@components/common/AppHead";

import { product_01_Data } from "MockData/productData";

const Product = () => {
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <>
      <AppHead title={product_01_Data.name}>
        {/* 이 메타 데이터들은 ssr, ssg 둘 방식 중 하나여야 미리 SEO가 동작하겠지 */}
        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="When Great Minds Don’t Think Alike"
        />
        <meta
          property="og:description"
          content="How much does culture influence creative thinking?"
        />
        <meta
          property="og:image"
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        />
      </AppHead>
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
