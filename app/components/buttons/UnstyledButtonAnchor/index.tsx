import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type UnstyledButtonAnchorProps = {
  children: ReactNode;
  className?: string;
} & LinkProps;

export default function UnstyledButtonAnchor({
  children,
  ...props
}: UnstyledButtonAnchorProps) {
  return <Link {...props}>{children}</Link>;
}
