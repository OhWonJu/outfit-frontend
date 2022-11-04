import React, { MutableRefObject, useRef, useState } from "react";
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
  const carouselRef = useRef() as MutableRefObject<HTMLDivElement>;

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

  const clickHandler = (next: number): any => {
    setSlideIdx(next);
  };

  const throttleClickHandler = throttle(
    (condition: Function, index?: number) => {
      const next = condition();
      return clickHandler(next != null ? next : index);
    },
    500,
    { leading: true },
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
        "flex flex-row w-full md:max-w-[1200px] md:max-h-[600px]",
        {},
        className,
      )}
    >
      {/* CAROUSEL */}
      <div className="relative w-full md:w-[50%] aspect-square">
        <Carousel
          innerRef={carouselRef}
          withoutControls={true}
          slideIndex={slideIdx}
        >
          {imageUrls.map(data => (
            <div
              key={data.url}
              className="relative w-full aspect-square overflow-hidden"
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
        {/* CAROUSEL CONTROLLER */}
        <div
          className="md:hidden absolute top-[45%] left-2 flex sitems-center rounded-full "
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
          className="md:hidden absolute top-[45%] right-2 flex items-center rounded-full "
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
        className="relative hidden md:block md:w-[50%] aspect-square overflow-y-scroll scrollbar-hide overscroll-y-contain "
        onScroll={_handleScroll}
      >
        <div className="grid grid-cols-3">
          {imageUrls.map((data, index) => (
            <div
              key={data.url}
              className="relative w-full aspect-square overflow-hidden"
            >
              <Image
                onClick={() => throttleClickHandler((): any => null, index)}
                src={data.url}
                fill={true}
                sizes="100%"
                style={{ objectFit: "cover" }}
                alt="product image"
                // width={200}
                // height={200}
                // layout="responsive"
                // objectFit="cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
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
