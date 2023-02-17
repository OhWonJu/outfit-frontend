import React from "react";
import { DropDown } from "@components/ui";
import Link from "next/link";

interface StoreDropDownProps {
  onClose?: () => void;
}

const StoreDropDown: React.FC<StoreDropDownProps> = ({ onClose }) => {
  return (
    <DropDown onClose={onClose}>
      <div className="">
        testing
        <Link href={"/store/shoes"}>
          <span className="text-sm font-extrabold font-sansSrif">
            goTo shoes
          </span>
        </Link>
      </div>
    </DropDown>
  );
};

export default StoreDropDown;
