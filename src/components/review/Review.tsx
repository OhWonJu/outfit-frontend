import React from "react";

import PresentProductStore from "@lib/store/simpleStore/presentProductStore";
import ModalLayout from "@components/common/ModalLayout";
import { ReviewType } from "types/review";
import ReviewCard from "./ReviewCard";
import useWindowSize from "@lib/hooks/useWindowSize";
import { SCREEN_SIZE_MB } from "src/constants";

import { product_01_Data } from "MockData/productData";

interface ReviewProps {}

// children of modal
const Review: React.FC<ReviewProps> = ({}) => {
  const { productId, productName, setProduct } = PresentProductStore();

  const { width: windowWith } = useWindowSize();

  // mock data
  const reviews: Array<ReviewType> = product_01_Data.review;

  return (
    <ModalLayout
      mobileForm={false}
      handleClose={() => setProduct("", "")}
      modalTitle={`후기 | ${productName}`}
      className="w-full md:w-[90%] md:max-w-[1300px] h-full md:max-h-[85%] xmd:max-h-[80%] lg:max-h-[70%]"
    >
      <div className="md:grid md:grid-cols-6 mt-6 w-full h-full">
        <div className="hidden md:block md:col-start-1 md:col-span-2">
          Filter
        </div>
        <div className="grid md:col-start-3 md:col-span-4 gap-4 w-full h-full justify-center overflow-scroll pl-2 pr-5 py-2">
          {reviews.map((data, index) => (
            <div key={index} className="flex justify-center snap-center">
              <ReviewCard
                reviewCardType={
                  windowWith < SCREEN_SIZE_MB ? "MOBILE" : "DESKTOP"
                }
                isModal={true}
                {...data}
              />
            </div>
          ))}
        </div>
      </div>
    </ModalLayout>
  );
};

export default Review;
