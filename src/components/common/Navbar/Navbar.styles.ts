import styled, { css } from "styled-components";
import tw from "twin.macro";

import { NAV_HEIGHT } from "constants/constants";

export const NavbarRoot = styled.header<any>`
  height: ${NAV_HEIGHT}px;
  background-color: ${props =>
    props.$scrolled ? props.theme.background_color : "transparent"};

  :hover {
    background-color: ${props => props.theme.background_color};
  }

  ${props => props.$scrolled && tw`shadow-md`}
  ${tw`fixed top-0 px-5 xmd:px-14  w-full z-50 border-transparent transition-shadow duration-300`}
`;

export const NavContent = styled.div<any>`
  ${tw`flex w-full h-full justify-between items-center gap-1 xmd:gap-0`}
`;

export const LogoSection = styled.div<any>`
  ${tw`relative z-20 order-2 min-w-[70px] flex-1 h-full xmd:order-none xmd:max-w-[25%] xmd:justify-start`}
`;

export const ListItem = styled.div<any>`
  display: inline-flex;
  align-items: center;
  position: relative;
  height: ${NAV_HEIGHT}px;

  ${props => {
    if (props.focused) {
      return css`
        :before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1.8px;
          background-color: ${props => props.theme.text_primary_color};
        }
      `;
    }
  }}

  :hover:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.8px;
    background-color: ${props => props.theme.text_primary_color};
  }

  ${props => {
    if (props.currentPage) {
      return css`
        :before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1.8px;
          background-color: ${props => props.theme.text_primary_color};
        }
      `;
    }
  }}
  ${tw`cursor-pointer`}
`;

export const ListSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.theme.text_primary_color};
  ${tw`flex justify-center items-center w-full h-full px-4 py-2 `}
`;
