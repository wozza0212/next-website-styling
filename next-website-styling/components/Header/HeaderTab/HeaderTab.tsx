import styles from "./HeaderTab.module.css";

export interface HeaderTabProps {
  title: string;
  href: string;
}

const HeaderTab = ({ title, href }: HeaderTabProps) => {
  return (
    <li className={styles.headerSingleTab}>
      <a href={href}>{title}</a>
    </li>
  );
};
export default HeaderTab;
