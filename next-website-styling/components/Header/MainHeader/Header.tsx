"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import HeaderTabBar from "../HeaderTabBar/HeaderTabBar";
import { HeaderTabProps } from "../HeaderTab/HeaderTab";
import myLogo from "../../../public/Images/vista_logos/colored-logo.svg";
import SearchBar from "@/components/SearchBar/search-bar";

interface HeaderProps {
  tabs: HeaderTabProps[];
}
const HeaderComponent = ({ tabs }: HeaderProps) => {
  return (
    <header className={styles.headerComponent}>
      <div className={styles.leftSection}>
        <Image src={myLogo} alt="My Logo" width={60} height={60} />
        <HeaderTabBar tabs={tabs} />
      </div>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <div className={styles.homeLogo}>
        <div>My Website</div>
      </div>
    </header>
  );
};
export default HeaderComponent;
