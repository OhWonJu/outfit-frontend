import React from "react";

import VerticalSidebarLayout from "@components/common/VerticalSidebarLayout";
import { RangeSlider } from "@components/ui";

export default function TestSidebar() {
  return (
    <VerticalSidebarLayout>
      <div>
        <h1 className="mb-3 text-lg font-semibold">Price Range</h1>
        <RangeSlider
          initMinValue={10000}
          initMaxValue={50000}
          step={5000}
          minDistance={5000}
        />
      </div>
    </VerticalSidebarLayout>
  );
}
