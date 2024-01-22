import { Label, LabelProps } from "../../elements/Label";
import UnstyledButtonAnchor, {
  UnstyledButtonAnchorProps,
} from "../UnstyledButtonAnchor";

type BaseProps = {} & Omit<LabelProps, "children">;

export type LabelButtonAnchorProps = {} & UnstyledButtonAnchorProps & BaseProps;

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
