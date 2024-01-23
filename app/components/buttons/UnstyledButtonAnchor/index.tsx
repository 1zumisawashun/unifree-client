import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

type UnstyledButtonAnchorProps = {
  children: ReactNode;
  className?: string;
} & LinkProps &
  ComponentPropsWithoutRef<"a">;

export const UnstyledButtonAnchor = forwardRef<
  HTMLAnchorElement,
  UnstyledButtonAnchorProps
>(({ children, ...props }, ref) => (
  <Link {...props} ref={ref}>
    {children}
  </Link>
));

UnstyledButtonAnchor.displayName = "UnstyledButtonAnchor";
