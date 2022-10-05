import React, { FC } from "react";
import tw from "twin.macro";
import styled from "styled-components";

// import { SideNav } from "@components/common";


interface ContainerProps {
  className?: string;
  children?: any;
  sideNavVisible?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  sideNavVisible = true,
}) => {
  return (
    <Wrapper className={className}>
      {/* {sideNavVisible && <SideNav />} */}
      {children}
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  background-color: ${props => props.theme.background_color};
  ${tw`min-h-screen sm:w-screen flex flex-row`}
`;
