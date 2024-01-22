import { Label, LabelProps } from "../../elements/Label";
import UnstyledButton, { UnstyledButtonProps } from "../UnstyledButton";

type BaseProps = {} & Omit<LabelProps, "children">;

export type LabelButtonProps = {} & UnstyledButtonProps & BaseProps;

export default function LabelButton({
  children,
  theme = "primary",
  ...props
}: LabelButtonProps) {
  return (
    <UnstyledButton {...props}>
      <Label theme={theme}>{children}</Label>
    </UnstyledButton>
  );
}
