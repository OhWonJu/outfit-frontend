import React from "react";

import VerticalSidebarLayout from "@components/common/VerticalSidebarLayout";
import useTheme from "@lib/client/hooks/useTheme";
import { EllipsisText } from "@components/ui";

const c = [
  {
    categorie: "Outer",
    types: ["sneakers", "loffer", "sandle", "canvas", "worker"],
  },

  {
    categorie: "Top",
    types: ["sneakers", "loffer", "sandle", "canvas", "worker"],
  },

  {
    categorie: "Bottom",
    types: ["sneakers", "loffer", "sandle", "canvas", "worker"],
  },

  {
    categorie: "Shoes",
    types: ["sneakers", "loffer", "sandle", "canvas", "worker"],
  },

  {
    categorie: "Acc",
    types: ["sneakers", "loffer", "sandle", "canvas", "worker"],
  },
];

const f = [
  "nice",
  "baon 바온보이",
  "nanamica",
  "98'c 98도씨",
  "YOUTH SERICE",
  "침착맨",
  "아무튼 레알 엄청 이름 긴 브렌드 진짜 길어서 어쩔줄 모르겠음",
];

interface Props {}

const StoreSidebar: React.FC<Props> = () => {
  const theme = useTheme();

  return (
    <VerticalSidebarLayout className="h-screen overflow-y-scroll scrollbar-hide overscroll-contain">
      <div className="__categorie__ mb-7">
        <h1 className="text-2xl font-bold">Categorie</h1>
        {c.map((d, i) => (
          <div key={i} className="__categorie__ mb-3">
            <h1 className="__categorie_type__ text-lg font-bold mb-3">
              {d.categorie}
            </h1>
            <div className="flex flex-wrap gap-3">
              {d.types.map((d, i) => (
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
        ))}
      </div>

      <div className="__fallowing__ mb-7">
        <h1 className="text-2xl font-bold">Fallowing</h1>
        <div className="flex flex-col space-y-3">
          {f.map((d, i) => (
            <div key={i} className="group flex flex-row w-full h-8 justify-betweent">
              <div className="__image_wrapper__ w-[20%] h-full items-center pr-1">
                <div className="w-full aspect-square bg-zinc-500 rounded-full group-hover:scale-[1.05]" />
              </div>
              <div className="flex w-[60%] h-full items-center">
                <EllipsisText
                  context={d}
                  lineClamp={1}
                  className="text-xs font-semibold"
                />
              </div>
              <div className="flex w-[20%] h-full items-center">
                <a
                  className="text-xs font-semibold"
                  style={{ color: theme.red_primary }}
                >
                  new
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="__categorie_brand__ mb-7">
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
      </div> */}
    </VerticalSidebarLayout>
  );
};

export default StoreSidebar;
