import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";
import type { AnyAction, CombinedState } from "@reduxjs/toolkit";

// reducers //
import sidebarReducer, { SidebarStateType } from "./sidebarReducer";
import modalReducer, { ModalStateType } from "./modalReducer";

// actions //
export { sidebarActions } from "./sidebarReducer";
export { modalActions } from "./modalReducer";

type ReducerState = {
  sidebar: SidebarStateType;
  modal: ModalStateType;
};

// 원래 "rootReducer"로 합쳐줄 필요 없이 "configureStore()"에서 합칠 수 있지만 "HYDRATE"를 위해서 사용
const rootReducer = (
  state: any,
  action: AnyAction,
): CombinedState<ReducerState> => {
  switch (action.type) {
    // SSR을 위해서 사용 ( "next.js"의 "getServerSideProps()" )
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return combineReducers({
        sidebar: sidebarReducer,
        modal: modalReducer,
      })(state, action);
  }
};

export default rootReducer;
