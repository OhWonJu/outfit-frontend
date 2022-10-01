import { FC, useState, useEffect, ReactNode } from "react";
import throttle from "lodash.throttle";
import styled, { css } from "styled-components";
import useTheme from "@lib/hooks/useTheme";

/**
 * @deprecated
 */
const NavbarRoot: FC<any> = ({ children }) => {
  const theme = useTheme();
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
    <>{/* <div className="bg-[#F8F9FA] h-2 w-2"></div> */}</>
    // <div className={cn(s.root, { "shadow-magical": hasScrolled })}>
    //   {children}
    // </div>
  );
};

export default NavbarRoot;
