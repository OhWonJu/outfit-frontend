import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import useTheme from "@lib/client/hooks/useTheme";
import { Col, Row } from "src/styles/GlobalStyle";
import {
  BORDER_TINE_WIDTH,
  CARDS_BORDER_RADIUS,
  CARDS_PADDING,
} from "src/constants";
import { EllipsisSpan } from "@components/ui";
import {
  AvatarWrapper,
  BuyerComment,
  BuyerInfo,
  BuyerInfoLeft,
  BuyerInfoRight,
  BuyerInfoText,
  BuyerInfoWrapper,
  Card,
  CardHeader,
  CardImageSection,
  CardIndicatorWrapper,
  CardInfoSection,
  Date,
  UserName,
} from "./Review.styles";

const UserInfo = ({
  theme,
  userName,
  userGender,
  userHeight,
  userWeight,
  size,
  color,
}: {
  theme: any;
  userName: string;
  userGender: string;
  userHeight: number;
  userWeight: number;
  size: string | number;
  color: string;
}) => {
  return (
    <div className="flex h-[50px] mb-3">
      {/* AVATOR */}
      <div className="w-[50px] mr-3">
        <div className="rounded-full w-full aspect-square bg-slate-200" />
      </div>
      {/* USER INFO */}
      <div className="flex flex-col flex-1">
        <div className="flex font-semibold text-lg items-center">
          {userName}
        </div>
        <div className="space-x-2">
          <UserInfoSpan>{userGender === "male" ? "남성" : "여성"}</UserInfoSpan>
          <UserInfoSpan>{userHeight}cm</UserInfoSpan>
          <UserInfoSpan>{userWeight}kg</UserInfoSpan>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-xs" style={{ color: theme.gray_dark }}>
          {size} {color}
        </span>
      </div>
    </div>
  );
};

const ProductGrade = ({
  fitSize,
  fitColor,
  fitThickness,
}: {
  fitSize: string;
  fitColor: string;
  fitThickness: string;
}) => {
  return (
    <>
      <FitWrapper>
        <FitTagSpan>사이즈</FitTagSpan>
        <FitGradeSpan>{fitSize}</FitGradeSpan>
      </FitWrapper>
      <FitWrapper>
        <FitTagSpan>색상</FitTagSpan>
        <FitGradeSpan>{fitColor}</FitGradeSpan>
      </FitWrapper>
      <FitWrapper>
        <FitTagSpan>두께</FitTagSpan>
        <FitGradeSpan>{fitThickness}</FitGradeSpan>
      </FitWrapper>
    </>
  );
};

const FitWrapper = styled.div`
  position: relative;
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_light};
  ${tw`flex flex-col items-end px-3 py-1 pt-[1rem] rounded-xl flex-1`};
`;

const FitTagSpan = styled.span`
  color: ${props => props.theme.gray_dark};
  ${tw`absolute top-1 left-3 font-medium text-xs`};
`;
const FitGradeSpan = styled.span`
  ${tw`font-semibold text-sm`};
`;
// ------------------------------------------------------------------------- //

type ReviewType = {
  reviewCardType: "MOBILE" | "DESKTOP";
  isModal?: boolean;
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
  isModal = false,
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

  const Wrapper = isModal ? ModalCardWrapper : CardWrappeer;

  return (
    <>
      {reviewCardType === "MOBILE" && (
        <Card>
          <CardHeader>
            <Row className="__AVATAR_USERNAME_DATE__ flex-1 h-full items-center">
              <Row className="flex-1 h-full items-center">
                <AvatarWrapper className="h-full aspect-square py-1">
                  <div className="rounded-full h-full aspect-square bg-gray-400" />
                </AvatarWrapper>
                <UserName>{userName}</UserName>
              </Row>
              <Row className="flex-1 justify-end h-full items-center space-x-1">
                <Date>신고하기</Date>
                <Date>{date.replace(/-/g, ".").slice(2)}</Date>
              </Row>
            </Row>
            <Row className="flex-1 items-center">
              <a>{grade}</a>
            </Row>
          </CardHeader>
          <CardImageSection>
            <div className="rounded-lg h-full w-full bg-sky-100" />
            <CardIndicatorWrapper>1/2</CardIndicatorWrapper>
          </CardImageSection>
          <CardInfoSection>
            <BuyerInfoWrapper className="mt-4 mb-2">
              <BuyerInfo>
                <BuyerInfoLeft>
                  <BuyerInfoText>맞춤 정보</BuyerInfoText>
                </BuyerInfoLeft>
                <BuyerInfoRight>
                  <BuyerInfoText>
                    {userGender === "male" ? "남성" : "여성"}
                  </BuyerInfoText>
                  <BuyerInfoText>{userHeight}cm</BuyerInfoText>
                  <BuyerInfoText>{userWeight}kg</BuyerInfoText>
                </BuyerInfoRight>
              </BuyerInfo>
              <BuyerInfo>
                <BuyerInfoLeft>
                  <BuyerInfoText>선택 옵션</BuyerInfoText>
                </BuyerInfoLeft>
                <BuyerInfoRight>
                  <BuyerInfoText>{size}</BuyerInfoText>
                  <BuyerInfoText>{color}</BuyerInfoText>
                </BuyerInfoRight>
              </BuyerInfo>
            </BuyerInfoWrapper>
            <BuyerComment className="">
              {isModal ? (
                <ModalContextSpan>{context}</ModalContextSpan>
              ) : (
                <EllipsisSpan
                  className="font-medium"
                  context={context}
                  onClick={seeMoreHandler}
                  lineClamp={4}
                  lineHeight={1.2}
                />
              )}
            </BuyerComment>
          </CardInfoSection>
        </Card>
      )}
      {reviewCardType === "DESKTOP" && (
        <Wrapper className="">
          {/* INFOS */}
          <UserInfo
            theme={theme}
            userName={userName}
            userGender={userGender}
            userHeight={userHeight}
            userWeight={userWeight}
            size={size}
            color={color}
          />
          {/* REVIEW INFO */}
          <div className="flex flex-col w-full">
            {/* RATE */}
            <Row className="space-x-2 mb-3">
              <ProductGrade
                fitColor={fitColor}
                fitSize={fitSize}
                fitThickness={fitThickness}
              />
            </Row>
            <div className="flex flex-row w-full">
              {/* PHOTO  */}
              {isModal ? (
                <div className="flex w-[50%] aspect-square mr-3">
                  <div className="w-full aspect-square bg-slate-200" />
                </div>
              ) : (
                <div className="flex h-[150px] aspect-square mr-3">
                  <div className="h-full aspect-square bg-slate-200" />
                </div>
              )}
              {/* Context */}
              <div className={`flex ${isModal && "w-[50%]"}`}>
                <article>
                  {isModal ? (
                    <ModalContextSpan>{context}</ModalContextSpan>
                  ) : (
                    <EllipsisSpan
                      className="font-medium"
                      context={context}
                      onClick={seeMoreHandler}
                      lineClamp={5}
                    />
                  )}
                </article>
              </div>
              <div className="absolute bottom-0 right-0 pb-3 pr-3">
                <UserInfoSpan>{date}</UserInfoSpan>
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default ReviewCard;

export const CardWrappeer = styled.div<any>`
  position: relative;
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_light + 50};
  background-color: ${props => props.theme.container_bg_color};
  border-radius: ${CARDS_BORDER_RADIUS}px;
  padding: ${CARDS_PADDING}px;
  ${tw`w-[328px] min-h-[360px] md:w-full md:min-h-0 md:h-[300px] shadow-md`}
`;

const UserInfoSpan = styled.span`
  color: ${props => props.theme.gray_dark};
  ${tw`font-semibold text-xs`};
`;

// MODAL STYLE //
const ModalCardWrapper = styled.div`
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_light + 50};
  background-color: ${props => props.theme.container_bg_color};
  border-radius: ${CARDS_BORDER_RADIUS}px;
  padding: ${CARDS_PADDING}px;
  ${tw`relative w-full min-h-[360px] shadow-md`}
`;

const ModalContextSpan = styled.span`
  ${tw`font-medium text-base`}
`;
