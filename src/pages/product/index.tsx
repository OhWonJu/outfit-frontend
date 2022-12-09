import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Container } from "@components/ui";
import { TestSidebar } from "@components/verticalSidebar";
import { TProduct } from "@prisma/client";

type TProductProps = TProduct & {
  thumbNails: {
    urls: Array<string>;
  };
  kategorie: { id: string; kategorie: string };
  type: { id: string; type: string; kategorieId: string };
};

const TAKE = 9;

const Product = () => {
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<TProductProps[]>([]);

  useEffect(() => {
    fetch(`api/products/get-products?skip=0&take=${TAKE}`)
      .then(res => res.json())
      .then(data => setProducts(data.items));
  }, []);

  return (
    <>
      <Container
        verticalSidebarVisible={true}
        verticalSidebarChildren={<TestSidebar />}
      >
        <div className="px-36 mt-36 mb-36">
          {products && (
            <div className="grid grid-cols-3 gap-5">
              {products.map(item => (
                <div key={item.id}>
                  <Image
                    alt={item.name}
                    src={
                      item.thumbNails.urls[0] ?? ""
                      // JSON.parse(JSON.stringify(item.thumbNails)).urls[0] ?? ""
                    }
                    width={300}
                    height={300}
                  />
                  <div>
                    <span>{item.name}</span>
                    <span>{item.price.toLocaleString("ko-KR")}원</span>
                  </div>
                  <div className="space-x-4 text-zinc-400">
                    <span className="text-zinc-400">
                      {item.kategorie.kategorie}
                    </span>
                    <span className="text-zinc-400">{item.type.type}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Product;
