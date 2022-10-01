import { ReactNode } from "react";
import dynamic from "next/dynamic";

import { Sidebar, LoadingDots, useUI } from "@components/ui";
import { useAcceptCookies } from "@lib/hooks/useAcceptCookies";
import Navbar from "../Navbar";
import LoginView from "@components/auth/LoginView";
import { CartSidebarView } from "@components/cart";
import { MenuSidebarView } from "@components/menu";
import SearchDropDown from "../Searchbar/SearchDropDown";
import TestDropDown from "../NavDroupDown/TestDropDown";

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
);

const SignUpView = dynamic(() => import("@components/auth/SignUpView"), {
  loading: Loading,
});

const ForgotPassword = dynamic(
  () => import("@components/auth/ForgotPassword"),
  {
    loading: Loading,
  },
);

// Modal //
const Modal = dynamic(() => import("@components/ui/Modal"), {
  loading: Loading,
  ssr: false,
});

const ModalView: React.FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  const mobileForm: boolean = [
    "LOGIN_VIEW",
    "SIGNUP_VIEW",
    "FORGOT_VIEW",
  ].includes(modalView);

  let modalTitle: string = "";
  switch (modalView) {
    case "LOGIN_VIEW":
      modalTitle = "LOG IN";
      break;
    case "SIGNUP_VIEW":
      modalTitle = "SIGN UP";
      break;
    case "FORGOT_VIEW":
      modalTitle = "FIND ACCOUNT";
      break;
    default:
      modalTitle = "";
  }

  return (
    <Modal onClose={closeModal} modalTitle={modalTitle} mobileForm={mobileForm}>
      {modalView === "LOGIN_VIEW" && <LoginView />}
      {modalView === "SIGNUP_VIEW" && <SignUpView />}
      {modalView === "FORGOT_VIEW" && <ForgotPassword />}
    </Modal>
  );
};

const ModalUI: React.FC = () => {
  const { displayModal, closeModal, modalView } = useUI();
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null;
};
// ---------------------------------------------------------------------- //
// Side bar //
const SidebarView: React.FC<{
  sidebarView: string;
  closeSidebar(): any;
  // links: LinkProps[];
}> = ({ sidebarView, closeSidebar }) => {
  const left = sidebarView === "MOBILE_MENU_VIEW";
  return (
    <Sidebar left={left} onClose={closeSidebar}>
      {sidebarView === "CART_VIEW" && <CartSidebarView />}
      {/* {sidebarView === "SHIPPING_VIEW" && <ShippingView />} */}
      {/* {sidebarView === "PAYMENT_VIEW" && <PaymentMethodView />} */}
      {/* {sidebarView === "CHECKOUT_VIEW" && <CheckoutSidebarView />} */}
      {sidebarView === "MOBILE_MENU_VIEW" && <MenuSidebarView />}
      {/* {sidebarView === "MOBILE_MENU_VIEW" && <MenuSidebarView links={links} />} */}
    </Sidebar>
  );
};

const SidebarUI: React.FC = () => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI();
  return displaySidebar ? (
    <SidebarView sidebarView={sidebarView} closeSidebar={closeSidebar} />
  ) : null;
};
// --------------------------------------------------------------------------------- //
// Drop Down //
const DropDownView: React.FC<{
  dropDownView: string;
  closeDropDown(): any;
}> = ({ dropDownView, closeDropDown }) => {
  return (
    <>
      {dropDownView === "SEARCH_VIEW" && (
        <SearchDropDown onClose={closeDropDown} />
      )}
      {/* {dropDownView === "TEST_VIEW" && <TestDropDown onClose={closeDropDown} />} */}
    </>
  );
};

const DropDownUI: React.FC = () => {
  const { displayDropDown, closeDropDown, dropDownView } = useUI();
  return displayDropDown ? (
    <DropDownView dropDownView={dropDownView} closeDropDown={closeDropDown} />
  ) : null;
};
// ----------------------------------------------------------------------------------- //

interface Props {
  children: ReactNode;
  pageProps: {
    // pages?: Page[];
    // categories: Category[];
  };
}

const Layout: React.FC<Props> = ({ children, pageProps }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();

  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <ModalUI />
      <SidebarUI />
      <DropDownUI />
    </div>
  );
};

export default Layout;
