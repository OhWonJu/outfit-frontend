import useTheme from "@lib/hooks/useTheme";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {
  BORDER_BASE_WIDTH,
  CONTAINER_PADDING_HORIZONTAIL,
  NAV_HEIGHT,
} from "src/constants";
import styled from "styled-components";
import cn from "clsx";
import tw from "twin.macro";
import { Container } from "@components/ui";

interface TabPanelProps {
  value: any;
  index: number;
  children: any;
  className?: string;
  [key: string]: any;
}

const TabPanel: React.FC<TabPanelProps> = ({
  value,
  index,
  children,
  className,
  ...rest
}) => {
  const rootClassName = cn("my-12", {}, className);

  return (
    <>
      {value == index && (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`horizontal-tabpanel-${index}`}
          aria-labelledby={`horizontal-tab-${index}`}
          className={rootClassName}
          {...rest}
        >
          {value === index && <div>{children}</div>}
        </div>
      )}
    </>
  );
};

interface ProductTabsProps {
  id: string;
  //   detailFileUrl: string;
  reviewCount: number;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ id, reviewCount }) => {
  const theme = useTheme();

  const [screenValue, setScreenValue] = useState<number>(0);
  const handleChange = (event: any, value: any) => {
    setScreenValue(value);
  };

  return (
    <div>
      <div
        className="sticky z-50"
        style={{
          top: NAV_HEIGHT,
          backgroundColor: theme.background_color,
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderBottom: BORDER_BASE_WIDTH,
            borderColor: theme.gray_light,
            paddingX: CONTAINER_PADDING_HORIZONTAIL,
          }}
        >
          <Tabs
            value={screenValue}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                background: theme.text_primary_color,
                height: BORDER_BASE_WIDTH,
              },
            }}
            centered
            variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab
              label={<TabSpan selected={screenValue === 0}>Detail</TabSpan>}
            />
            <Tab
              label={
                <TabSpan selected={screenValue === 1}>
                  Review ({reviewCount})
                </TabSpan>
              }
            />
            <Tab
              label={<TabSpan selected={screenValue === 2}>Q & A</TabSpan>}
            />
          </Tabs>
        </Box>
      </div>
      <Container verticalSidebarVisible={false} style={{ borderTopWidth: 0 }}>
        <TabPanel value={screenValue} index={0} dir={theme.direction}>
          <div className="min-h-[5000px]">Detail screen</div>
        </TabPanel>
        <TabPanel value={screenValue} index={1} dir={theme.direction}>
          <div className="min-h-[5000px]">Review screen</div>
        </TabPanel>
        <TabPanel value={screenValue} index={2} dir={theme.direction}>
          <div>Q & A screen</div>
        </TabPanel>
      </Container>
    </div>
  );
};

export default ProductTabs;

const TabSpan = styled.span<any>`
  color: ${props =>
    props.selected ? props.theme.text_primary_color : props.theme.gray_dark};
  ${tw`font-bold`}
`;
