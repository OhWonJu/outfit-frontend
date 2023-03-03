import React, { useMemo } from "react";

import FixedSidebar from "./FixedSideNavbar/FixedSideNavbar";
import ToggleSidebar from "./ToggleSideNavbar/ToggleSideNavbar";
import {
  Categories,
  ColorPicker,
  Fallowings,
  FlexList,
  LikeList,
  PriceRange,
  User,
} from "./viewModules";

import { categorie, fallowings, likeList, brand } from "./SideNavbarModel";
import { useRouter } from "next/router";

interface Props {
  isFixed?: boolean;
  [key: string]: any;
}

const SidebarNavController: React.FC<Props> = ({ isFixed, ...rest }) => {
  const router = useRouter();
  const category = useMemo(() => router.query.category ?? "all", [router]);

  // DATA ==================================== //
  const categories = categorie;
  const lists = likeList;
  const fallow = fallowings;
  // ==================================== DATA //

  // GoTo Handler ================================== //
  const goToCategory = (category: string) => router.push(`/store/${category}`);
  const goToType = ({ category, type }: { category: string; type: string }) => {
    router.push(`/store/${category}?type=${type}`);
  };
  // ================================== GoTo Handler //

  // TSX ===================================== //
  const USER = <User />;
  let TYPES = null;
  let BRANDS = null;
  let PRICE_RANGE = null;
  let COLOR_PICKER = null;
  // 페이지 네이션으로 리스트 더받기 짜르기 헨들링 구현해야함.
  const LIKE_LIST = <LikeList likeList={lists} />;
  const FALLOWINGS = <Fallowings fallowings={fallow} />;

  let VIEW_MODULE: Array<JSX.Element> = [];
  // ===================================== TSX //

  // 세부 카테고리가 주어진 경우
  if (category && category !== "all") {
    const { categorie, types } = categories?.find(
      c => c.categorie === category,
    );
    const brands = brand;
    TYPES = (
      <FlexList
        title={categorie}
        list={types}
        goToCategory={goToCategory}
        goToType={goToType}
      />
    );
    BRANDS = <FlexList title="Brands" list={brands} />;
    COLOR_PICKER = <ColorPicker />;
    PRICE_RANGE = <PriceRange />;

    VIEW_MODULE = [
      isFixed ? null : USER,
      TYPES,
      BRANDS,
      COLOR_PICKER,
      PRICE_RANGE,
      LIKE_LIST,
      FALLOWINGS,
    ];
  }
  // 세부 카테고리가 주어지지 않은 경우F
  if (category === "all") {
    const CATEGORIES = (
      <Categories
        categories={categorie}
        goToCategory={goToCategory}
        goToType={goToType}
      />
    );

    VIEW_MODULE = [isFixed ? null : USER, CATEGORIES, LIKE_LIST, FALLOWINGS];
  }

  const SideNavbarView = isFixed ? FixedSidebar : ToggleSidebar;

  return <SideNavbarView childrens={VIEW_MODULE} {...rest} />;
};

export default SidebarNavController;
