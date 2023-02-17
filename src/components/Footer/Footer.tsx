import React from "react";
import { SYMBOL_TEXT } from "constants/constants";

const Footer = () => {
  return (
    <div className="flex w-full h-[500px] justify-center items-center bg-zinc-300">
      <div className="w-full h-full flex items-center justify-center">
        <h2 className="">@{SYMBOL_TEXT}</h2>
      </div>
    </div>
  );
};

export default Footer;
