import React, { useEffect, useState } from "react";

import { Container } from "@components/ui";
import { TestSidebar } from "@components/verticalSidebar";
import { TProduct } from "@prisma/client";

const TAKE = 9;

const Product = () => {
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch(`api/products/get-products?skip=0&take=${TAKE}`)
      .then(res => res.json())
      .then(data => setProducts(data.items));
  });

  return (
    <>
      <Container
        verticalSidebarVisible={true}
        verticalSidebarChildren={<TestSidebar />}
      >
        <div>
          {products &&
            products.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
      </Container>
    </>
  );
};

export default Product;
