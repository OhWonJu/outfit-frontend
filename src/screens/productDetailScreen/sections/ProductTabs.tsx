import React, { useEffect, useMemo, useRef, useState } from "react";
import { throttle } from "lodash";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import tw from "twin.macro";

import useTheme from "@lib/client/hooks/useTheme";
import { Container } from "@components/ui";

import {
  BORDER_BASE_WIDTH,
  CONTAINER_PADDING_HORIZONTAIL,
  NAV_HEIGHT,
  PRODUCT_TAB_HEIGHT,
} from "src/constants";
import { ReviewGrade, ReviewType } from "src/commonTypes/review";

import { ProductReview } from "./productDetailTabSections";

function getElementPosition(current: any): number {
  const element = current;
  const headerOffset = NAV_HEIGHT + PRODUCT_TAB_HEIGHT;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  return offsetPosition;
}

interface IProductTabsProps {
  id: string;
  reviewCount: number;
  preReviews: Array<ReviewType>;
  reviewGrade: ReviewGrade;
}

const ProductTabs: React.FC<IProductTabsProps> = ({
  id,
  reviewCount,
  preReviews,
  reviewGrade,
}) => {
  const theme = useTheme();

  const [screenValue, setScreenValue] = useState<number>(0);

  // scroll to some element //
  // SECTIONS REF -----------------------------------------------------
  const detailRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const reviewRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const qnaRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const refArray = [detailRef, reviewRef, qnaRef];

  // GET SECTIONS TOP ------------------------------------------------- //
  let sectionsTop: Array<number> = [];
  useEffect(() => {
    refArray.forEach(section => {
      sectionsTop.push(getElementPosition(section.current));
    });
  }, [refArray]);
  // useMemo(
  //   // 이러니까 에러가 안남...
  //   () => () => {
  //     refArray.forEach(section => {
  //       sectionsTop.push(getElementPosition(section.current));
  //     });
  //   },
  //   [refArray],
  // );
  // ------------------------------------------------- GET SECTIONS TOP //

  // TABS SCROLL ACTION --------------------------------------------------------- //
  function scrollToTargetAdjusted(ref: React.MutableRefObject<HTMLDivElement>) {
    const offsetPosition = getElementPosition(ref.current) + 1; // sticky 보정 1px

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  // --------------------------------------------------------- TABS SCROLL ACTION //

  const _tabSectionChangeHanlder = (event: any, value: any) => {
    scrollToTargetAdjusted(refArray[value]);
    // setScreenValue(value);
  };

  // SCROLL EVENT -------------------------------------------- //
  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        sectionsTop.forEach((sectionTop, index) => {
          if (window.scrollY >= sectionTop) {
            setScreenValue(index);
          }
        });
      }, 100),
    [refArray],
  );

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]);
  // -------------------------------------------- SCROLL EVENT //

  return (
    <div>
      <div
        className="sticky z-50"
        style={{
          top: NAV_HEIGHT - 1, // 약간 공간 뜨는거?????잡아주네? sticky 보정 1px
          backgroundColor: theme.background_color,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: PRODUCT_TAB_HEIGHT,
            borderBottom: BORDER_BASE_WIDTH,
            borderColor: theme.gray_light,
            paddingX: CONTAINER_PADDING_HORIZONTAIL,
          }}
        >
          <Tabs
            value={screenValue}
            // onChange={handleChange}
            sx={{ height: "100%" }}
            TabIndicatorProps={{
              style: {
                background: theme.text_primary_color,
                height: BORDER_BASE_WIDTH,
              },
            }}
            // centered
            // variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab
              onClick={e => _tabSectionChangeHanlder(e, 0)}
              label={<TabSpan selected={screenValue === 0}>Detail</TabSpan>}
            />
            <Tab
              onClick={e => _tabSectionChangeHanlder(e, 1)}
              label={
                <TabSpan selected={screenValue === 1}>
                  Review ({reviewCount})
                </TabSpan>
              }
            />
            <Tab
              onClick={e => _tabSectionChangeHanlder(e, 2)}
              label={<TabSpan selected={screenValue === 2}>Q & A</TabSpan>}
            />
          </Tabs>
        </Box>
      </div>
      <Container verticalSidebarVisible={false} style={{ borderTopWidth: 0 }}>
        <section ref={detailRef} className="h-[1000px] bg-red-400 ">
          Detail screen
        </section>
        <section ref={reviewRef} className="pt-6">
          <ProductReview
            productId={id}
            preReviews={preReviews}
            reviewGrade={reviewGrade}
          />
        </section>
        <section ref={qnaRef} className="h-[500px] bg-blue-400 pt-6">
          Q & A screen
        </section>
      </Container>
    </div>
  );
};

export default ProductTabs;

const TabSpan = styled.span<any>`
  color: ${props =>
    props.selected ? props.theme.text_primary_color : props.theme.gray_dark};
  ${tw`font-bold`}
`;
