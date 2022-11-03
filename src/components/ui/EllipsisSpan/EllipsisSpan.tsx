import React, { useCallback, useRef, useState } from "react";
import cn from "clsx";

import { BORDER_BASE_WIDTH } from "src/constants";
import useResizeObserver from "@lib/hooks/useResizeObserver";
import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  context: string;
  className?: string;
  lineClamp?: number;
  onClick?: Function;
  [key: string]: any;
}

const EllipsisSpan: React.FC<Props> = ({
  context,
  className,
  lineClamp = 3,
  onClick,
  ...rest
}) => {
  const rootClassName = cn("text-base", {}, className);

  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isShowReadMore, setIsShowReadMore] = useState(false);
  const observeCallback = (entries: any) => {
    for (let entry of entries) {
      if (entry.target.scrollHeight > entry.contentRect.height) {
        setIsShowReadMore(true);
      } else {
        setIsShowReadMore(false);
      }
    }
  };
  useResizeObserver({ callback: observeCallback, element: contentRef });

  const clickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
        return;
      }
      defaultClickHandler(event);
    },
    [onClick],
  );

  const defaultClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    contentRef.current.classList.add("show");
    setIsShowReadMore(false);
  };
  return (
    <>
      <Ellipsis
        ref={contentRef}
        className={rootClassName}
        lineClamp={lineClamp}
      >
        {context}
      </Ellipsis>
      {isShowReadMore && (
        <Button type="button" onClick={event => clickHandler(event)}>
          ...더보기
        </Button>
      )}
    </>
  );
};

export default EllipsisSpan;

const Ellipsis = styled.div<any>`
  position: relative;
  display: -webkit-box;
  /* max-height: 6rem; */
  max-height: ${props => props.lineClamp * 1.5}rem;
  line-height: 1.5rem;
  overflow: hidden;
  -webkit-line-clamp: ${props => props.lineClamp};

  &.show {
    display: block;
    max-height: none;
    overflow: auto;
    -webkit-line-clamp: unset;
  }
`;

const Button = styled.button`
  max-height: 2rem;
  line-height: 2rem;
  color: ${props => props.theme.gray_dark};
  ${tw`text-sm font-semibold`}

  &.hide {
    display: none;
  }
`;
