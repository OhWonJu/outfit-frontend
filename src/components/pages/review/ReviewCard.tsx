import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel from "nuka-carousel/lib/carousel";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import { Col, Row } from "src/styles/GlobalStyle";
import {
  BORDER_TINE_WIDTH,
  CARDS_BORDER_RADIUS,
  CARDS_PADDING,
} from "src/constants";
import { DotIndicator, EllipsisSpan } from "@components/ui";

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

import { product_01_Data } from "MockData/productData";
import { useLockBodyScroll } from "react-use";

type ReviewType = {
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
  const imageUrls = product_01_Data.thumbFiles;

  const carouselRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [slideIdx, setSlideIdx] = useState<number>(0);

  return (
    <Card className="">
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
      <CardImageSection className="overscroll-x-contain">
        <Carousel
          innerRef={carouselRef}
          withoutControls={true}
          slideIndex={slideIdx}
          beforeSlide={(_, v) => setSlideIdx(v)}
        >
          {imageUrls.map(data => (
            <div
              key={data.url}
              className="__Image_wrapper__ relative w-full h-[287px]  overflow-hidden"
            >
              <Image
                src={data.url}
                alt="product image"
                fill={true}
                sizes="100%"
                style={{ objectFit: "cover" }}
                // width={600}
                // height={600}
                // layout="responsive"
                // objectFit="cover"
                draggable={false}
              />
            </div>
          ))}
        </Carousel>
      </CardImageSection>
      <CardIndicatorWrapper className="">
        <DotIndicator current={slideIdx} length={imageUrls.length} />
      </CardIndicatorWrapper>
      <CardInfoSection className="">
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
