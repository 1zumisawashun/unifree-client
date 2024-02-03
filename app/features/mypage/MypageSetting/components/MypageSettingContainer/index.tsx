import styles from "./styles.module.scss";

const BLOCK_NAME = "mypage-setting-container";

export function MypageSettingContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles[`${BLOCK_NAME}`]}>{children}</div>;
}
