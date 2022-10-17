import React from "react";
import { DropDown } from "@components/ui";

interface TestDropDownProps {
  onClose?: () => void;
}

const TestDropDown: React.FC<TestDropDownProps> = ({ onClose }) => {
  return (
    <DropDown onClose={onClose}>
      <div className="">testing</div>
    </DropDown>
  );
};

export default TestDropDown;
