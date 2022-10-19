import React, { MutableRefObject, useCallback, useState } from "react";
import Image from "next/image";
// import {
//   clearAllBodyScrollLocks,
//   disableBodyScroll,
//   enableBodyScroll,
// } from "body-scroll-lock";
import Carousel from "nuka-carousel/lib/carousel";
import cn from "clsx";
import throttle from "lodash.throttle";
import { IconButton } from "@mui/material";

import useTheme from "@lib/hooks/useTheme";
import { ChevronDown, ChevronLeft, ChevronRight } from "@components/icons";
import { ICON_BUTTON_BLACK_OPACTIY } from "src/constants";
import { display } from "@mui/system";
// import useHover from "@lib/hooks/useHover";

interface ProductCarouselProps {
  parentRef: MutableRefObject<HTMLDivElement>;
  imageUrls: Array<{ url: string }>;
  className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  parentRef,
  imageUrls,
  className,
}) => {
  const theme = useTheme();

  // const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const [slideIdx, setSlideIdx] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const _handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (event.currentTarget.scrollTop > 0) {
      setScrolled(true);
      return;
    }
    if (event.currentTarget.scrollTop == 0) {
      setScrolled(false);
      return;
    }
  };

  // throttle //
  // throttle condition
  const goLeft = (goLeft: boolean) => {
    let next;
    if (goLeft) {
      if (slideIdx > 0) {
        next = slideIdx - 1;
      }
    } else {
      if (slideIdx < imageUrls.length - 1) {
        next = slideIdx + 1;
      }
    }
    return next;
  };

  const clickHandler = (next: number) => {
    setSlideIdx(next);
  };

  const throttleClickHandler = throttle(
    (condition: Function, index?: number) => {
      const next = condition();
      clickHandler(next != null ? next : index);
    },
    500,
    { leading: false },
  );
  // -------------------------------------------- //

  // body scroll rock //
  // useEffect(() => {
  //   const contentElement = parentRef.current;

  //   if (contentElement && isHovered) {
  //     disableBodyScroll(contentElement, { reserveScrollBarGap: true });
  //   } else {
  //     enableBodyScroll(contentElement);
  //   }

  //   return () => {
  //     clearAllBodyScrollLocks();
  //   };
  // }, [isHovered]);
  // --------------------------------------------------------------------- //

  return (
    <div
      className={cn(
        "flex flex-row w-full sm:max-w-[1200px] sm:max-h-[600px]",
        {},
        className,
      )}
    >
      {/* CAROUSEL */}
      <div className="relative w-full sm:w-[50%] h-[100%]">
        <Carousel
          withoutControls={true}
          slideIndex={slideIdx}
          afterSlide={index => setSlideIdx(index)}
        >
          {imageUrls.map((data, index) => (
            <Image
              key={index}
              src={data.url}
              alt="product image"
              width={600}
              height={600}
              layout="responsive"
              objectFit="cover"
            />
          ))}
        </Carousel>
        {/* CAROUSEL CONTROLLER */}
        <div
          className="sm:hidden absolute top-[45%] left-2 flex sitems-center rounded-full "
          style={{
            backgroundColor: theme.black_primary + ICON_BUTTON_BLACK_OPACTIY,
          }}
        >
          {slideIdx > 0 && (
            <IconButton
              onClick={() => throttleClickHandler(() => goLeft(true))}
            >
              <ChevronLeft
                className="w-5 h-5"
                stroke={theme.text_secondary_color}
                strokeWidth={2}
              />
            </IconButton>
          )}
        </div>
        <div
          className="sm:hidden absolute top-[45%] right-2 flex items-center rounded-full "
          style={{
            backgroundColor: theme.black_primary + ICON_BUTTON_BLACK_OPACTIY,
          }}
        >
          {slideIdx < imageUrls.length - 1 && (
            <IconButton
              onClick={() => throttleClickHandler(() => goLeft(false))}
            >
              <ChevronRight
                className="w-5 h-5"
                stroke={theme.text_secondary_color}
                strokeWidth={2}
              />
            </IconButton>
          )}
        </div>
      </div>

      {/* IMAGE LIST */}
      <div
        // ref={hoverRef}
        className="relative hidden sm:flex flex-row flex-wrap overflow-y-scroll scrollbar-hide overscroll-y-contain w-[50%]"
        onScroll={_handleScroll}
      >
        {imageUrls.map((data, index) => (
          <Image
            onClick={() => throttleClickHandler((): any => null, index)}
            key={index}
            src={data.url}
            width={200}
            height={200}
            alt="product image"
            objectFit="cover"
            draggable={false}
          />
        ))}
        {/* Notic for scroll */}
        <div
          className={`absolute left-[48%] bottom-[10px] p-2 flex items-center rounded-full transition-opacity duration-500 ${
            imageUrls.length > 9 && !scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundColor: theme.black_primary + ICON_BUTTON_BLACK_OPACTIY,
          }}
        >
          <ChevronDown
            className="w-5 h-5"
            stroke={theme.text_secondary_color}
            strokeWidth={2}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
