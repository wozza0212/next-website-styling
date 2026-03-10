import styles from "./HeaderTabBar.module.css";
import { HeaderTabProps } from "../HeaderTab/HeaderTab";
interface HeaderTabBarProps {
  tabs: HeaderTabProps[];
}

const HeaderTabBar = ({ tabs }: HeaderTabBarProps) => {
  return (
    <div>
      <ul className={styles.headerList}>
        {tabs.map((tab) => (
          <li key={tab.href}>
            <a href={tab.href}>{tab.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderTabBar;
