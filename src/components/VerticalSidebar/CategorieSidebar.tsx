import React from "react";

import VerticalSidebarLayout from "@components/common/VerticalSidebarLayout";
import { RangeSlider } from "@components/ui";

const c = ["sneakers", "loffer", "sandle", "canvas", "worker"];
const b = ["nice", "adidas", "new balance", "ballensiaga", "puma"];

interface Props {
  categorie: string | string[];
}

const CategorieSidebar: React.FC<Props> = ({ categorie }) => {
  return (
    <VerticalSidebarLayout className="h-screen overflow-y-scroll scrollbar-hide overscroll-contain">
      <h1 className="__categorie_url__ text-2xl font-bold mb-7">{categorie}</h1>

      <div className="__categorie_type__ mb-7">
        <h1 className="__categorie_type__ text-lg font-bold mb-3">Type</h1>
        <div className="flex flex-wrap gap-3">
          {c.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-11 space-y-[0.2rem] text-center"
            >
              <div className="w-11 aspect-square bg-zinc-500 rounded-full hover:scale-[1.05]" />
              <a className="text-xs">{d}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="__categorie_brand__ mb-7">
        <h1 className=" text-lg font-bold mb-3">Brand</h1>
        <div className="flex flex-wrap gap-3">
          {b.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-11 space-y-[0.2rem] text-center"
            >
              <div className="w-11 aspect-square bg-zinc-500 rounded-full hover:scale-[1.05]" />
              <a className="text-xs">{d}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="__categorie_price__ mb-7">
        <h1 className=" text-lg font-semibold mb-3">Price Range</h1>
        <RangeSlider
          initMinValue={10000}
          initMaxValue={50000}
          step={5000}
          minDistance={5000}
        />
      </div>

      <div className="__categorie_color__ mb-7">
        <h1 className="text-lg font-semibold mb-3">Color picker</h1>
        <div className="flex flex-wrap gap-3">
          {new Array(20).fill(null).map((_, index) => {
            return (
              <div className="w-8 h-8 bg-zinc-500 rounded-full hover:scale-[1.05]" />
            );
          })}
        </div>
      </div>
    </VerticalSidebarLayout>
  );
};

export default CategorieSidebar;
