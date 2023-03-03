import SidebarLayout from "@components/common/SidebarLayout";
import React from "react";

interface Props {
  childrens?: Array<JSX.Element>;
}

const FixedSideNavbar: React.FC<Props> = ({ childrens }) => {
  return (
    <SidebarLayout
      isToggle={false}
      handleBack={null}
      className="relative h-screen overflow-y-scroll scrollbar-hide overscroll-contain pl-14"
    >
      <div className="h-full overflow-y-scroll scrollbar-hide overscroll-contain">
        {childrens?.map((c, i) => (
          <React.Fragment key={i}>{c}</React.Fragment>
        ))}
      </div>
    </SidebarLayout>
  );
};

export default FixedSideNavbar;
