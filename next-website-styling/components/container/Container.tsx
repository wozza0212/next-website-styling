import styles from "./container.module.css";

interface ContainerProps {
  children: React.ReactNode
  size?: "small" | "medium" | "large" | "full"
}

const ContainerComponent = ({ children, size = "full" }: ContainerProps) => {
  return <div className={`${styles.container} ${styles[size]}`}>{children}</div>;
};

export default ContainerComponent;