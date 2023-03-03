import React from "react";
import { SideNavModuleWrapper } from "../SideNavbar.styles";

const ColorPicker = () => {
  return (
    <SideNavModuleWrapper className="__categorie_color__">
      <h1 className="text-2xl font-bold">Color picker</h1>
      <div className="flex flex-wrap px-2 gap-3">
        {new Array(20).fill(null).map((_, index) => {
          return (
            <div
              key={index}
              className="w-7 h-7 bg-zinc-500 rounded-full hover:scale-[1.05]"
            />
          );
        })}
      </div>
    </SideNavModuleWrapper>
  );
};

export default ColorPicker;
