import React from "react";

import IdStore from "@lib/store/simpleStore/idStore";
import ModalLayout from "@components/common/ModalLayout";

interface ReviewProps {}

// children of modal
const Review: React.FC<ReviewProps> = ({}) => {
  const { productId, setProductId } = IdStore();

  return (
    <ModalLayout
      mobileForm={false}
      handleClose={() => setProductId("")}
      className="w-full md:w-[90%] md:max-w-[1200px] h-full md:max-h-[85%] xmd:max-h-[80%] lg:max-h-[70%]"
    >
      <div className="">{productId}</div>
    </ModalLayout>
  );
};

export default Review;
