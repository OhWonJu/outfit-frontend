export type MODAL_VIEWS =
  // | "SIGNUP_VIEW"
  | "LOGIN_VIEW"
  | "FORGOT_VIEW"
  | "PRODUCT_REVIEW"
  | "NEW_SHIPPING_ADDRESS"
  | "NEW_PAYMENT_METHOD";

export type MODAL_ACTION =
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    };
