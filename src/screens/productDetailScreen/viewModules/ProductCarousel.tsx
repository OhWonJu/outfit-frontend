import React, { MutableRefObject, useRef, useState } from "react";
import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import cn from "clsx";
import throttle from "lodash.throttle";

import useTheme from "@lib/client/hooks/useTheme";
import { ICON_BUTTON_BLACK_OPACTIY } from "constants/constants";
import { DotIndicator } from "@components/ui";
import { ChevronDown } from "@components/icons";

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

  return (
    <div
      className={cn(
        "flex flex-row w-full md:max-w-[1200px] md:max-h-[600px] md:mx-auto",
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
          beforeSlide={(_, v) => setSlideIdx(v)}
        >
          {imageUrls?.map(data => (
            <div
              key={data?.url}
              className="relative w-full aspect-square overflow-hidden"
            >
              <Image
                priority
                src={data?.url}
                alt="product image"
                fill={true}
                sizes="100%"
                style={{ objectFit: "cover" }}
                draggable={false}
              />
            </div>
          ))}
        </Carousel>
        {/* CAROUSEL CONTROLLER */}
        <div className="flex w-full h-6 justify-center md:hidden">
          <DotIndicator current={slideIdx} length={imageUrls.length} />
        </div>
      </div>

      {/* IMAGE LIST */}
      <div
        // ref={hoverRef}
        className="relative hidden md:block md:w-[50%] aspect-square overflow-y-scroll scrollbar-hide overscroll-y-contain "
        onScroll={_handleScroll}
      >
        <div className="grid grid-cols-3">
          {imageUrls?.map((data, index) => (
            <div
              key={data?.url}
              className="relative w-full aspect-square overflow-hidden"
            >
              <Image
                priority
                onClick={() => throttleClickHandler((): any => null, index)}
                src={data?.url}
                alt="product image"
                fill={true}
                sizes="100%"
                style={{ objectFit: "cover" }}
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
