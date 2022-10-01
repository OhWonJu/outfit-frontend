import { DropDown } from "@components/ui";
import React from "react";

interface TestDropDownProps {
  onClose?: () => void;
}

const TestDropDown2: React.FC<TestDropDownProps> = ({ onClose }) => {
  return (
    <DropDown onClose={onClose} hasBlur={false}>
      <div>testing2</div>
    </DropDown>
  );
};

export default TestDropDown2;
