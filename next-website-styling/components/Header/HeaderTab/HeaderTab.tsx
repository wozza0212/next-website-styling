"use client";
import styles from "./HeaderTab.module.css";
import { useState } from "react";

export interface HeaderTabProps {
  title: string;
  href: string;
  multiLinks?: { title: string; href: string }[];
}

const HeaderTab = ({ title, href, multiLinks }: HeaderTabProps) => {
  const [isOpen, setIsOpen] = useState(false);
  if (multiLinks) {
    return (
      <div
        onMouseEnter={() => setIsOpen(!isOpen)}
        onMouseLeave={() => setIsOpen(!isOpen)}
      
      >
        <li className={styles.headerMultiTab}>
          <a href={href}>{title}</a>
          <div
            className={
              isOpen
                ? styles.headerMultiLinkDropdownShowContent
                : styles.headerMultiLinkDropdown
            }
          >
            <ul className={styles.headerMultiLinkList}>
              {multiLinks.map((link) => (
                <li key={link.href} className={styles.headerMultiLinkItem}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </div>
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
