"use client";
import styles from "./HeaderTab.module.css";
import { useState } from "react";
import Image from "next/legacy/image";
import dropdownIcon from "../../../public/dropdown-icon.svg";
export interface HeaderTabProps {
  title: string;
  href: string;
  multiLinks?: { title: string; href: string }[];
}

const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

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
          <Image
            src={dropdownIcon}
            className={styles.dropdownIcon}
            alt="icon"
            width={16}
            height={16}
            loader={imageLoader}
          />
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
