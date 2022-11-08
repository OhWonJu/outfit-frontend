import { useEffect, useRef } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styled from "styled-components";
import tw from "twin.macro";

import { BORDER_BASE_WIDTH, NAV_HEIGHT } from "src/constants";

interface DropDownProps {
  children?: any;
  hasBlur?: boolean;
  onClose?: () => void;
}

const DropDown: React.FC<DropDownProps> = ({
  children,
  hasBlur = true,
  onClose,
}) => {
  // const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const dropDownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // useEffect(() => {
  //   const dropDown = ref.current;

  //   if (dropDown) {
  //     disableBodyScroll(dropDown);
  //   }

  //   return () => {
  //     clearAllBodyScrollLocks();
  //   };
  // }, []);

  useEffect(() => {
    if (dropDownRef.current) {
      dropDownRef.current.focus();
    }

    const contentElement = contentRef.current;

    if (contentElement) {
      disableBodyScroll(contentElement, { reserveScrollBarGap: false });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 h-full w-full z-[100] box-border outline-none"
      ref={dropDownRef}
      style={{ marginTop: NAV_HEIGHT }}
      tabIndex={1}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          onMouseEnter={onClose}
          className={`absolute inset-0 ${
            hasBlur
              ? "bg-black bg-opacity-10 duration-100 ease-linear backdrop-blur-[1.2px]"
              : "absolute inset-0 bg-opacity-0"
          }`}
        />
        <section className="absolute inset-y-0 w-full max-w-full min-h-[35%] max-h-[45%] h-fit flex outline-none">
          <InnerContainer ref={contentRef}>{children}</InnerContainer>
        </section>
      </div>
    </div>
  );
};

export default DropDown;

const InnerContainer = styled.div<any>`
  ${tw`w-full shadow-md cursor-default`}
  background-color: ${props => props.theme.background_color};
  border-top-width: ${BORDER_BASE_WIDTH}px;
  border-color: ${props => props.theme.gray_ligth};
`;
