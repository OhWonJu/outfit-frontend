import React from "react";
import Avatar from "@components/common/Avatar";

import { HlightButton, SideNavModuleWrapper } from "../SideNavbar.styles";
import { useUI } from "@components/ui";

interface Props {}

const User: React.FC<Props> = () => {
  const isLoggedIn = true;

  return (
    <SideNavModuleWrapper>
      {isLoggedIn ? (
        <>
          <div className="__USER_INFO__ mb-5">
            <button
              onClick={() => {
                null;
              }}
              className="flex items-center w-full"
            >
              <Avatar className="w-7 h-7 mr-3" />
              <a>Some one</a>
            </button>
          </div>
          <div className="__USER_DELIVERY_INFO__ ">
            <HlightButton>
              <a className="">Completed Orders</a>
              <a className="">0</a>
            </HlightButton>
            <HlightButton>
              <a className="">Delivery in</a>
              <a className="">0</a>
            </HlightButton>
            <HlightButton>
              <a className="">Delivery Completed</a>
              <a className="">0</a>
            </HlightButton>
          </div>
        </>
      ) : (
        <>
          <div className="__SIGN_BUTTONS__">
            <div></div>
            <div></div>
          </div>
        </>
      )}
    </SideNavModuleWrapper>
  );
};

export default User;
