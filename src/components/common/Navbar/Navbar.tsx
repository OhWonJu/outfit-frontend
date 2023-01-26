import { useRouter } from "next/router";
import { FC, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { throttle } from "lodash";

import {
  LogoSection,
  NavbarRoot,
  NavContent,
  ListItem,
  ListSpan,
} from "./Navbar.styles";

import useTheme from "@lib/client/hooks/useTheme";
import { SYMBOL_TEXT } from "src/constants";
import { Link, useUI } from "@components/ui";
import { Menu, Search, ShoppingBag } from "@components/icons";
import Avatar from "../Avatar";

import { cartData } from "MockData/cartData";

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
  const [focused, setFocused] = useState(""); // 타입지정해주자

  useMemo(() => {
    if (!displayDropDown) {
      setFocused("");
    }
  }, [displayDropDown]);

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
        <LogoSection
          onMouseOver={() => {
            setFocused("");
            closeDropDown();
          }}
        >
          <div className="h-full w-[70px] mx-auto xmd:mx-0">
            <Link
              href={"/"}
              className={`logo--link ${
                hasScrolled || logoVisible ? "block" : "hidden"
              } xmd:w-fit h-full px-6 flex justify-center items-center`}
            >
              <span className="text-sm font-extrabold font-sansSrif">
                {SYMBOL_TEXT}
              </span>
            </Link>
          </div>
        </LogoSection>

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
        <div className="desktop--main--nav hidden xmd:flex align-start xmd:w-fit">
          <ul className="flex">
            <li className="store h-full">
              <ListItem
                focused={focused === "store"}
                currentPage={router.pathname.split("/")[1] === "store"}
                onMouseOver={() => {
                  setFocused("store");
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
                focused={focused === "new"}
                currentPage={router.pathname.split("/")[1] === "new"}
                onMouseOver={() => {
                  setFocused("new");
                  setDropDownView("TEST_VIEW2");
                  openDropDown();
                }}
              >
                <ListSpan>New Arrivals</ListSpan>
                {/* Legacy */}
                {/* {dropDownView === "TEST_VIEW2" && displayDropDown && (
                  <TestDropDown2 onClose={closeDropDown} />
                )} */}
              </ListItem>
            </li>
            <li className="fallowing h-full">
              <ListItem
                focused={focused === "fallowing"}
                currentPage={router.pathname.split("/")[1] === "fallowing"}
                onMouseOver={() => {
                  setFocused("");
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
                focused={focused === "brand"}
                currentPage={router.pathname.split("/")[1] === "brand"}
                onMouseOver={() => {
                  setFocused("");
                  closeDropDown();
                }}
              >
                <ListSpan>Brand</ListSpan>
              </ListItem>
            </li>
            <li className="etc h-full">
              <ListItem
                focused={focused === "etc"}
                currentPage={router.pathname.split("/")[1] === "etc"}
                onMouseOver={() => {
                  setFocused("");
                  closeDropDown();
                }}
              >
                <ListSpan>And more...</ListSpan>
              </ListItem>
            </li>
          </ul>
        </div>

        {/* Util Section - cart, Avator, Search */}
        <div
          className="desktop--cart-navigation order-3 flex-1 h-full flex justify-end items-center xmd:w-fit xmd:pr-5 space-x-4"
          onMouseOver={() => {
            setFocused("");
            closeDropDown();
          }}
        >
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
      </NavContent>
    </NavbarRoot>
  );
};

export default Navbar;
