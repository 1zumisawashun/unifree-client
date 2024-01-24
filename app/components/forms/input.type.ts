import { WidthType } from "@/functions/types/Common";

export type InputWrapperProps = {
  id: string;
  label?: string;
  error?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  isOptioned?: boolean;
  isRequired?: boolean;
  disabled?: boolean;
  width?: WidthType;
};

export type InputLabelProps = Pick<
  InputWrapperProps,
  "isOptioned" | "isRequired" | "children"
>;

export type InputWrapperPropsPassThroughProps = Omit<
  InputWrapperProps,
  "children" | "className" | "id"
>;
