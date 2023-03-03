import React from "react";
import { SideNavModuleWrapper } from "../SideNavbar.styles";
import FlexList from "./FlexList";

interface Props {
  categories: Array<{ categorie: string; types: Array<string> }>;
  goToCategory?: Function;
  goToType?: Function;
}

const Categories: React.FC<Props> = ({
  categories,
  goToCategory,
  goToType,
}) => {
  return (
    <SideNavModuleWrapper className="__categorie__">
      <h1 className="text-2xl font-bold">Categorie</h1>
      {categories.map((categorie, i) => (
        <FlexList
          key={i}
          title={categorie.categorie}
          list={categorie.types}
          goToCategory={goToCategory}
          goToType={goToType}
        />
      ))}
    </SideNavModuleWrapper>
  );
};

export default Categories;
