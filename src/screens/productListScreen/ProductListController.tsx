import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useWindowSize } from "react-use";

import { _GET } from "@lib/server/rootAPI";

import { Container } from "@components/ui";
import { ProductSoftCard } from "@components/pages/product";
import { CategorieSidebar } from "@components/verticalSidebar";

import { SCREEN_SIZE_XL } from "constants/constants";
import { TAKE } from "constants/products";

import { ProductListWrapper } from "./ProductList.styles";

const ProductListController = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [ref, inView] = useInView({
    rootMargin: "20%",
  });

  const router = useRouter();
  const urlCategory = useMemo(() => router.query.category, [router]);
  // console.log(router, urlCategory);

  // FETCHING PRODUCTS ===================================================== //
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
      fetchNextPage();
    }
  }, [inView]);
  // eact-intersection-observer
  // https://slog.website/post/8
  // react-virtualized
  // https://velog.io/@kimjh96/react-virtualized-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94

  const products = useMemo(
    () => (data ? data.pages.flatMap(page => page.res.items) : []),
    [data],
  );
  // ===================================================== FETCHING PRODUCTS //

  // const columnCount = useMemo(() => {
  //   const width =
  //     windowWidth < SCREEN_SIZE_MD
  //       ? windowWidth
  //       : windowWidth - VERTICAL_SIDEBAR_WIDTH;
  //   return Math.floor(width / 210);
  // }, [windowWidth]);

  return (
    <Container
      verticalSidebarVisible={true}
      verticalSidebarChildren={<CategorieSidebar categorie={urlCategory} />}
    >
      <div className="my-9">
        <div className="flex flex-wrap justify-items-center">
          {data &&
            products.map((item, index) => (
              <ProductListWrapper key={index} className="">
                <ProductSoftCard
                  key={index}
                  cardType={windowWidth < SCREEN_SIZE_XL ? "MOBILE" : "DESKTOP"}
                  data={item}
                />
              </ProductListWrapper>
            ))}
        </div>
      </div>
      <button ref={ref} className="w-full rounded my-20 bg-zinc-200 p-4">
        더보기
      </button>
    </Container>
  );
};

export default ProductListController;
