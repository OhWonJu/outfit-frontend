import { FC, useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import { throttle } from "lodash";

import useTheme from "@lib/hooks/useTheme";
import { NAV_HEIGHT, SYMBOL_TEXT } from "src/constants";
import { useUI } from "@components/ui";
import Searchbar from "../Searchbar";
import { Menu, Search, ShoppingBag } from "@components/icons";

import { cartData } from "MockData/cartData";
import { TestDropDown, TestDropDown2 } from "../NavDroupDown";

interface Link {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: Link[];
  logoVisible: boolean;
}

const Navbar: FC<NavbarProps> = ({ links, logoVisible }) => {
  const theme = useTheme();

  const {
    // toggleSidebar,
    // closeSidebarIfPresent,
    // openModal,
    setSidebarView,
    openSidebar,
    setModalView,
    openModal,
    setDropDownView,
    dropDownView,
    displayDropDown,
    openDropDown,
    closeDropDown,
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
            hasScrolled || logoVisible ? "block" : "hidden"
          } relative z-20 order-2 min-w-[74px] flex-1 xmd:order-none w-[74px] h-[20px] xmd:col-start-1 xmd:col-span-2`}
        >
          <button className="logo--link w-full h-full">
            <span className="text-sm font-extrabold font-sansSrif">
              {SYMBOL_TEXT}
            </span>
          </button>
        </div>

        {/* Mobile  Menu Section */}
        <div className="mobile--nav--menu order-1 flex flex-1 justify-start items-center xmd:hidden">
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
          <ul className="flex" onMouseLeave={closeDropDown}>
            <li className="store h-full">
              <ListItem
                onMouseOver={() => {
                  setDropDownView("TEST_VIEW");
                  openDropDown();
                }}
              >
                <ListSpan>Store</ListSpan>
                {/* Legacy */}
                {/* {dropDownView === "TEST_VIEW" && displayDropDown && (
                  <TestDropDown onClose={closeDropDown} />
                )} */}
              </ListItem>
            </li>
            <li className="new h-full">
              <ListItem
                onMouseOver={() => {
                  setDropDownView("TEST_VIEW2");
                  openDropDown();
                }}
              >
                <ListSpan>New Arrivals</ListSpan>
              </ListItem>
            </li>
            <li className="fallowing h-full">
              <ListItem
                onMouseOver={() => {
                  closeDropDown();
                }}
              >
                <ListSpan>Fallowing</ListSpan>
              </ListItem>
            </li>
            <li className="brand h-full">
              <ListItem
                onMouseOver={() => {
                  closeDropDown();
                }}
              >
                <ListSpan>Brand</ListSpan>
              </ListItem>
            </li>
            <li className="etc h-full">
              <ListItem
                onMouseOver={() => {
                  closeDropDown();
                }}
              >
                <ListSpan>And more...</ListSpan>
              </ListItem>
            </li>
          </ul>
        </div>

        {/* Util Section - cart, Avator, Search */}
        <div className="desktop--cart-navigation order-3 flex-1 flex justify-end items-center xmd:col-start-10 xmd:col-span-3 space-x-4">
          <button
            onClick={() => {
              setDropDownView("SEARCH_VIEW");
              openDropDown();
            }}
          >
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
            {cartData > 0 && (
              <div
                className="absolute inline-flex right-[-5px] top-[11px] rounded-full whitespace-nowrap items-center justify-center"
                style={{
                  backgroundColor: theme.text_primary_color,
                }}
              >
                <div
                  className="relative grid place-items-center w-5 h-5"
                  style={{ overflow: "hidden" }}
                >
                  <span
                    style={{
                      color: theme.text_secondary_color,
                    }}
                    className="absolute text-[0.5px] text-ellipsis"
                  >
                    {cartData <= 99 ? cartData : "99+"}
                  </span>
                </div>
              </div>
            )}
          </button>
          <div className="p-1 hidden xmd:flex justify-center items-center">
            <button
              onClick={() => {
                setModalView("LOGIN_VIEW");
                openModal();
              }}
              className="bg-black opacity-50 rounded-full p-2.5 aspect-square"
            />
          </div>
        </div>

        {/* Search bar and Search DropDown */}
        <Searchbar show={displayDropDown && dropDownView === "SEARCH_VIEW"} />
      </NavContent>
    </NavbarRoot>
  );
};

export default Navbar;

// Styles //
const NavbarRoot = styled.header<any>`
  height: ${NAV_HEIGHT}px;
  background-color: ${props =>
    props.$scrolled ? props.theme.background_color : "transparent"};

  ${props => props.$scrolled && tw`shadow-md`}
  /* ${tw`shadow-md`} */
  ${tw`
     sticky top-0 px-5 w-full z-50 border-transparent transition-shadow duration-300
  `}
`;

const NavContent = styled.div<any>`
  ${tw`flex h-full w-full justify-between items-center xmd:grid grid-cols-12 gap-1 xmd:gap-2`}
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
    background-color: ${props => props.theme.text_primary_color};
  }
  ${tw`px-4 py-2 h-[60px] cursor-pointer`}
`;

const ListSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.theme.text_primary_color};
  /* ${tw`hover:border-b-[1.5px]`}
  border-bottom-color: ${props => props.theme.text_primary_color}; */
`;
