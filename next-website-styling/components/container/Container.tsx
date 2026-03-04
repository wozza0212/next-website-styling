import styles from "./container.module.css";

const ContainerComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerComponent;