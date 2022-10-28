import { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  [key: string]: any;
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <div {...props}>{children}</div>
    </NextLink>
  );
};

export default Link;
