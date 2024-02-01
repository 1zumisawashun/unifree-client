export type ThemeType =
  | "primary"
  // | "secondary"
  | "danger"
  | "success"
  | "transparent";

export type VariantType =
  | "contained"
  | "outlined"
  | "transparent"
  | "card"
  | "information"
  | "confirmation"
  | "error";

export type SizeType = "small" | "medium" | "large";

export type PositionType = "start" | "center" | "end";

export type DirectionType = "row" | "column";

export type StatusType = "loading" | "disabled" | "error";

export type WidthType = "full" | "half" | "quarter" | "auto";

export type ShapeType = "square" | "round";

export type ColorType = "black" | "grey";

export type SelectOption<T extends string = string> = {
  value: T;
  label: string;
};

export type SelectOptions<T extends string = string> = SelectOption<T>[];

export type SearchParams = { [key: string]: string | string[] | undefined };

type Position = "top" | "bottom" | "right" | "left";

export type PositionOffset<P extends Position = Position> = {
  [K in P]: number;
};

export type StackPosition = `${"top" | "bottom" | "right" | "left"}${
  | "Left"
  | "Center"
  | "Right"}`;

export const status = ["available", "waiting", "completed"] as const;
