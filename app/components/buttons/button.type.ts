import {
  ShapeType,
  SizeType,
  ThemeType,
  VariantType,
} from "@/functions/types/Common";

type BaseProps = {
  size?: SizeType;
  variant?: VariantType;
  theme?: ThemeType;
  shape?: ShapeType;
};

export type BaseButtonProps = BaseProps & {
  loading?: boolean;
  prefix?: any;
  suffix?: any;
};

export type BaseIconButtonProps = BaseProps & {
  name?: "add" | "edit" | "cross";
  disabled?: boolean;
};
