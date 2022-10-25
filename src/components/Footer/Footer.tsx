import React from "react";
import { SYMBOL_TEXT } from "src/constants";

const Footer = () => {
  return (
    <div className="flex w-ful h-[500px] justify-center items-center">
      <div className="w-full h-full flex items-center justify-center">
        <h2 className="text-zinc-300">@{SYMBOL_TEXT}</h2>
      </div>
    </div>
  );
};

export default Footer;
