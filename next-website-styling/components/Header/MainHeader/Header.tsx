import Image from "next/image";
import styles from "./Header.module.css";
import HeaderTabBar from "../HeaderTabBar/HeaderTabBar";
import { HeaderTabProps } from "../HeaderTab/HeaderTab";

interface HeaderProps {
  tabs: HeaderTabProps[];
}
const HeaderComponent = ({ tabs }: HeaderProps) => {
  return (
    <header className={styles.headerComponent}>
      <div className={styles.homeLogo}>
        <div className={styles.logo}>
          <Image src="/globe.svg" alt="Globe" width={40} height={40} />
        </div>
        <div>My Website</div>
      </div>
      <HeaderTabBar tabs={tabs} />
    </header>
  );
};
export default HeaderComponent;
