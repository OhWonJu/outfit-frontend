export type WINDOW_VIEWS = "POLICY_TEST1" | "POLICY_TEST2";

export type WINDOW_ACTION =
  | {
      type: "OPEN_WINDOW";
    }
  | {
      type: "CLOSE_WINDOW";
    }
  | {
      type: "SET_WINDOW";
      view: WINDOW_VIEWS;
    };
