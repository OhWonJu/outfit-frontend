import React from "react";

import { useUI } from "@components/ui";
import useTheme from "@lib/client/hooks/useTheme";
import SidebarLayout from "@components/common/SidebarLayout";
import { VERTICAL_SIDEBAR_WIDTH } from "constants/constants";

interface Props {
  childrens?: Array<JSX.Element>;
}

const ToggleSideNavbar: React.FC<Props> = ({ childrens }) => {
  const { closeSidebar, setSidebarView, setModalView, openModal } = useUI();
  const _handleClose = () => closeSidebar();

  return (
    <SidebarLayout
      className="overflow-hidden"
      style={{ width: "100vw", maxWidth: VERTICAL_SIDEBAR_WIDTH + 30 }}
      handleClose={_handleClose}
    >
      <div className="relative h-full overflow-y-scroll scrollbar-hide overscroll-contain">
        {childrens?.map((c, i) => (
          <React.Fragment key={i}>{c}</React.Fragment>
        ))}
      </div>
    </SidebarLayout>
  );
};
export default ToggleSideNavbar;
