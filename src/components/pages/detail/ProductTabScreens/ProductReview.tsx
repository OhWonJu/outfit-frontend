import React, { useCallback } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import PresentProductStore from "@lib/client/store/simpleStore/presentProductStore";
import useTheme from "@lib/client/hooks/useTheme";
import useWindowSize from "@lib/client/hooks/useWindowSize";
import { ReviewCard } from "@components/pages/review";
import { useUI } from "@components/ui";
import { Star } from "@components/icons";
import { CardWrappeer } from "@components/pages/review/ReviewCard";
import { BORDER_BASE_WIDTH, SCREEN_SIZE_MD } from "src/constants";
import { Row } from "src/styles/GlobalStyle";
import { ReviewGrade, ReviewType } from "types/review";

import { product_01_Data } from "../../../../../MockData/productData";

interface ProductReviewProps {
  productId: string;
  //   productReview: Object{userName, grade, context,};
}

const ProductReview: React.FC<ProductReviewProps> = ({ productId }) => {
  const theme = useTheme();
  const { width: windowWith } = useWindowSize();

  // mock data
  const preReviews: Array<ReviewType> = product_01_Data.review.slice(0, 4); // first 3 reviews
  const {
    satisfactionScore,
    sizeScore,
    colorScore,
    thicknessScore,
  }: ReviewGrade = product_01_Data.reviewGrade;

  // MODAL
  const { setModalView, openModal } = useUI();
  const { setProduct } = PresentProductStore();

  const _handleClick = useCallback(() => {
    setProduct(product_01_Data.id, product_01_Data.name);
    setModalView("PRODUCT_REVIEW");
    openModal();
  }, []);
  // -------------------------------------------------------- //

  const getPercent = useCallback((grade: number): number => {
    return Math.floor((grade / 5) * 100);
  }, []);

  return (
    <div className="_wrapper max-w-[1200px] mx-auto">
      <Row className="items-center">
        <h1 className="font-bold text-2xl pr-2">Review </h1>
        <div className="pb-[8px] pr-[2px] mr-1">
          <Star className="w-5 h-5" />
        </div>
        <h1 className="font-bold text-2xl pr-2">{product_01_Data.grade}</h1>
        {/* <span className="text-[5px] pr-2">???</span> */}
        {/* <h1 className="font-bold text-2xl pr-2">
          {product_01_Data.review.length}?????? ??????
        </h1> */}
      </Row>
      {/* Review Grade */}
      <div className="hidden sm:grid grid-cols-2 grid-rows-2 space-y-3 mb-10">
        <Row className="items-center mr-12">
          <GradeTitle>?????????</GradeTitle>
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
          <GradeTitle>?????????</GradeTitle>
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
          <GradeTitle>??????</GradeTitle>
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
          <GradeTitle>??????</GradeTitle>
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
      {/* Review Card */}
      <ReviewCardWrapper className="flex md:grid md:grid-cols-2 md:gap-4 w-full snap-mandatory snap-x md:snap-none overflow-scroll scrollbar-hide p-2 space-x-4 md:space-x-0">
        {preReviews.map((data, index) => (
          <div key={index} className="snap-center">
            <ReviewCard
              reviewCardType={
                windowWith < SCREEN_SIZE_MD ? "MOBILE" : "DESKTOP"
              }
              seeMoreHandler={_handleClick}
              {...data}
            />
          </div>
        ))}
        {windowWith < 768 && (
          <div className="snap-center">
            <CardWrappeer className="w-full h-full">
              <ReviewWriteButton className="group p-10">
                <div className="group-hover:scale-105 transition-transform overflow-hidden font-bold">
                  ?????? ??????
                </div>
              </ReviewWriteButton>
            </CardWrappeer>
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
              ?????? ??? ??????
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductReview;

const ReviewCardWrapper = styled.div`
  @media screen and (max-width: 640px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  max-width: 1200px;
`;

const GradeTitle = styled.span`
  ${tw`w-[50%] font-medium mr-2`}
`;

const GradeWrapper = styled.div`
  ${tw`flex flex-row w-[50%] items-center`}
`;

const GradeBackGround = styled.div`
  position: relative;
  height: 4px;
  width: 100%;
  margin-right: 1rem;
  background-color: ${props => props.theme.gray_light};
  ${tw`rounded-full`};
`;

const Grade = styled.span<any>`
  width: ${props => props.percent}%;
  background-color: ${props => props.theme.black_primary};
  ${tw`absolute top-0 left-0 bottom-0 rounded-full`}
`;

const ReviewWriteButton = styled.button`
  background-color: ${props => props.theme.background_color};
  border-width: ${BORDER_BASE_WIDTH}px;
  border-color: ${props => props.theme.gray_light};

  & > div {
    color: ${props => props.theme.gray_primary};
  }

  :hover {
    background-color: ${props => props.theme.container_bg_color};
    border-width: 0px;
    & > div {
      color: ${props => props.theme.text_primary_color};
    }
  }

  ${tw`w-full h-full rounded-md transition-all border-dashed hover:border-solid hover:shadow-md`}
`;
