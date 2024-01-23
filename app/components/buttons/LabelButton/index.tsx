import UnstyledButton from "@/components/buttons/UnstyledButton";
import { Label, LabelProps } from "@/components/elements/Label";
import { ComponentProps } from "react";

type LabelButtonProps = {} & ComponentProps<typeof UnstyledButton> &
  Omit<LabelProps, "children">;

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
