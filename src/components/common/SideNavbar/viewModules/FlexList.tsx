import React from "react";
import { SideNavModuleWrapper } from "../SideNavbar.styles";

interface Props {
  title?: string;
  subTitle?: string;
  list?: Array<any>;
  goToCategory?: Function;
  goToType?: Function;
}

const FlexList: React.FC<Props> = ({
  title,
  subTitle,
  list,
  goToCategory = (): any => null,
  goToType = (): any => null,
}) => {
  return (
    <SideNavModuleWrapper className="__Sidebar_flex_list__">
      {title && (
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => goToCategory(title) ?? null}
        >
          {title}
        </h1>
      )}
      {subTitle && <h1 className="text-lg font-bold mb-3">{subTitle}</h1>}
      <div className="flex flex-wrap px-2 gap-3">
        {list &&
          list.map((data, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-11 space-y-[0.2rem] text-center"
            >
              <div
                className="w-11 aspect-square bg-zinc-500 rounded-full hover:scale-[1.05]"
                onClick={() => goToType({ category: title, type: data })}
              />
              <a className="text-xs">{data}</a>
            </div>
          ))}
      </div>
    </SideNavModuleWrapper>
  );
};

export default FlexList;
