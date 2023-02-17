import { ReactNode, useState } from "react";
import dynamic from "next/dynamic";

import { Sidebar, LoadingDots, useUI } from "@components/ui";
import { useAcceptCookies } from "@lib/client/hooks/useAcceptCookies";
import useTheme from "@lib/client/hooks/useTheme";
import Navbar from "../Navbar";
import SideNavbar from "../MobileNavbar";
import { Review } from "@components/pages/review";
import { LoginView } from "@components/pages/auth";
import { CartSidebarView } from "@components/pages/cart";
import { StoreDropDown, TestDropDown2 } from "../NavDropDown";
import { SearchDropDown } from "../SearchDropDown";
// import { TestDropDown, TestDropDown2 } from "../NavDroupDown";
// import { Cross } from "@components/icons";

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
);

const ForgotPassword = dynamic(
  () => import("@components/pages/auth/ForgotPassword"),
  {
    loading: Loading,
  },
);

// ------------ UI Protocol?? ------------ //
// UI -> View(어떤 뷰) -> UI Component(공통 액션 처리) -> <UILayout>{Component}</UILayout>(실제 개별 UI)
// ---------------------------------------------------------------------------------------------- //

// Modal //
const Modal = dynamic(() => import("@components/ui/Modal"), {
  loading: Loading,
  ssr: false,
});

const ModalView: React.FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  // const mobileForm: boolean = ["LOGIN_VIEW", "FORGOT_VIEW"].includes(modalView);

  // let modalTitle: string = "";
  // switch (modalView) {
  //   case "LOGIN_VIEW":
  //     modalTitle = "LOG IN";
  //     break;
  //   case "FORGOT_VIEW":
  //     modalTitle = "FIND ACCOUNT";
  //     break;
  //   default:
  //     modalTitle = "";
  // }

  return (
    <Modal onClose={closeModal}>
      {modalView === "LOGIN_VIEW" && <LoginView />}
      {modalView === "FORGOT_VIEW" && <ForgotPassword />}
      {modalView === "PRODUCT_REVIEW" && <Review />}
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
  const left = sidebarView === "MOBILE_NAV_VIEW";
  return (
    <Sidebar left={left} onClose={closeSidebar}>
      {sidebarView === "CART_VIEW" && <CartSidebarView />}
      {/* {sidebarView === "SHIPPING_VIEW" && <ShippingView />} */}
      {/* {sidebarView === "PAYMENT_VIEW" && <PaymentMethodView />} */}
      {/* {sidebarView === "CHECKOUT_VIEW" && <CheckoutSidebarView />} */}
      {sidebarView === "MOBILE_NAV_VIEW" && <SideNavbar />}
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
      {dropDownView === "STORE_VIEW" && (
        <StoreDropDown onClose={closeDropDown} />
      )}
      {dropDownView === "TEST_VIEW2" && (
        <TestDropDown2 onClose={closeDropDown} />
      )}
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
  path: string;
}

// Nav bar Render되지 않는 예외 경로
const NAV_INABLE_PATH = ["/join"];
const LOGO_VISIVLE = [];

const Layout: React.FC<Props> = ({ children, pageProps, path }) => {
  const theme = useTheme();
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();

  // const [display, setDisplay] = useState(false);
  const [adView, setAdView] = useState(true);

  // 더 최적화 할 방법은..?
  const navAble = !NAV_INABLE_PATH.includes(path);

  const logoVisible = path != "/";

  return (
    <div
      className="h-full w-full mx-auto transition-colors duration-150"
      style={{
        backgroundColor: theme.background_color,
        maxWidth: 2460,
      }}
    >
      {navAble && <Navbar logoVisible={logoVisible} />}
      {/* NAV STICKY AD */}
      {/* {adView && navAble && (
        <div className="w-screen sticky top-[60px] h-10 flex flex-row justify-between items-center bg-orange-400 px-8 py-2 z-50">
          <span
            className="font-bold text-base"
            style={{ color: theme.black_primary }}
          >
            회원 가입 EVENT. 신규 가입 후 바로 사용 가능한 15% 할인 쿠폰 / made
            by OUTFIT 스텐다드 상품 1+1 구매 기회
          </span>
          <button onClick={() => setAdView(false)}>
            <Cross stroke={theme.black_primary} strokeWidth={2} />
          </button>
        </div>
      )} */}
      <main className="fit">{children}</main>
      <ModalUI />
      <SidebarUI />
      <DropDownUI />
    </div>
  );
};

export default Layout;
