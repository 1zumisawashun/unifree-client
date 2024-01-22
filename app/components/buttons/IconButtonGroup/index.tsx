import { SizeType } from "@/functions/types/Common";
import IconButton, { IconButtonProps } from "../IconButton";
import IconButtonAnchor, { IconButtonAnchorProps } from "../IconButtonAnchor";
import styles from "./styles.module.scss";

type IconButtonGroupProps = {
  items: Item[];
  size?: SizeType;
};

type Item = IconButtonProps | IconButtonAnchorProps;

const samples: Item[] = [
  { name: "add", href: "/" },
  { name: "add", onClick: () => null },
  { name: "edit", onClick: () => null },
];

const BLOCK_NAME = "icon-button-group";

export default function IconButtonGroup({
  items = samples,
  size,
}: IconButtonGroupProps) {
  return (
    <ul className={styles[`${BLOCK_NAME}-wrapper`]}>
      {items.map((item) => (
        <li key={item.name} className={styles[`${BLOCK_NAME}-inner`]}>
          {"href" in item ? (
            <IconButtonAnchor
              name={item.name}
              href={item.href}
              variant="transparent"
              size={size}
            />
          ) : (
            <IconButton
              name={item.name}
              onClick={item.onClick}
              variant="transparent"
              size={size}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
