import React from "react";

import PresentProductStore from "@lib/store/simpleStore/presentProductStore";
import ModalLayout from "@components/common/ModalLayout";
import { ReviewType } from "types/review";
import ReviewCard from "./ReviewCard";

import { product_01_Data } from "MockData/productData";

interface ReviewProps {}

// children of modal
const Review: React.FC<ReviewProps> = ({}) => {
  const { productId, productName, setProduct } = PresentProductStore();

  // mock data
  const reviews: Array<ReviewType> = product_01_Data.review;

  return (
    <ModalLayout
      mobileForm={false}
      handleClose={() => setProduct("", "")}
      modalTitle={`후기 | ${productName}`}
      className="w-full md:w-[90%] md:max-w-[1300px] h-full md:max-h-[85%] xmd:max-h-[80%] lg:max-h-[70%]"
    >
      {/* Mobile Form.... */}
      <div className="grid screen-w-700:grid-cols-2  xl:grid-cols-3 gap-4 w-full h-full justify-center snap-mandatory snap-y overflow-scroll scrollbar-hide mt-6 py-6">
        {reviews.map((data, index) => (
          <div key={index} className="flex justify-center snap-center">
            <ReviewCard reviewCardType={"MOBILE"} {...data} />
          </div>
        ))}
      </div>
    </ModalLayout>
  );
};

export default Review;
