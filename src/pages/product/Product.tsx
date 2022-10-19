import React from "react";

import { Container } from "@components/ui";
import { TestSidebar } from "@components/VerticalSidebar";

const Product = () => {
  return (
    <>
      <Container
        verticalSidebarVisible={true}
        verticalSidebarChildren={<TestSidebar />}
      >
        <div>Product</div>
      </Container>
    </>
  );
};

export default Product;
