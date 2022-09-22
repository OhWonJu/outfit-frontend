import React, { FC, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { lightTheme, darkTheme } from "src/styles/Theme";

// actions
import { modalActions, sidebarActions } from "@lib/store/reducers";

// type
// import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import type { RootState } from "@lib/store/store";
import type { SIDEBAR_VIEWS } from "@lib/store/types/sidebarType";
import type { MODAL_VIEWS } from "@lib/store/types/modalType";

export const useUI = () => {
  const dispatch = useDispatch();

  // reducers state //
  const { displaySidebar, sidebarView } = useSelector(
    ({ sidebar }: RootState) => sidebar,
  );
  const { displayModal, modalView } = useSelector(
    ({ modal }: RootState) => modal,
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
    (view: MODAL_VIEWS) => dispatch({ type: "SET_MODAL_VIEW", view }),
    [dispatch],
  );

  const context = {
    displaySidebar,
    sidebarView,
    displayModal,
    modalView,
    openSidebar: () => openSidebar(),
    closeSidebar: () => closeSidebar(),
    openModal: () => openModal(),
    closeModal: () => closeModal(),
    toggleSidebar: () => toggleSidebar(),
    closeSidebarIfPresent: () => closeSidebarIfPresent(),
    setSidebarView: (view: SIDEBAR_VIEWS) => setSidebarView(view),
    setModalView: (view: MODAL_VIEWS) => setModalView(view),
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
