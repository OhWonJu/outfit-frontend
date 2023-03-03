import React from "react";

import { RangeSlider } from "@components/ui";
import { SideNavModuleWrapper } from "../SideNavbar.styles";

const PriceRange = () => {
  return (
    <SideNavModuleWrapper className="__categorie_price__">
      <h1 className="text-2xl font-bold">Price Range</h1>
      <RangeSlider
        initMinValue={10000}
        initMaxValue={50000}
        step={5000}
        minDistance={5000}
      />
    </SideNavModuleWrapper>
  );
};

export default PriceRange;
