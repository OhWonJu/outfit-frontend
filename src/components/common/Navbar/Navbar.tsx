import { FC, useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import { throttle } from "lodash";

import { useUI } from "@components/ui";
import useTheme from "@lib/hooks/useTheme";
import { Menu, Search, ShoppingBag } from "@components/icons";

import { cartData } from "MockData/cartData";

interface Link {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: Link[];
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const theme = useTheme();

  const {
    toggleSidebar,
    closeSidebarIfPresent,
    // openModal,
    setSidebarView,
    openSidebar,
    setModalView,
    openModal,
  } = useUI();

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    }, 200);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <NavbarRoot $scrolled={hasScrolled}>
      <NavContent>
        {/* Logo */}
        <div
          className={`desktop--logo ${
            hasScrolled ? "block" : "hidden"
          } relative z-20 order-2 min-w-[74px] flex-1 xmd:order-none w-[74px] h-[20px] xmd:col-start-1 xmd:col-span-2`}
        >
          <button className="logo--link w-full h-full">
            <span className="text-sm font-extrabold font-sansSrif">OUTFIT</span>
          </button>
        </div>

        {/* Mobile  Menu Section */}
        <div className="mobile--nav--menu order-1 flex-1 xmd:hidden">
          <button
            className="text-[14px] font-bold font-sansSrif"
            onClick={() => {
              setSidebarView("MOBILE_MENU_VIEW");
              openSidebar();
            }}
          >
            <Menu />
          </button>
        </div>

        {/* Web Menu Section */}
        <div className="desktop--main--nav hidden xmd:flex align-start xmd:ml-14 xmd:col-start-3 xmd:col-span-7">
          <ul className="flex">
            <li className="h-full">
              <ListItem>
                <ListSpan>All</ListSpan>
              </ListItem>
            </li>
            <li className="h-full">
              <ListItem>
                <ListSpan>New Arrivals</ListSpan>
              </ListItem>
            </li>
            <li className="h-full">
              <ListItem>
                <ListSpan>Fallowing</ListSpan>
              </ListItem>
            </li>
            <li className="h-full">
              <ListItem>
                <ListSpan>Brand</ListSpan>
              </ListItem>
            </li>
            <li className="h-full">
              <ListItem>
                <ListSpan>And more...</ListSpan>
              </ListItem>
            </li>
          </ul>
        </div>

        {/* Util Section - cart, Avator, Search*/}
        <div className="desktop--cart-navigation order-3 flex-1 flex justify-end items-center xmd:col-start-10 xmd:col-span-3 space-x-4">
          <button onClick={() => {}}>
            <Search className="h-6 w-6" />
          </button>
          <button
            className="relative"
            onClick={() => {
              setSidebarView("CART_VIEW");
              openSidebar();
            }}
          >
            <ShoppingBag className="h-6 w-6" />
            <div
              className="absolute inline-flex right-[-1px] top-3.5  rounded-full whitespace-nowrap items-center justify-center"
              style={{
                color: theme.text_color_secondary,
                backgroundColor: theme.text_color_primary,
              }}
            >
              <div className="relative grid items-center w-[2px] align-baseline">
                {/* <span className="absolute text-[2rem] mx-1 font-medium">0</span> */}
              </div>
            </div>
          </button>
          <div className="p-1 hidden xmd:flex justify-center items-center">
            <button
              onClick={() => {
                setModalView("LOGIN_VIEW");
                openModal();
              }}
              className="bg-black opacity-50 rounded-full p-2 aspect-square"
            />
          </div>
        </div>
      </NavContent>
    </NavbarRoot>
  );
};

export default Navbar;

// Styles //
const NavbarRoot = styled.header<any>`
  background-color: ${props =>
    props.$scrolled ? props.theme.background_color : "transparent"};

  ${props => props.$scrolled && tw`shadow-sm`}
  ${tw`
    transition-all duration-300 h-[65px] flex items-center px-5 fixed w-full z-50 border-transparent
  `}
`;

const NavContent = styled.div<any>`
  ${tw`flex w-full justify-between items-center xmd:grid grid-cols-12 gap-1 xmd:gap-2`}
`;

const ListItem = styled.a`
  display: inline-flex;
  align-items: center;
  position: relative;
  :hover:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.8px;
    background-color: ${props => props.theme.text_color_primary};
  }
  ${tw`px-4 py-6 cursor-pointer`}
`;

const ListSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.theme.text_color_primary};
  /* ${tw`hover:border-b-[1.5px]`}
  border-bottom-color: ${props => props.theme.text_color_primary}; */
`;
