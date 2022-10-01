import { FC, useRef, useEffect, useCallback } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";

// import FocusTrap from "@lib/focus-trap";
import { Cross } from "@components/icons";
import useTheme from "@lib/hooks/useTheme";

interface ModalProps {
  className?: string;
  children?: any;
  modalTitle?: string;
  mobileForm: boolean;
  onClose: () => void;
  onEnter?: () => void | null;
}

const Modal: FC<ModalProps> = ({
  children,
  onClose,
  modalTitle,
  mobileForm,
}) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <div className="fixed bg-black bg-opacity-20 flex items-center inset-0 z-[100] justify-center backdrop-blur-[1.2px]">
      {/* <div
        className={`bg-[${theme.container_bg_color}] ${
          mobileForm ? "h-screen w-[100vh] sm:max-w-[420px]" : null
        } py-12 px-10 border rounded-xl border-accent-2 relative`}
        role="dialog"
        ref={ref}
      > */}
      <ModalWrapper
        ref={ref}
        role="dialog"
        $animation={animation}
        $mobileForm={mobileForm}
      >
        <div className="absolute left-0 top-0 w-full mt-6">
          <div className="modal-title-text relative text-center text-lg font-semibold font-sansSrif">
            <span>{modalTitle}</span>
          </div>
        </div>
        <button
          onClick={() => onClose()}
          aria-label="Close panel"
          className="hover:text-accent-5 transition ease-in-out duration-150 focus:outline-none absolute right-0 top-0 m-6"
        >
          <Cross className="h-6 w-6" />
        </button>
        <div
          className={`outline-none h-full ${
            mobileForm && "overflow-y-scroll scrollbar-hide "
          }`}
        >
          {children}
        </div>
        {/* <FocusTrap focusFirst>{children}</FocusTrap> */}
      </ModalWrapper>
    </div>
  );
};

export default Modal;

const animation = keyframes`
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
`;

const ModalWrapper = styled.div<any>`
  width: 100%;
  background-color: ${props => props.theme.container_bg_color};
  ${props => {
    if (props.$mobileForm) {
      return css`
        animation: ${props.$animation} 300ms
          cubic-bezier(0.25, 0.46, 0.45, 0.94) 1;
      `;
    }
  }};

  ${tw`py-12 px-10 border relative`} /* ${props =>
    props.$mobileForm ? `${tw`overflow-auto`}` : null} */
  ${props =>
    props.$mobileForm && tw`h-[100%] w-[100%] sm:h-screen sm:max-w-[420px]`}
`;
