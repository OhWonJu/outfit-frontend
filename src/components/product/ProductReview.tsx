import React from "react";

import useTheme from "@lib/hooks/useTheme";
import { Col, Row } from "src/styles/GlobalStyle";

import { product_01_Data } from "../../../MockData/productData";
import styled from "styled-components";
import tw from "twin.macro";
import { Star } from "@components/icons";
import { BORDER_BASE_WIDTH, BORDER_TINE_WIDTH } from "src/constants";

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

const ReviewCard: React.FC<ReviewType> = ({
  userName,
  userHeight,
  userWeight,
  userGender,
  productId,
  productName,
  date,
  size,
  color,
  context,
  grade,
  fitSize,
  fitColor,
  fitThickness,
}) => {
  const theme = useTheme();

  return (
    <div className="grid grid-cols-2 w-full aspect-2/1">
      {/* Review Infos */}
      <Col className="pr-4 justify-between">
        <div>
          {/* header */}
          <div className="mb-5 grid grid-cols-6 items-center">
            <Row className="col-start-1 col-span-4">
              <div className="w-10 h-10 bg-gray-500 mr-3 rounded-full" />
              <Col className="justify-center">
                <div>
                  <span className="font-bold">{userName}</span>
                </div>
                <div className="space-x-2">
                  <UserInfoSpan>
                    {userGender === "male" ? "남성" : "여성"}
                  </UserInfoSpan>
                  <UserInfoSpan>{userHeight}cm</UserInfoSpan>
                  <UserInfoSpan>{userWeight}kg</UserInfoSpan>
                </div>
              </Col>
            </Row>
            <div className="col-start-5 col-span-2 flex justify-end">
              <ProductInfoSpan>
                {size}, {color}
              </ProductInfoSpan>
            </div>
          </div>
          {/* fit info */}
          <Row className="space-x-1">
            <FitWrapper className="space-x-1 px-1 py-1">
              <FitTagSpan>사이즈</FitTagSpan>
              <FitGradeSpan>{fitSize}</FitGradeSpan>
            </FitWrapper>
            <FitWrapper className="space-x-1 px-1 py-1">
              <FitTagSpan>색상</FitTagSpan>
              <FitGradeSpan>{fitColor}</FitGradeSpan>
            </FitWrapper>
            <FitWrapper className="space-x-1 px-1 py-1">
              <FitTagSpan>두께</FitTagSpan>
              <FitGradeSpan>{fitThickness}</FitGradeSpan>
            </FitWrapper>
          </Row>
        </div>
        <div className="flex flex-cols my-5">
          <span className="font-medium">{context}</span>
        </div>
        <div className=" flex justify-end items-end">
          <span className="text-xs" style={{ color: theme.gray_dark }}>
            {date}
          </span>
        </div>
      </Col>

      {/* Review contexts */}
      <Col className="flex flex-col">
        <div className="w-full aspect-square bg-gray-500"></div>
      </Col>
    </div>
  );
};

const UserInfoSpan = styled.span`
  color: ${props => props.theme.gray_dark};
  ${tw`font-semibold text-sm`};
`;

const ProductInfoSpan = styled.span`
  color: ${props => props.theme.gray_dark};
  text-overflow: ellipsis;
  ${tw`font-semibold text-sm`};
`;

const FitWrapper = styled.div`
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_light};
  ${tw`space-x-1 px-3 py-1  rounded-full`};
`;

const FitTagSpan = styled.span`
  color: ${props => props.theme.gray_dark};
  ${tw`font-medium text-sm`};
`;
const FitGradeSpan = styled.span`
  ${tw`font-medium text-sm`};
`;

interface ProductReviewProps {
  productId: string;
  //   productReview: Object{userName, grade, context,};
}

export const ProductReview: React.FC<ProductReviewProps> = ({ productId }) => {
  const theme = useTheme();
  const preReviews: Array<ReviewType> = product_01_Data.review.slice(0, 4); // first 3 reviews

  return (
    <div className="max-w-[1200px] mx-auto">
      <Row className="items-center">
        <div className="pb-[8px] pr-[2px] mr-1">
          <Star className="w-5 h-5" />
        </div>
        <h1 className="font-bold text-2xl pr-2">{product_01_Data.grade}</h1>
        <span className="text-[5px] pr-2">●</span>
        <h1 className="font-bold text-2xl pr-2">
          {product_01_Data.review.length}개의 리뷰
        </h1>
      </Row>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-10 ">
        {preReviews.map((data, index) => (
          <ReviewCard key={index} {...data} />
        ))}
      </div>
      {product_01_Data.review.length > 4 && (
        <div className="my-10 w-full flex justify-center">
          <button className="">
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
