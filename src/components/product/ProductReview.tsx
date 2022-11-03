import React, { MutableRefObject, useCallback, useRef, useState } from "react";
import Carousel from "nuka-carousel/lib/carousel";

import useWindowSize from "@lib/hooks/useWindowSize";
import useResizeObserver from "@lib/hooks/useResizeObserver";
import PresentProductStore from "@lib/store/simpleStore/presentProductStore";
import useTheme from "@lib/hooks/useTheme";
import { ReviewCard } from "@components/review";
import { useUI } from "@components/ui";
import { Star } from "@components/icons";
import { BORDER_BASE_WIDTH, SCREEN_XMD_SIZE } from "src/constants";
import { Row } from "src/styles/GlobalStyle";

import { product_01_Data } from "../../../MockData/productData";

type ReviewType = {
  userName: string;
  userHeight: number;
  userWeight: number;
  userGender: string; //"male" | "female";
  productId: string;
  productName: string;
  date: string;
  size: number | string;
  color: string;
  context: string;
  grade: number;
  fitSize: string; //"small" | "fit" | "big";
  fitColor: string; // "bright" | "fit" | "dark";
  fitThickness: string; // "tine" | "normal" | "thick";
};

interface ProductReviewProps {
  productId: string;
  //   productReview: Object{userName, grade, context,};
}

const ProductReview: React.FC<ProductReviewProps> = ({ productId }) => {
  const theme = useTheme();
  const preReviews: Array<ReviewType> = product_01_Data.review.slice(0, 4); // first 3 reviews

  const { width: windowWidth } = useWindowSize();

  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const carouselRef = useRef() as MutableRefObject<HTMLDivElement>;

  // MODAL
  const { setModalView, openModal } = useUI();
  const { setProduct } = PresentProductStore();

  const _handleClick = useCallback(() => {
    setProduct(product_01_Data.id, product_01_Data.name);
    setModalView("PRODUCT_REVIEW");
    openModal();
  }, []);
  // -------------------------------------------------------- //

  // SLIDE //
  const [slideShowRatio, setSlideShowRatio] = useState<number>(1.1);

  const observeCallback = (entries: any) => {
    for (let entry of entries) {
      setSlideShowRatio(entry.contentRect.width / 328 - 0.1);
    }
  };
  useResizeObserver({ callback: observeCallback, element: contentRef });
  // --------------------------------------------------------------------- //

  return (
    <div className="max-w-[1200px] mx-auto">
      <Row className="items-center">
        <h1 className="font-bold text-2xl pr-2">Review </h1>
        <div className="pb-[8px] pr-[2px] mr-1">
          <Star className="w-5 h-5" />
        </div>
        <h1 className="font-bold text-2xl pr-2">{product_01_Data.grade}</h1>
        {/* <span className="text-[5px] pr-2">●</span> */}
        {/* <h1 className="font-bold text-2xl pr-2">
          {product_01_Data.review.length}개의 리뷰
        </h1> */}
      </Row>
      {windowWidth < SCREEN_XMD_SIZE && (
        <>
          <div ref={contentRef} className="xmd:hidden" />
          {/* <Carousel
            innerRef={carouselRef}
            withoutControls={true}
            slidesToShow={slideShowRatio}
            // @ts-ignore
            scrollMode="remainder"
          >
            {preReviews.map((data, index) => (
              <ReviewCard
                key={index}
                reviewCardType={"PRODUCT_PAGE"}
                seeMoreHandler={_handleClick}
                {...data}
              />
            ))}
          </Carousel> */}
        </>
      )}
      <div className="snap-mandatory snap-x">
        {preReviews.map((data, index) => (
          <div className="snap-center">
            <ReviewCard
              key={index}
              reviewCardType={"PRODUCT_PAGE"}
              seeMoreHandler={_handleClick}
              {...data}
            />
          </div>
        ))}
      </div>
      {/* <Carousel
        innerRef={carouselRef}
        withoutControls={true}
        slidesToShow={slideShowRatio}
        // @ts-ignore
        scrollMode="remainder"
      >
        {preReviews.map((data, index) => (
          <ReviewCard
            key={index}
            reviewCardType={"PRODUCT_PAGE"}
            seeMoreHandler={_handleClick}
            {...data}
          />
        ))}
      </Carousel> */}
      {product_01_Data.review.length > 4 && (
        <div className="mt-5 mb-10 w-full flex justify-center">
          <button className="" onClick={_handleClick}>
            <span
              className="font-bold text-lg px-3 py-2"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: 8,
                textDecorationThickness: BORDER_BASE_WIDTH,
                textDecorationColor: theme.text_primary_color,
              }}
            >
              리뷰 더 보기
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductReview;
