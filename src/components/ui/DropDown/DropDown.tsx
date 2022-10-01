import { useEffect, useRef } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styled from "styled-components";
import tw from "twin.macro";

import { BORDER_TINE_WIDTH, NAV_HEIGHT } from "src/constants";

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
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const dropDown = ref.current;

    if (dropDown && hasBlur) {
      disableBodyScroll(dropDown);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 box-border outline-none h-full"
      style={{ marginTop: NAV_HEIGHT }}
      ref={ref}
      tabIndex={1}
    >
      <div className="absolute inset-0 overflow-hidden">
        {hasBlur ? (
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black bg-opacity-20 duration-100 ease-linear backdrop-blur-[1.2px]"
          />
        ) : (
          <div
            onMouseEnter={onClose}
            className="absolute inset-0 bg-opacity-0"
          />
        )}
        <section className="absolute inset-y-0 w-full h-[35%] flex outline-none">
          <InnerContainer>{children}</InnerContainer>
        </section>
      </div>
    </div>
  );
};

export default DropDown;

const InnerContainer = styled.div<any>`
  ${tw`h-full w-full shadow-md cursor-default`}
  background-color: ${props => props.theme.background_color};
  border-top-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${props => props.theme.gray_ligth};
`;