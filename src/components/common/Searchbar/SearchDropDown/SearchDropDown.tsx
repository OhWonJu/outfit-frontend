import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import useTheme from "@lib/client/hooks/useTheme";
import DropDown from "@components/ui/DropDown";
import { Tag } from "@components/ui";
import Searchbar from "../Searchbar";

// MOCK DATA //
const cardData = [
  "이게",
  "좋을듯?",
  "아님",
  "말고",
  "ㅋㅋㄹ",
  "F/W",
  "CityBoy",
  "Nautica",
  "크롭",
  "아우터",
];

const curr = [
  "아디다스3",
  "비슬로우",
  "nautica",
  "slacks",
  "울 블루종",
  "라이더",
  "newbalanc 992",
  "outfit",
  "nanamica",
  "outfit selection",
  "outfit original",
  "lee",
  "F/W codi",
  "아디다스3아디다스3아디다스3아디다스3",
  "비슬로우",
  "nautica",
  "slacks",
  "울 블루종",
  "라이더",
  "newbalanc 992",
  "outfit",
  "nanamica",
  "outfit selection",
  "outfit original",
  "lee",
  "F/W codi",
];
// --------------------------------- //

interface SearchDropDownProps {
  onClose?: () => void;
}

const SearchDropDown: React.FC<SearchDropDownProps> = ({ onClose }) => {
  return (
    <DropDown onClose={onClose} navCover={true} activateCloseKeyAction={true}>
      <Searchbar />
      <div className="py-7 flex flex-col w-full h-full overflow-y-scroll px-10 xmd:px-0 xmd:justify-between xmd:flex-row">
        {/*  */}
        <div className="search_current flex flex-1 flex-col px-2 xmd:items-end xmd:flex-[1] xmd:pr-16">
          <div className="xmd:w-[45%]">
            <h2 className="font-semibold text-lg">Current Keywords</h2>
            <div className="mt-5 flex">
              <ul>
                {curr.map((v, i) => (
                  <li key={i} className="mb-4">
                    <a>
                      <Span>{v}</Span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="search_recommend flex flex-1 flex-col px-2 pt-10 xmd:items-start xmd:pt-0 xmd:flex-[2] xmd:pl-16">
          <h2 className="font-semibold text-lg">Recommed Keywords</h2>
          <div className="mt-5 flex flex-wrap">
            {cardData.map((v, i) => (
              <Tag key={i} context={v} />
            ))}
          </div>
        </div>
      </div>
    </DropDown>
  );
};

export default SearchDropDown;

const Span = styled.span<any>`
  ${tw`font-medium block`};
  color: ${props => props.theme.gray_primary};
  :hover {
    color: ${props => props.theme.text_primary_color};
  }
`;
