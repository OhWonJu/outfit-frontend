import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { Container } from "@components/ui";
import { TestSidebar } from "@components/verticalSidebar";
import { TProduct } from "@prisma/client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { _GET } from "@lib/server/rootAPI";
import { ProductCard } from "@components/pages/product";

const TAKE = 9;

const Product = () => {
  const [ref, inView] = useInView({
    rootMargin: "20%",
  });

  const _fetchPage = async ({ pageParam = 0 }) => {
    if (pageParam !== undefined)
      return {
        res: await _GET(
          `/api/products/get-products?skip=${pageParam}&take=${TAKE}`,
        ),
        pageParam,
      };
    return null;
  };

  const {
    data,
    error,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["product"],
    queryFn: _fetchPage,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.res.items?.length < TAKE) return undefined;
      return lastPage.pageParam + TAKE;
    },
  });

  useEffect(() => {
    if (ref && inView && !isFetchingNextPage) {
      // getProducts();
      fetchNextPage();
    }
  }, [inView]);
  // eact-intersection-observer
  //https://slog.website/post/8
  // react-virtualized
  // https://velog.io/@kimjh96/react-virtualized-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94

  const products = useMemo(
    () => (data ? data.pages.flatMap(page => page.res.items) : []),
    [data],
  );

  return (
    <Container
      verticalSidebarVisible={true}
      verticalSidebarChildren={<TestSidebar />}
    >
      <div className="mt-36 mb-36">
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {data &&
            products.map((item, index) => (
              <ProductCard key={index} data={item} />
            ))}
        </div>
      </div>
      <button ref={ref} className="w-full rounded my-20 bg-zinc-200 p-4">
        더보기
      </button>
    </Container>
  );
};

export default Product;
