import React, { FC } from "react";
import { Cross, ChevronLeft } from "@components/icons";
// import { UserNav } from "@components/common";
import cn from "clsx";

type ComponentProps = { children: any; className?: string } & (
  | { handleClose: () => any; handleBack?: never }
  | { handleBack: () => any; handleClose?: never }
);

const SidebarLayout: FC<ComponentProps> = ({
  children,
  className,
  handleBack,
  handleClose,
}) => {
  return (
    <div className={cn("relative h-full flex flex-col", className)}>
      <header
        className="sticky top-0 pl-4 py-4 pr-6
  flex items-center justify-between 
  bg-accent-0 box-border w-full z-10 min-h-[66px]"
      >
        {handleClose && (
          <button
            onClick={handleClose}
            aria-label="Close"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none mr-6"
          >
            <Cross className="h-6 w-6 hover:text-accent-3" />
            <span className="ml-2 text-accent-7 text-sm ">Close</span>
          </button>
        )}
        {handleBack && (
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6 hover:text-accent-3" />
            <span className="ml-2 text-accent-7 text-xs">Back</span>
          </button>
        )}

        {/* <UserNav /> */}
      </header>
      <div className="flex flex-col flex-1 box-border">{children}</div>
    </div>
  );
};

export default SidebarLayout;
