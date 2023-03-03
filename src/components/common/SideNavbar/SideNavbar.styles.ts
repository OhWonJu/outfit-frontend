import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";

// COMMON ================================================ //
export const SideNavModuleWrapper = styled.div`
  ${tw`mb-9`}
`;

export const SideNavUl = styled.ul`
  ${tw`w-full space-y-3 mb-3`}
`;

export const SideNavLi = styled.li`
  ${tw`items-center w-full h-8`}
`;

export const ListButton = styled.button`
  :hover {
    background-color: ${props => props.theme.gray_primary + 15};
  }

  ${tw`flex flex-row items-center px-2 py-3 rounded-md w-full h-10 space-x-2 `}
`;

export const ListIconWrapper = styled.div`
  ${tw`w-8 h-8`}
`;

export const ListTitle = styled.a`
  ${tw`text-base`}
`;

export const More = styled.div`
  ${tw`items-center w-full h-8`}
`;
export const MoreButton = styled.button`
  ${tw`flex flex-row  items-center w-full h-full space-x-4 `}
`;
export const MoreIconWrapper = styled.div`
  ${tw`w-8 h-8 flex justify-center items-center`}
`;
export const MoreText = styled.div`
  ${tw`text-base`}
`;

// FALLOWINGS ============================================================= //
export const FlwNewProductText = styled.a`
  color: ${props => props.theme.red_primary};
  ${tw`text-xs font-semibold`};
`;

// USER =================================================================== //
export const HlightButton = styled.button`
  :hover {
    background-color: ${props => props.theme.gray_primary + 15};
  }

  ${tw`flex flex-row justify-between w-full px-2 py-3 rounded-md`}
`;
