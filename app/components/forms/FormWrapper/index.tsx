import styles from "./styles.module.scss";

export const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["form-wrapper"]}>{children}</div>;
};
