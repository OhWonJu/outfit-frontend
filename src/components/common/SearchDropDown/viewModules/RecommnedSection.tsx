import { Tag } from "@components/ui";
import React from "react";

const cardData = [
  "이게",
  "좋을듯?",
  "아님",
  "말고",
  "ㅋㅋㄹ",
  "F/W",
  "CityBoy",
  "Nautica",
  "크롭",
  "아우터",
];

function RecommnedSection() {
  return (
    <div className="flex flex-col h-full py-4">
      <h2 className="font-semibold text-lg">
        Recommed Keywords
      </h2>
      <div className="flex flex-wrap pt-3 overflow-y-scroll">
        {cardData.map((v, i) => (
          <Tag key={i} context={v} />
        ))}
      </div>
    </div>
  );
}

export default RecommnedSection;
