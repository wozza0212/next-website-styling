import styles from "./HeaderTab.module.css";

export interface HeaderTabProps {
  title: string;
  href: string;
  multiLinks?: { title: string; href: string }[];
}

const HeaderTab = ({ title, href, multiLinks }: HeaderTabProps) => {
  if (multiLinks) {
    return (
      <li className={styles.headerMultiTab}>
        <a href={href}>{title}</a>
        <div className={styles.headerMultiLinkDropdown}>
        <ul className={styles.headerMultiLinkList}>
          {multiLinks.map((link) => (
            <li key={link.href} className={styles.headerMultiLinkItem}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li className={styles.headerSingleTab}>
        <a href={href}>{title}</a>
      </li>
    );
  }
};
export default HeaderTab;
