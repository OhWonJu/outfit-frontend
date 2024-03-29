import React, { useCallback } from "react";

import PresentProductStore from "@lib/client/store/simpleStore/presentProductStore";
import useTheme from "@lib/client/hooks/useTheme";
import { ReviewCard } from "@components/pages/review";
import { useUI } from "@components/ui";
import { Star } from "@components/icons";
import { BORDER_BASE_WIDTH } from "constants/constants";
import { Row } from "src/styles/GlobalStyle";

import { product_01_Data } from "../../../../MockData/productData";
import { ReviewGrade, ReviewType } from "src/commonTypes/review";
import { ReviewWriteCard } from "@components/pages/review/Review.styles";

import { Grade, GradeBackGround, GradeTitle, GradeWrapper, ReviewCardWrapper, ReviewWriteButton } from "../ProductDetail.styles";

interface ProductReviewProps {
  productId: string;
  preReviews: Array<ReviewType>;
  reviewGrade: ReviewGrade;
  //   productReview: Object{userName, grade, context,};
}

const ProductTabReview: React.FC<ProductReviewProps> = ({
  productId,
  preReviews,
  reviewGrade,
}) => {
  const { colorScore, satisfactionScore, sizeScore, thicknessScore } =
    reviewGrade;

  const theme = useTheme();

  // MODAL -------------------------------------------------- //
  const { setModalView, openModal } = useUI();
  const { setProduct } = PresentProductStore();

  const _handleClick = useCallback(() => {
    setProduct(product_01_Data.id, product_01_Data.name);
    setModalView("PRODUCT_REVIEW");
    openModal();
  }, []);
  // -------------------------------------------------- MODAL //

  const getPercent = useCallback((grade: number): number => {
    return Math.floor((grade / 5) * 100);
  }, []);

  return (
    <div className="_just_wrapper">
      {/* REVIEW GRADES */}
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
        {/* Review Grade */}
        <div className="hidden sm:grid grid-cols-2 grid-rows-2 space-y-3 mb-10">
          <Row className="items-center mr-12">
            <GradeTitle>만족도</GradeTitle>
            <GradeWrapper>
              <GradeBackGround>
                <Grade percent={getPercent(satisfactionScore)} />
              </GradeBackGround>
              <span className="font-semibold text-sm">
                {satisfactionScore.toFixed(1)}
              </span>
            </GradeWrapper>
          </Row>
          <Row className="items-center ml-12">
            <GradeTitle>사이즈</GradeTitle>
            <GradeWrapper>
              <GradeBackGround>
                <Grade percent={getPercent(sizeScore)} />
              </GradeBackGround>
              <span className="font-semibold text-sm">
                {sizeScore.toFixed(1)}
              </span>
            </GradeWrapper>
          </Row>
          <Row className="items-center mr-12">
            <GradeTitle>색감</GradeTitle>
            <GradeWrapper>
              <GradeBackGround>
                <Grade percent={getPercent(colorScore)} />
              </GradeBackGround>
              <span className="font-semibold text-sm">
                {colorScore.toFixed(1)}
              </span>
            </GradeWrapper>
          </Row>
          <Row className="items-center ml-12">
            <GradeTitle>두께</GradeTitle>
            <GradeWrapper>
              <GradeBackGround>
                <Grade percent={getPercent(thicknessScore)} />
              </GradeBackGround>
              <span className="font-semibold text-sm">
                {thicknessScore.toFixed(1)}
              </span>
            </GradeWrapper>
          </Row>
        </div>
      </div>

      {/* Review Card */}
      <ReviewCardWrapper className="flex w-full snap-mandatory snap-x overflow-scroll scrollbar-hide p-2 space-x-4">
        {preReviews.map((data, index) => (
          <div key={index} className="snap-center">
            <ReviewCard seeMoreHandler={_handleClick} {...data} />
          </div>
        ))}
        {true && (
          <div className="snap-center">
            <ReviewWriteCard>
              <ReviewWriteButton className="group p-10">
                <div className="group-hover:scale-105 transition-transform overflow-hidden font-bold">
                  후기 쓰기
                </div>
              </ReviewWriteButton>
            </ReviewWriteCard>
          </div>
        )}
      </ReviewCardWrapper>
      {/* more reviews */}
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
              후기 더 보기
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductTabReview;


