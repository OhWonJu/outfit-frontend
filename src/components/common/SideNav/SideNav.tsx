import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

const SideNav = () => {
  return <Wrapper>SideNav</Wrapper>;
};

export default SideNav;

const Wrapper = styled.div`
  ${tw`bg-blue-500 min-h-screen hidden md:block md:w-[35%] md:min-w-[280px] md:max-w-[320px]`};
`;
