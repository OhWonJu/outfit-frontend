import React from "react";

import { SearchKeyword } from "@components/ui";
import {
  BrandSearchKeyword,
  KeywordSearchKeyword,
  ShoppingMallSearchKeyword,
} from "src/commonTypes/search";
import { Ul } from "../SearchDropDown.styles";

interface AutoSectionProps {
  autoBrand: Array<BrandSearchKeyword>;
  autoShop: Array<ShoppingMallSearchKeyword>;
  autoKeyword: Array<KeywordSearchKeyword>;
}

const AutoKeywordSection: React.FC<AutoSectionProps> = ({
  autoBrand,
  autoShop,
  autoKeyword,
}) => {
  return (
    <div className="flex flex-col h-full py-4">
      <h2 className="font-semibold text-lg">Auto Completed Keywords</h2>
      <div className="flex-grow flex flex-col pt-3 overflow-y-scroll scrollbar-hide">
        {/* BRAND */}
        <Ul>
          {autoBrand.map((v, i) => (
            <li key={i} className="w-full">
              <SearchKeyword
                thumbnail={v.thumbnail}
                keyword={v.keyword}
                keywordType={v.keywordType}
                tags={v.tags}
                clickHandler={() => console.log(v)}
              />
            </li>
          ))}
        </Ul>
        {/* SHOP */}
        <Ul>
          {autoShop.map((v, i) => (
            <li key={i} className="w-full">
              <SearchKeyword
                thumbnail={v.thumbnail}
                keyword={v.keyword}
                keywordType={v.keywordType}
                tags={v.tags}
                clickHandler={() => console.log(v)}
              />
            </li>
          ))}
        </Ul>
        {/* KEYWORD */}
        <ul className="w-full">
          {autoKeyword.map((v, i) => (
            <li key={i} className="w-full">
              <SearchKeyword
                keyword={v.keyword}
                keywordType={"KEYWORD"}
                clickHandler={() => console.log(v)}
                deletClickHandler={() => console.log("Delete")}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoKeywordSection;
