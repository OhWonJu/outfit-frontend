import React from "react";

import useTheme from "@lib/client/hooks/useTheme";

const BrandList = () => {
  const theme = useTheme();

  return (
    <div
      className="h-full w-full"
      style={{ backgroundColor: theme.background_color }}
    >
      Brand List
    </div>
  );
};

export default BrandList;
