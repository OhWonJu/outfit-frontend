import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { throttle } from "lodash";

import useTheme from "@lib/hooks/useTheme";
import { NAV_HEIGHT, SYMBOL_TEXT } from "src/constants";
import { Link, useUI } from "@components/ui";
import Searchbar from "../Searchbar";
import { Menu, Search, ShoppingBag } from "@components/icons";
import Avatar from "../Avatar";

import { cartData } from "MockData/cartData";
import { TestDropDown, TestDropDown2 } from "../NavDroupDown";
import { useRouter } from "next/router";

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

  const router = useRouter();

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
          <Link
            href={"/"}
            className="logo--link w-full h-full flex justify-center"
          >
            <span className="text-sm font-extrabold font-sansSrif">
              {SYMBOL_TEXT}
            </span>
          </Link>
        </div>

        {/* Mobile  Menu Section */}
        <div className="mobile--nav--menu order-1 flex flex-1 justify-start items-center xmd:hidden">
          <button
            className="text-[14px] font-bold font-sansSrif"
            onClick={() => {
              setSidebarView("MOBILE_NAV_VIEW");
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
                currentPage={router.pathname.split("/")[1] === "store"}
                onMouseOver={() => {
                  setDropDownView("TEST_VIEW");
                  openDropDown();
                }}
              >
                <ListSpan>Store</ListSpan>
                {/* Legacy */}
                {dropDownView === "TEST_VIEW" && displayDropDown && (
                  <TestDropDown onClose={closeDropDown} />
                )}
              </ListItem>
            </li>
            <li className="new h-full">
              <ListItem
                currentPage={router.pathname.split("/")[1] === "new"}
                onMouseOver={() => {
                  setDropDownView("TEST_VIEW2");
                  openDropDown();
                }}
              >
                <ListSpan>New Arrivals</ListSpan>
                {/* Legacy */}
                {dropDownView === "TEST_VIEW2" && displayDropDown && (
                  <TestDropDown2 onClose={closeDropDown} />
                )}
              </ListItem>
            </li>
            <li className="fallowing h-full">
              <ListItem
                currentPage={router.pathname.split("/")[1] === "fallowing"}
                onMouseOver={() => {
                  closeDropDown();
                }}
              >
                <Link href={"/fallowing"}>
                  <ListSpan>Fallowing</ListSpan>
                </Link>
              </ListItem>
            </li>
            <li className="brand h-full">
              <ListItem
                currentPage={router.pathname.split("/")[1] === "brand"}
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
              className="flex justify-center items-center"
            >
              {false && (
                <div
                  className="w-7 h-7 border-2 rounded-full"
                  style={{ backgroundColor: theme.gray_primary }}
                />
              )}
              {true && <Avatar className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Search bar and Search DropDown */}
        {displayDropDown && dropDownView === "SEARCH_VIEW" && <Searchbar />}
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

  :hover {
    background-color: ${props => props.theme.background_color};
  }

  ${props => props.$scrolled && tw`shadow-md`}
  ${tw`
     sticky top-0 px-5 w-full z-50 border-transparent transition-shadow duration-300
  `}
`;

const NavContent = styled.div<any>`
  ${tw`flex w-full h-full justify-between items-center xmd:grid grid-cols-12 gap-1 xmd:gap-2`}
`;

const ListItem = styled.div<any>`
  display: inline-flex;
  align-items: center;
  position: relative;
  height: ${NAV_HEIGHT}px;

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

const ListSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.theme.text_primary_color};
  ${tw`flex justify-center items-center w-full h-full px-4 py-2 `}/* ${tw`hover:border-b-[1.5px]`}
  border-bottom-color: ${props => props.theme.text_primary_color}; */
`;
