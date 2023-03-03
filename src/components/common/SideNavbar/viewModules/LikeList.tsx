import React from "react";

import { Collapse, EllipsisText } from "@components/ui";
import {
  ListButton,
  ListIconWrapper,
  ListTitle,
  SideNavLi,
  SideNavModuleWrapper,
  SideNavUl,
} from "../SideNavbar.styles";
import ShowMoreButton from "./ShowMoreButton";

interface Props {
  likeList: Array<string>;
}

const LikeList: React.FC<Props> = ({ likeList }) => {
  return (
    <SideNavModuleWrapper className="__Like_List__">
      <h1 className="text-2xl font-bold">Like List</h1>
      <SideNavUl>
        {likeList.map((list, i) => (
          <SideNavLi key={i}>
            <ListButton type="button">
              <ListIconWrapper>
                <div className="w-full aspect-square bg-zinc-400 rounded-full" />
              </ListIconWrapper>
              <EllipsisText
                context={list}
                lineClamp={1}
                className="text-xs text-left"
              />
              {/* <ListTitle>{list}</ListTitle> */}
            </ListButton>
          </SideNavLi>
        ))}
      </SideNavUl>
      <ShowMoreButton />
    </SideNavModuleWrapper>
  );
};

export default LikeList;
