import React, { useEffect, useMemo, useState } from "react";
import { Grid } from "react-virtualized";
import {
  PRODUCT_CARD_WIDTH,
  SCREEN_SIZE_MD,
  SCREEN_SIZE_XL,
  VERTICAL_SIDEBAR_WIDTH,
} from "src/constants";
import { ProductCard } from "@components/pages/product";
import useWindowSize from "@lib/client/hooks/useWindowSize";

interface GridProps {
  data: any[];
  windowWidth: number;
  windowHeigth: number;
}

const ProductListGrid: React.FC<GridProps> = ({
  data,
  //   windowWidth,
  //   windowHeigth,
}) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [columnCount, setColumnCount] = useState(1);

  useEffect(() => {
    if (windowWidth >= 1000) {
      setColumnCount(4);
    } else if (windowWidth >= 600) {
      setColumnCount(2);
    } else {
      setColumnCount(1);
    }
  }, [windowWidth]);

  const cellRenderer = ({ columnIndex, key, rowIndex, style }: any) => {
    const item = data[rowIndex * columnCount + columnIndex];
    return (
      <ProductCard
        key={key}
        cardType={windowWidth < SCREEN_SIZE_XL ? "MOBILE" : "DESKTOP"}
        data={item}
      />
    );
  };

  console.log(columnCount)

  return (
    <Grid
      cellRenderer={cellRenderer}
      columnCount={columnCount}
      columnWidth={PRODUCT_CARD_WIDTH + 10}
      height={windowHeight}
      rowCount={data.length / columnCount}
      rowHeight={500}
      width={windowWidth}
    />
  );
};

export default ProductListGrid;
