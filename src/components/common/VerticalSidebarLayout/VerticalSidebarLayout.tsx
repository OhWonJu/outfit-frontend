import React from "react";
import { CONTAINER_PADDING_VERTICAL, NAV_HEIGHT } from "constants/constants";
import cn from "clsx";

type ComponentProps = { children: any; className?: string };

const VerticalSidebarLayout: React.FC<ComponentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn("px-4 py-6", className)}
      style={{
        paddingBottom: NAV_HEIGHT,
      }}
    >
      {children}
    </div>
  );
};

export default VerticalSidebarLayout;
