import React from "react";

import { EllipsisText } from "@components/ui";
import {
  FlwNewProductText,
  ListButton,
  ListIconWrapper,
  More,
  MoreButton,
  MoreIconWrapper,
  MoreText,
  SideNavLi,
  SideNavModuleWrapper,
  SideNavUl,
} from "../SideNavbar.styles";
import { ChevronDown } from "@components/icons";
import ShowMoreButton from "./ShowMoreButton";

interface Props {
  fallowings: Array<string>;
}

const Fallowings: React.FC<Props> = ({ fallowings }) => {
  return (
    <SideNavModuleWrapper className="__fallowing__ ">
      <h1 className="text-2xl font-bold">Fallowing</h1>
      <SideNavUl>
        {fallowings.map((d, i) => (
          <SideNavLi key={i}>
            <ListButton type="button">
              <ListIconWrapper className="__image_wrapper__ w-[15%] h-full items-center pr-1">
                <div className="w-[1.8rem] aspect-square bg-zinc-500 rounded-full group-hover:scale-[1.05]" />
              </ListIconWrapper>
              <div className="flex w-[65%] h-full justify-start items-center">
                <EllipsisText
                  context={d}
                  lineClamp={1}
                  className="text-xs font-semibold text-left"
                />
              </div>
              <div className="flex w-[20%] h-full items-center">
                <FlwNewProductText>new</FlwNewProductText>
              </div>
            </ListButton>
          </SideNavLi>
        ))}
      </SideNavUl>
      <ShowMoreButton />
    </SideNavModuleWrapper>
  );
};

export default Fallowings;
