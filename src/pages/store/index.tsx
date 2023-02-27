import React from "react";

import { Container } from "@components/ui";
import { StoreSidebar } from "@components/verticalSidebar";

function index() {
  return (
    <Container
      verticalSidebarVisible={true}
      verticalSidebarChildren={<StoreSidebar />}
    >
      <div className="my-9"></div>
    </Container>
  );
}

export default index;
