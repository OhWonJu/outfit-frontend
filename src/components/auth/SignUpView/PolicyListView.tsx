import React, { useState } from "react";
import useTheme from "@lib/hooks/useTheme";
import { Row } from "src/styles/GlobalStyle";
import { Check } from "@components/icons";

export default function PolicyListView() {
  const theme = useTheme();

  const [allCheck, setAllCheck] = useState(false);
  return (
    <div className="justify-center items-center">
      <Row className="items-center">
        <button
          id="remember"
          onClick={() => setAllCheck(prev => !prev)}
          className={`w-6 h-6 rounded-full shadow-inner transition`}
          style={{
            backgroundColor: allCheck ? theme.blue_priamry : theme.gray_light,
          }}
        >
          <Check
            className={`w-4 h-4 mx-auto my-auto transition-colors`}
            stroke={allCheck ? theme.white_primary : theme.gray_ligth}
          />
        </button>
        <label
          className="ml-2 mt-1 text-lg font-semibold cursor-pointer"
          htmlFor="remember"
        >
          Check all Policy
        </label>
      </Row>
    </div>
  );
}
