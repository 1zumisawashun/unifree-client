import { CheckIcon } from "@/components/elements/SvgIcon";
import { SizeType, VariantType } from "@/functions/types/Common";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";
import styles from "./styles.module.scss";

type Props = Omit<ComponentPropsWithoutRef<"input">, "size"> & {
  children?: ReactNode;
  error?: string;
  variant?: Extract<VariantType, "card">;
  size?: SizeType;
};

type Ref = ElementRef<"input">;

const BLOCK_NAME = "input-radio";

/* eslint-disable jsx-a11y/label-has-associated-control */
// 暗黙のlabelを使っているので問題なし
export const InputRadio = forwardRef<Ref, Props>(
  ({ children, error, variant, size, ...props }, ref) => (
    <label
      className={styles[`${BLOCK_NAME}-label`]}
      data-variant={variant}
      data-size={size}
    >
      <input
        className={styles[`${BLOCK_NAME}-input`]}
        ref={ref}
        type="radio"
        hidden
        data-error={!!error}
        {...props}
      />
      <span className={styles[`${BLOCK_NAME}-icon`]}>
        <CheckIcon aria-hidden="true" />
      </span>
      {children && (
        <span className={styles[`${BLOCK_NAME}-text`]}>{children}</span>
      )}
    </label>
  )
);

InputRadio.displayName = "InputRadio";
