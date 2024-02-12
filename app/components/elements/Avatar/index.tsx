import { ShapeType } from "@/functions/types/Common";
import styles from "./styles.module.scss";

const BLOCK_NAME = "avatar";

export const Avatar = ({
  id = 0,
  shape = "round",
}: {
  id?: number;
  shape?: ShapeType;
}) => {
  const url = id
    ? `https://avatar.iran.liara.run/public/${id}`
    : `https://avatar.iran.liara.run/public`;

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      src={url}
      className={styles[`${BLOCK_NAME}`]}
      alt="avatar"
      data-shape={shape}
    />
  );
};
