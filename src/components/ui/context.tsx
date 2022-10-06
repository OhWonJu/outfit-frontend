import React, { FC, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { lightTheme, darkTheme } from "src/styles/Theme";

// actions
import {
  dropDownActions,
  modalActions,
  sidebarActions,
  windowActions,
} from "@lib/store/reducers";

// type
// import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import type { RootState } from "@lib/store/store";
import type { SIDEBAR_VIEWS } from "@lib/store/types/sidebarType";
import type { MODAL_VIEWS } from "@lib/store/types/modalType";
import type { DROP_DOWN_VIEWS } from "@lib/store/types/dropDownType";
import type { WINDOW_VIEWS } from "@lib/store/types/windowType";

export const useUI = () => {
  const dispatch = useDispatch();

  // reducers state //
  const { displaySidebar, sidebarView } = useSelector(
    ({ sidebar }: RootState) => sidebar,
  );
  const { displayModal, modalView } = useSelector(
    ({ modal }: RootState) => modal,
  );
  const { displayDropDown, dropDownView } = useSelector(
    ({ dropDown }: RootState) => dropDown,
  );
  const { displayWindow, windowView } = useSelector(
    ({ window }: RootState) => window,
  );
  // --------------------------------------------------- //

  const openSidebar = useCallback(
    () => dispatch(sidebarActions.sidebarReducer({ type: "OPEN_SIDEBAR" })),
    [dispatch],
  );
  const closeSidebar = useCallback(
    () => dispatch(sidebarActions.sidebarReducer({ type: "CLOSE_SIDEBAR" })),
    [dispatch],
  );

  const openModal = useCallback(
    () => dispatch(modalActions.modalReducer({ type: "OPEN_MODAL" })),
    [dispatch],
  );

  const closeModal = useCallback(
    () => dispatch(modalActions.modalReducer({ type: "CLOSE_MODAL" })),
    [dispatch],
  );

  const openDropDown = useCallback(
    () => dispatch(dropDownActions.dropDownReducer({ type: "OPEN_DROP_DOWN" })),
    [dispatch],
  );

  const closeDropDown = useCallback(
    () =>
      dispatch(dropDownActions.dropDownReducer({ type: "CLOSE_DROP_DOWN" })),
    [dispatch],
  );

  const openWindow = useCallback(
    () => dispatch(windowActions.windowReducer({ type: "OPEN_WINDOW" })),
    [dispatch],
  );

  const closeWindow = useCallback(
    () => dispatch(windowActions.windowReducer({ type: "CLOSE_WINDOW" })),
    [dispatch],
  );

  const toggleSidebar = useCallback(
    () =>
      displaySidebar
        ? dispatch(sidebarActions.sidebarReducer({ type: "CLOSE_SIDEBAR" }))
        : dispatch(sidebarActions.sidebarReducer({ type: "OPEN_SIDEBAR" })),
    [dispatch, displaySidebar],
  );

  const closeSidebarIfPresent = useCallback(
    () =>
      displaySidebar &&
      dispatch(sidebarActions.sidebarReducer({ type: "CLOSE_SIDEBAR" })),
    [dispatch, displaySidebar],
  );

  const setSidebarView = useCallback(
    (view: SIDEBAR_VIEWS) =>
      dispatch(
        sidebarActions.sidebarReducer({ type: "SET_SIDEBAR_VIEW", view }),
      ),
    [dispatch],
  );

  const setModalView = useCallback(
    (view: MODAL_VIEWS) =>
      dispatch(modalActions.modalReducer({ type: "SET_MODAL_VIEW", view })),
    [dispatch],
  );

  const setDropDownView = useCallback(
    (view: DROP_DOWN_VIEWS) =>
      dispatch(
        dropDownActions.dropDownReducer({ type: "SET_DROP_DOWN_VIEW", view }),
      ),
    [dispatch],
  );

  const setWindowView = useCallback(
    (view: WINDOW_VIEWS) =>
      dispatch(windowActions.windowReducer({ type: "SET_WINDOW", view })),
    [dispatch],
  );

  const context = {
    displaySidebar,
    sidebarView,
    displayModal,
    modalView,
    displayDropDown,
    dropDownView,
    displayWindow,
    windowView,
    openSidebar: () => openSidebar(),
    closeSidebar: () => closeSidebar(),
    openModal: () => openModal(),
    closeModal: () => closeModal(),
    openDropDown: () => openDropDown(),
    closeDropDown: () => closeDropDown(),
    openWindow: () => openWindow(),
    closeWindow: () => closeWindow(),
    toggleSidebar: () => toggleSidebar(),
    closeSidebarIfPresent: () => closeSidebarIfPresent(),
    setSidebarView: (view: SIDEBAR_VIEWS) => setSidebarView(view),
    setModalView: (view: MODAL_VIEWS) => setModalView(view),
    setDropDownView: (view: DROP_DOWN_VIEWS) => setDropDownView(view),
    setWindowView: (view: WINDOW_VIEWS) => setWindowView(view),
  };

  return context;
};

export const ManagedUIContext: FC<any> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (theme) {
      setMode(theme);
    } else {
      setMode(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setMode(m => (m === "light" ? "dark" : "light"));
  }, [mode]);

  useEffect(() => {
    setMode("light");
  });

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
