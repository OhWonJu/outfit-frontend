import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

import { BORDER_TINE_WIDTH, NAV_HEIGHT } from "src/constants";
import { BrandList, BrandMarquee } from "@components/fallowing";
import { Cross, Menu } from "@components/icons";
import useTheme from "@lib/client/hooks/useTheme";

const Fallowing = () => {
  const theme = useTheme();

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(prev => !prev);
  };

  return (
    <Wrapper className="">
      <Main nav={nav} className="h-full w-full">
        <BrandMarquee />
      </Main>
      <Nav active={nav}>
        <BrandList />
      </Nav>
      <NavButton onClick={toggleNav}>
        {nav ? (
          <IconWrapper nav={nav}>
            <Cross fill={theme.theme_comparsion_color} />
          </IconWrapper>
        ) : (
          <IconWrapper nav={nav}>
            <Menu fill={theme.theme_comparsion_color} />
          </IconWrapper>
        )}
      </NavButton>
    </Wrapper>
  );
};

export default Fallowing;

const Wrapper = styled.div`
  height: calc(100vh);
  padding-top: ${NAV_HEIGHT}px;
  ${tw`absolute inset-0 w-screen m-0 overflow-hidden`}
`;

const Main = styled.div<any>`
  position: relative;
  z-index: 20;
  ${props => {
    if (props.nav) {
      return css`
        transform: translateY(-50%);
      `;
    }
  }}
  transition: transform 500ms cubic-bezier(.13, .53, .38, .97);
`;

const NavButton = styled.button`
  transform: translateX(-50%);
  background-color: ${props => props.theme.theme_color};
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_light + 50};
  outline: none;
  z-index: 30;

  :hover {
    transform: translateX(-50%) scale(1.04);
  }
  :active {
    transform: translateX(-50%) scale(0.96);
  }

  ${tw`h-[4rem] w-[4rem] fixed left-1/2 bottom-[3rem] rounded-full cursor-pointer shadow-md transition-all`}
`;

const IconWrapper = styled.i<any>`
  transform: translate(-50%, -50%) scale(0.9);
  opacity: ${props => (props.nav ? 1 : 0)};

  ${NavButton}:hover & {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  ${tw`absolute left-1/2 top-1/2 transition-all`}
`;

const Nav = styled.nav<any>`
  z-index: 20;
  ${props => {
    if (props.active) {
      return css`
        transform: translateY(-50vh);
      `;
    }
  }}
  transition: transform 500ms cubic-bezier(.13, .53, .38, .97);

  ${tw`h-[50vh] w-full absolute left-0 bottom-[-50vh]`}
`;
