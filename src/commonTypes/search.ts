type Base = {
  thumbnail?: string;
  keyword: string;
  keywordType?: "BRAND" | "SHOP" | "KEYWORD";
};

export type BrandSearchKeyword = Base & {
  keywordType: "BRAND";
  tags: Array<string>;
};

export type ShoppingMallSearchKeyword = Base & {
  keywordType: "SHOP";
  tags: Array<string>;
};

export type KeywordSearchKeyword = {
  keyword: string;
  keywordType: "KEYWORD";
};
