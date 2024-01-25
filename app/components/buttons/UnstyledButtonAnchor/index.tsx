import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  className?: string;
} & LinkProps;

type Ref = HTMLAnchorElement;

export const UnstyledButtonAnchor = forwardRef<Ref, Props>(
  ({ children, ...props }, ref) => (
    <Link {...props} ref={ref}>
      {children}
    </Link>
  )
);

UnstyledButtonAnchor.displayName = "UnstyledButtonAnchor";
