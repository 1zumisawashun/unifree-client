import { UnstyledButtonAnchor } from "@/components/buttons/UnstyledButtonAnchor";
import { Label, LabelProps } from "@/components/elements/Label";
import { ComponentProps } from "react";

type LabelButtonAnchorProps = {} & ComponentProps<typeof UnstyledButtonAnchor> &
  Omit<LabelProps, "children">;

export default function LabelButtonAnchor({
  children,
  theme = "primary",
  ...props
}: LabelButtonAnchorProps) {
  return (
    <UnstyledButtonAnchor {...props}>
      <Label theme={theme}>{children}</Label>
    </UnstyledButtonAnchor>
  );
}
