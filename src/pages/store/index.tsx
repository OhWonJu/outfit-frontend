import React from "react";

import { Container } from "@components/ui";
import { StoreSidebar } from "@components/verticalSidebar";
import useWindowSize from "@lib/client/hooks/useWindowSize";
import { SCREEN_SIZE_XMD } from "constants/constants";
import { SideNavbar } from "@components/common/SideNavbar";

function index() {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  return (
    <Container
      verticalSidebarVisible={
        windowWidth && windowWidth > SCREEN_SIZE_XMD ? true : false
      }
      verticalSidebarChildren={<SideNavbar isFixed={true} />}
      widthLimit={false}
    >
      <div className="my-9"></div>
    </Container>
  );
}

export default index;
