import React, { useCallback } from "react";

import useTheme from "@lib/hooks/useTheme";
import { Row } from "src/styles/GlobalStyle";

import { Star } from "@components/icons";
import { BORDER_BASE_WIDTH } from "src/constants";
import ProductReviewCard from "./ProductReviewCard";

import { product_01_Data } from "../../../../MockData/productData";
import { useUI } from "@components/ui";
import IdStore from "@lib/store/simpleStore/idStore";

type ReviewType = {
  userName: string;
  userHeight: number;
  userWeight: number;
  userGender: string; //"male" | "female";
  productId: string;
  productName: string;
  date: string;
  size: number | string;
  color: string;
  context: string;
  grade: number;
  fitSize: string; //"small" | "fit" | "big";
  fitColor: string; // "bright" | "fit" | "dark";
  fitThickness: string; // "tine" | "normal" | "thick";
};

interface ProductReviewProps {
  productId: string;
  //   productReview: Object{userName, grade, context,};
}

const ProductReview: React.FC<ProductReviewProps> = ({ productId }) => {
  const theme = useTheme();
  const preReviews: Array<ReviewType> = product_01_Data.review.slice(0, 4); // first 3 reviews

  const { setModalView, openModal } = useUI();
  const { setProductId } = IdStore();

  const _handleClick = useCallback(() => {
    setProductId(product_01_Data.id);
    setModalView("PRODUCT_REVIEW");
    openModal();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <Row className="items-center">
        <div className="pb-[8px] pr-[2px] mr-1">
          <Star className="w-5 h-5" />
        </div>
        <h1 className="font-bold text-2xl pr-2">{product_01_Data.grade}</h1>
        <span className="text-[5px] pr-2">●</span>
        <h1 className="font-bold text-2xl pr-2">
          {product_01_Data.review.length}개의 리뷰
        </h1>
      </Row>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-14 gap-y-10 ">
        {preReviews.map((data, index) => (
          <ProductReviewCard key={index} {...data} />
        ))}
      </div>
      {product_01_Data.review.length > 4 && (
        <div className="my-10 w-full flex justify-center">
          <button className="" onClick={_handleClick}>
            <span
              className="font-bold text-lg px-3 py-2"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: 8,
                textDecorationThickness: BORDER_BASE_WIDTH,
                textDecorationColor: theme.text_primary_color,
              }}
            >
              리뷰 더 보기
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductReview;
