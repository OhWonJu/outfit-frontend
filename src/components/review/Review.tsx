import React from "react";

import PresentProductStore from "@lib/store/simpleStore/presentProductStore";
import ModalLayout from "@components/common/ModalLayout";
import ReviewCard from "./ReviewCard";

interface ReviewProps {}

// children of modal
const Review: React.FC<ReviewProps> = ({}) => {
  const { productId, productName, setProduct } = PresentProductStore();

  return (
    <ModalLayout
      mobileForm={false}
      handleClose={() => setProduct("", "")}
      modalTitle={`${productName} 리뷰`}
      className="w-full md:w-[90%] md:max-w-[1300px] h-full md:max-h-[85%] xmd:max-h-[80%] lg:max-h-[70%]"
    >
      <div className="">{productId}</div>
      {/* <ReviewCard reviewCardType="REVIEW_PAGE" /> */}
    </ModalLayout>
  );
};

export default Review;
