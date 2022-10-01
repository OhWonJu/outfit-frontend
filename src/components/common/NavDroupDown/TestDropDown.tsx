import { DropDown } from "@components/ui";
import React from "react";

interface TestDropDownProps {
  onClose?: () => void;
}

const TestDropDown: React.FC<TestDropDownProps> = ({ onClose }) => {
  return (
    <DropDown onClose={onClose} hasBlur={false}>
      <div>testing</div>
    </DropDown>
  );
};

export default TestDropDown;
