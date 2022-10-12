import React, { FC } from "react";
import { VerticalSidebar } from "@components/ui";

import styled from "styled-components";
import tw from "twin.macro";

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
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  verticalSidebarVisible = true,
  verticalSidebarChildren,
}) => {
  return (
    <Wrapper className={className}>
      {/* 왼편 사이드 바 */}
      {verticalSidebarVisible && (
        <VerticalSidebarUI>{verticalSidebarChildren}</VerticalSidebarUI>
      )}
      {children}
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  background-color: ${props => props.theme.background_color};
  ${tw`min-h-screen sm:w-screen flex flex-row`}
`;
