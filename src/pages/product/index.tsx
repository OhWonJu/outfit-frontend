import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { Container } from "@components/ui";
import { TestSidebar } from "@components/verticalSidebar";
import { TProduct } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { _GET } from "@lib/server/rootApi";

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

  const res = useQuery({
    queryKey: ["product", "shoes", "sneakers"],
    queryFn: async () =>
      await _GET(
        `/api/products/get-products?skip=${skip}&take=${TAKE}`,
        (data: any) => {
          const list = products.concat(data);
          setProducts(list);
        },
      ),
  });

  const getProducts = useCallback(() => {
    const next = skip + TAKE;
    setSkip(next);
    res.refetch({ queryKey: ["product", "shoes", "sneakers"] });
  }, [skip, products]);

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
                    height={200}
                  />
                  <div className="flex">
                    <span>{item.name}</span>
                    <span className="ml-auto">
                      {item.price.toLocaleString("ko-KR")}원
                    </span>
                  </div>
                  <div className="text-zinc-400">
                    <span className="text-zinc-400">
                      {item.kategorie.kategorie} {" > "}
                    </span>
                    <span className="text-zinc-400">{item.type.type}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="w-full rounded my-20 bg-zinc-200 p-4"
          onClick={getProducts}
        >
          더보기
        </button>
      </Container>
    </>
  );
};

export default Product;
