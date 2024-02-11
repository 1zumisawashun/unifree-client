import { ShapeType } from "@/functions/types/Common";
import styles from "./styles.module.scss";

type Image = {
  src: string;
  shape?: ShapeType;
};

const BLOCK_NAME = "avatar";

export const Avatar = ({ src, shape = "round" }: Image) => {
  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      src={src}
      className={styles[`${BLOCK_NAME}`]}
      alt="avatar"
      data-shape={shape}
    />
  );
};
