import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import useTheme from "@lib/hooks/useTheme";
import { Col } from "src/styles/GlobalStyle";
import { BORDER_TINE_WIDTH } from "src/constants";
import { EllipsisSpan } from "@components/ui";

type ReviewType = {
  reviewCardType: "MOBILE" | "DESKTOP";
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
      {reviewCardType === "MOBILE" && (
        <CardWrappeer className="shadow-lg">
          {/* INFOS */}
          <div className="grid grid-cols-5 gap-3 mb-3">
            {/* AVATOR */}
            <div className="col-start-1 col-span-1">
              <div className="rounded-full w-[50px] aspect-square bg-slate-200" />
            </div>
            {/* USER INFO */}
            <div className="col-start-2 col-span-4 flex flex-col">
              <div className="flex font-semibold text-lg items-center justify-between">
                {userName}
                <span className="text-xs" style={{ color: theme.gray_dark }}>
                  {size} {color}
                </span>
              </div>
              <div className="space-x-2">
                <UserInfoSpan>
                  {" "}
                  {userGender === "male" ? "남성" : "여성"}
                </UserInfoSpan>
                <UserInfoSpan>{userHeight}cm</UserInfoSpan>
                <UserInfoSpan>{userWeight}kg</UserInfoSpan>
              </div>
            </div>
          </div>
          {/* PHOTO & Rate */}
          <div className="flex flex-row mb-3">
            <div className="flex-1">
              <div className="w-[142px] aspect-square bg-slate-200" />
            </div>
            <Col className="px-2 flex-1 flex-wraps justify-between">
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
            </Col>
          </div>
          {/* Context */}
          <article className="my-5">
            <EllipsisSpan
              className="font-medium"
              context={context}
              onClick={seeMoreHandler}
            />
          </article>
          <div className="absolute bottom-0 right-0 pb-2 pr-3">
            <UserInfoSpan>{date}</UserInfoSpan>
          </div>
        </CardWrappeer>
      )}
      {reviewCardType === "DESKTOP" && null}
    </>
  );
};

export default ReviewCard;

export const CardWrappeer = styled.div`
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_light + 50};
  ${tw`relative w-[328px] min-h-[360px] xmd:w-[350px] xmd:h-[380px] rounded-md p-3`}
`;

const UserInfoSpan = styled.span`
  color: ${props => props.theme.gray_dark};
  ${tw`font-semibold text-xs`};
`;

const FitWrapper = styled.div`
  position: relative;
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_light};
  ${tw`flex flex-col items-end px-3 pt-[1rem] rounded-xl `};
`;

const FitTagSpan = styled.span`
  color: ${props => props.theme.gray_dark};
  ${tw`absolute top-1 left-3 font-medium text-xs`};
`;
const FitGradeSpan = styled.span`
  ${tw`font-semibold text-sm`};
`;
