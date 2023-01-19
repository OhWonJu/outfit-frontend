import React, { useRef, useState } from "react";

import ProductDetailView from "./ProductDetailView";

import { ProductInfo, ProductTabs } from "./sections";

import { product_01_Data } from "MockData/productData";

const productDetailController = () => {
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // Product Info States ----------------------------------------- //
  const [selectSize, setSelectSize] = useState<number>(null);
  const [selectColor, setSelectColor] = useState<string>(null);
  // tag //
  const [tagSelected, setTagSelected] = useState<Array<string>>([]);
  const _tagClickHandler = (tag: string) => {
    if (tagSelected.includes(tag)) {
      setTagSelected(tagSelected.filter(t => t !== tag));
    } else {
      setTagSelected(prev => [...prev, tag]);
    }
  };
  // ----------------------------------------- Product Info States //

  // Divided Views ----------------------------------------- // // 이딴식으로 하는게 맞나...
  const PRODUCT_INFO = (
    <ProductInfo
      data={product_01_Data}
      selectSize={selectSize}
      setSelectSize={setSelectSize}
      selectColor={selectColor}
      setSelectColor={setSelectColor}
      tagSelected={tagSelected}
      _tagClickHandler={_tagClickHandler}
    />
  );

  const PRODUCT_TABS = (
    <ProductTabs
      id={product_01_Data.id}
      reviewCount={product_01_Data.reviewCount}
      preReviews={product_01_Data.review.slice(0, 4)}
      reviewGrade={product_01_Data.reviewGrade}
    />
  );
  // ----------------------------------------- Divided Views //

  return (
    <ProductDetailView
      contentRef={contentRef}
      name={product_01_Data.name}
      thumbFiles={product_01_Data.thumbFiles}
      PRODUCT_INFO={PRODUCT_INFO}
      PRODUCT_TABS={PRODUCT_TABS}
    />
  );
};

export default productDetailController;
