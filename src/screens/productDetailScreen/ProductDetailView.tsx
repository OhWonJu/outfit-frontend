import React, { useRef } from "react";

import { Container } from "@components/ui";
import AppHead from "@components/common/AppHead";
import Footer from "@components/footer/Footer";

import { NAV_HEIGHT, PRODUCT_PADDING } from "src/constants";
import { TProductThumbFile } from "src/commonTypes/product/productType";
import { ProductCarousel } from "./viewModules";

interface IProductDetailViewProps {
  contentRef: React.MutableRefObject<HTMLDivElement>;
  name: string;
  thumbFiles: Array<TProductThumbFile>;
  PRODUCT_INFO: JSX.Element;
  PRODUCT_TABS: JSX.Element;
}

const ProductDetailView: React.FC<IProductDetailViewProps> = ({
  contentRef,
  name,
  thumbFiles,
  PRODUCT_INFO,
  PRODUCT_TABS,
}) => {
  return (
    <>
      <AppHead title={name}>
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
            imageUrls={thumbFiles}
            className="mb-10 md:mb-16"
          />
          <section className="max-w-[1200px]">{PRODUCT_INFO}</section>
          {/* More... */}
        </div>
      </Container>
      <section>{PRODUCT_TABS}</section>
      <Footer />
    </>
  );
};

export default ProductDetailView;
