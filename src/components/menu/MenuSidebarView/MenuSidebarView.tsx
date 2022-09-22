import SidebarLayout from "@components/common/SidebarLayout";
import { useUI } from "@components/ui";
import { FC } from "react";

const MenuSidebarView: FC = () => {
  const { closeSidebar, setSidebarView } = useUI();

  const _handleClose = () => closeSidebar();

  return (
    <SidebarLayout handleClose={_handleClose}>
      <div></div>
    </SidebarLayout>
  );
};
export default MenuSidebarView;
