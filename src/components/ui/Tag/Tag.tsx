import React from "react";
import cn from "clsx";
import styled from "styled-components";
import tw from "twin.macro";

interface TagProps {
  context: string;
  className?: string;
  onClick?: Function;
  [key: string]: any;
}

const Tag: React.FC<TagProps> = ({
  context,
  className,
  onClick = (): any => null,
  ...rest
}) => {
  const rootClassName = cn(
    "p-3 mr-2 mb-2 flex rounded-full items-center",
    {},
    className,
  );

  return (
    <CardBtn className={rootClassName} onClick={onClick} {...rest}>
      <Span>{context}</Span>
    </CardBtn>
  );
};

export default Tag;

const CardBtn = styled.button<any>`
  background-color: ${props => props.theme.gray_light};
  color: ${props => props.theme.gray_primary};

  :hover {
    background-color: ${props => props.theme.text_primary_color};
    & > span {
      color: ${props => props.theme.text_secondary_color};
    }
  }
`;

const Span = styled.span`
  ${tw`font-semibold`}
`;
