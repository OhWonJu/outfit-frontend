import { RangeSlider } from "@components/ui";
import React from "react";

export default function TestSidebar() {
  return (
    <div className="px-4">
      TestSidebar
      <RangeSlider
        initMinValue={10000}
        initMaxValue={50000}
        step={5000}
        minDistance={5000}
      />
    </div>
  );
}
