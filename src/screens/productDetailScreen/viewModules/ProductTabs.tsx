import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { throttle } from "lodash";
import { Tab, Tabs, Box } from "@mui/material";

import useTheme from "@lib/client/hooks/useTheme";
import { Container } from "@components/ui";

import {
  BORDER_BASE_WIDTH,
  CONTAINER_PADDING_HORIZONTAIL,
  NAV_HEIGHT,
  PRODUCT_TAB_HEIGHT,
} from "constants/constants";
import { ReviewGrade, ReviewType } from "src/commonTypes/review";

import ProductTabReview from "./ProductTabReview";
import { TabSpan } from "../ProductDetail.styles";

function getElementPosition(current: any): number {
  const element = current;
  const headerOffset = NAV_HEIGHT + PRODUCT_TAB_HEIGHT;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  return offsetPosition;
}

interface ProductTabsProps {
  id: string;
  reviewCount: number;
  preReviews: Array<ReviewType>;
  reviewGrade: ReviewGrade;
}

const ProductTabs: React.FC<ProductTabsProps> = ({
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
  // const refArray = [detailRef, reviewRef, qnaRef];
  const refArray = useMemo(() => [detailRef, reviewRef, qnaRef], []);

  const tabs = [
    { label: "Detail" },
    { label: `Review (${reviewCount})` },
    { label: "Q & A" },
  ];

  // GET SECTIONS TOP ------------------------------------------------- //
  let sectionsTop: Array<number> = [];
  useEffect(() => {
    refArray.forEach(section => {
      sectionsTop.push(getElementPosition(section.current));
    });
    return () => {
      sectionsTop = [];
    };
  }, [refArray]);
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

  // const _tabSectionChangeHanlder = (event: any, value: any) => {
  const _tabSectionChangeHanlder = useCallback(
    (_event: any, value: any) => {
      scrollToTargetAdjusted(refArray[value]);
    },
    [refArray],
  );

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
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                onClick={e => _tabSectionChangeHanlder(e, index)}
                label={
                  <TabSpan selected={screenValue === index}>
                    {tab.label}
                  </TabSpan>
                }
              />
            ))}
          </Tabs>
        </Box>
      </div>
      <Container verticalSidebarVisible={false} style={{ borderTopWidth: 0 }}>
        <section
          id="detail-section"
          ref={detailRef}
          className="h-[1000px] bg-red-400 "
        >
          Detail screen
        </section>
        <section id="review-section" ref={reviewRef} className="pt-6">
          <ProductTabReview
            productId={id}
            preReviews={preReviews}
            reviewGrade={reviewGrade}
          />
        </section>
        <section
          id="qna-section"
          ref={qnaRef}
          className="h-[500px] bg-blue-400 pt-6"
        >
          Q & A screen
        </section>
      </Container>
    </div>
  );
};

export default ProductTabs;
