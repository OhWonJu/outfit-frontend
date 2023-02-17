import React from "react";
import { CONTAINER_PADDING_VERTICAL } from "constants/constants";
import cn from "clsx";

type ComponentProps = { children: any; className?: string };

const VerticalSidebarLayout: React.FC<ComponentProps> = ({
  children,
  className,
}) => {
  return <div className={cn("px-4 py-6", className)}>{children}</div>;
};

export default VerticalSidebarLayout;
