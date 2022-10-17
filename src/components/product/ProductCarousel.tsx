import React, { useState } from "react";
import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import cn from "clsx";

import useTheme from "@lib/hooks/useTheme";
import { ChevronDown } from "@components/icons";

interface ProductCarouselProps {
  imageUrls: Array<{ url: string }>;
  className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  imageUrls,
  className,
}) => {
  const theme = useTheme();

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

  return (
    <div className={cn("flex flex-row", {}, className)}>
      <div className="w-[600px] h-[600px]">
        <Carousel withoutControls={true} slideIndex={slideIdx}>
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
      </div>
      <div
        className="relative flex flex-row flex-wrap overflow-x-scroll w-[600px] h-[600px]"
        onScroll={_handleScroll}
      >
        {imageUrls.map((data, index) => (
          <Image
            onClick={() => setSlideIdx(index)}
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
          style={{ backgroundColor: theme.black_primary + 90 }}
        >
          <span
            className="font-medium text-[1rem]"
            style={{ color: theme.text_secondary_color }}
          ></span>
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
