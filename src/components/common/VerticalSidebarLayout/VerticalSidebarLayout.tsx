import React from "react";
import { CONTAINER_PADDING_VERTICAL } from "src/constants";

type ComponentProps = { children: any; className?: string };

const VerticalSidebarLayout: React.FC<ComponentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className="px-4 py-6"
    >
      {children}
    </div>
  );
};

export default VerticalSidebarLayout;
