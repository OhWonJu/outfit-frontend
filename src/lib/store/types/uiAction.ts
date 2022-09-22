export type UI_ACTION =
  | {
      type: "OPEN_DROPDOWN";
    }
  | {
      type: "CLOSE_DROPDOWN";
    }
  | {
      type: "SET_USER_AVATAR";
      value: string;
    };
