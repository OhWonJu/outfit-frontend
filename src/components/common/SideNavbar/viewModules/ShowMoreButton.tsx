import { ChevronDown } from "@components/icons";
import { Button } from "@components/ui";
import React from "react";
import {
  ListButton,
  More,
  MoreButton,
  MoreIconWrapper,
  MoreText,
} from "../SideNavbar.styles";

function ShowMoreButton() {
  return (
    <More>
      <ListButton type="button">
        <MoreIconWrapper>
          <ChevronDown className="w-6 h-6" />
        </MoreIconWrapper>
        <MoreText>show more</MoreText>
      </ListButton>
    </More>
  );
}

export default ShowMoreButton;
