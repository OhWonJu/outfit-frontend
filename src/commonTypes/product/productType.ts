// common type ------------------------------------ //
export type TProductDiscount = {
  able: boolean;
  percent: number;
};

export type TKategorie = {
  id: string;
  kategorie: string;
};

export type TType = {
  id: string;
  type: string;
};

export type TProductStock = {
  option: string | number;
  quantity: number;
};

export type TProductColorCode = {
  name: string;
  code: string;
};

export type TProductThumbFile = {
  url: string;
};

export type TProductReviewGrade = {
  satisfactionScore: number;
  sizeScore: number;
  colorScore: number;
  thicknessScore: number;
};

export type TProductReview = {
  userName: string;
  userHeight: number;
  userWeight: number;
  //userGender: "male" | "female";
  userGender: string;
  productId: string;
  productName: string;
  date: string;
  size: number;
  color: string;
  context: string;
  grade: number;
  //fitSize: "small" | "fit" | "big";
  //fitColor: "bright" | "fit" | "dark";
  //fitThickness: "tine" | "normal" | "thic";
  fitSize: string;
  fitColor: string;
  fitThickness: string;
};
// ------------------------------------ common type //

// shoes type
export type TShoesSize = {
  size: number;
  width: number;
};
// ------------------------------------------------ //

export type TProductDetailData = {
  id: string;
  name: string;
  brand: string;
  price: number;
  discount: TProductDiscount;
  kategorie: Array<TKategorie>;
  // kategorie: Array<string>;
  type: TType;
  context: string;
  grade: number;
  reviewCount: number;
  size: Array<TShoesSize>; // | .. | ... | 이런식으로 해야할듯...
  stock: Array<TProductStock>;
  colorCode: Array<TProductColorCode>;
  thumbFiles: Array<TProductThumbFile>;
  reviewGrade: TProductReviewGrade;
  review: Array<TProductReview>;
};

// -------------
export type FallowingProductCardData = {
  brandName: string;
  productId: string;
  productName: string;
  thumbNail?: string;
};
