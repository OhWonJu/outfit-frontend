import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import useTheme from "@lib/hooks/useTheme";
import { Col, Row } from "src/styles/GlobalStyle";

import { BORDER_TINE_WIDTH } from "src/constants";
import { EllipsisSpan } from "@components/ui";

type ReviewType = {
  reviewCardType: "PRODUCT_PAGE" | "REVIEW_PAGE";
  seeMoreHandler?: Function;
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
  reviewCardType,
  seeMoreHandler,
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
    <>
      {reviewCardType === "PRODUCT_PAGE" && (
        <div className="grid grid-cols-2 w-full aspect-2/1 shadow-md rounded-lg">
          {/* Review Infos */}
          <Col className="pt-4 px-4 pb-2 justify-between">
            <div>
              {/* header */}
              <div className="mb-5 grid grid-cols-6 items-center">
                <Row className="col-start-1 col-span-4">
                  <div className="w-10 h-10 bg-gray-300 mr-3 rounded-full" />
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
              <Row className="flex-wraps space-x-1">
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
            <article className="my-5">
              <EllipsisSpan
                className="font-medium"
                context={context}
                onClick={seeMoreHandler}
              />
            </article>
            <div className=" flex justify-end items-end">
              <span className="text-xs" style={{ color: theme.gray_dark }}>
                {date}
              </span>
            </div>
          </Col>

          {/* Review contexts */}
          <Col className="flex flex-col">
            <div className="w-full aspect-square bg-gray-300 rounded-tr-lg rounded-br-lg"></div>
          </Col>
        </div>
      )}
      {reviewCardType === "REVIEW_PAGE" && null}
    </>
  );
};

export default ReviewCard;

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
  position: relative;
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_light};
  ${tw`flex flex-col items-end space-x-1 px-3 pt-[1.1rem] rounded-xl `};
`;

const FitTagSpan = styled.span`
  color: ${props => props.theme.gray_dark};
  ${tw`absolute top-1 left-2 font-medium text-xs`};
`;
const FitGradeSpan = styled.span`
  ${tw`font-semibold text-sm`};
`;
