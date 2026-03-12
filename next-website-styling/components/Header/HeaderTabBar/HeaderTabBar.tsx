import styles from "./HeaderTabBar.module.css";
import HeaderTab, { HeaderTabProps } from "../HeaderTab/HeaderTab";
interface HeaderTabBarProps {
  tabs: HeaderTabProps[];
}

const HeaderTabBar = ({ tabs }: HeaderTabBarProps) => {
  return (
    <div>
      <ul className={styles.headerList}>
        {tabs.map((tab) => (
          <HeaderTab key={tab.href} title={tab.title} href={tab.href} />
        ))}
      </ul>
    </div>
  );
};

export default HeaderTabBar;
