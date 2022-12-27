import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { VerticalSidebar } from "@components/ui";
import {
  BORDER_BASE_WIDTH,
  NAV_HEIGHT,
  VERTICAL_SIDEBAR_WIDTH,
} from "src/constants";

// Vertical Side bar //
const VerticalSidebarUI: React.FC<{
  children?: any;
}> = ({ children }) => {
  return <VerticalSidebar>{children}</VerticalSidebar>;
};
// ---------------------------------------------------- //

interface ContainerProps {
  className?: string;
  children?: any;
  verticalSidebarVisible?: boolean;
  verticalSidebarChildren?: any;
  [key: string]: any;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  verticalSidebarVisible = true,
  verticalSidebarChildren,
  ...rest
}) => {
  return (
    <Wrapper className={className} {...rest}>
      <div className="sm:w-full flex flex-row">
        {/* 왼편 사이드 바 */}
        {verticalSidebarVisible && (
          <VerticalSidebarUI>{verticalSidebarChildren}</VerticalSidebarUI>
        )}
        <div
          className="w-full h-full px-5 md:px-14"
          style={{ marginLeft: verticalSidebarVisible ? VERTICAL_SIDEBAR_WIDTH : 0 }}
        >
          {children}
        </div>
      </div>
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  background-color: ${props => props.theme.background_color};
  border-top-width: ${BORDER_BASE_WIDTH}px;
  border-color: ${props => props.theme.gray_light};
  margin-top: ${NAV_HEIGHT}px;
  ${tw``}
`;
