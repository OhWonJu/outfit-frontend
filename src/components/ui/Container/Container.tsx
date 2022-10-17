import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { VerticalSidebar } from "@components/ui";

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
      {/* 왼편 사이드 바 */}
      {verticalSidebarVisible && (
        <VerticalSidebarUI>{verticalSidebarChildren}</VerticalSidebarUI>
      )}
      <div className="w-full h-full">{children}</div>
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  background-color: ${props => props.theme.background_color};
  ${tw`min-h-screen sm:w-screen flex flex-row`}
`;
