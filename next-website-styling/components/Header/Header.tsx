import Image from "next/image";

import styles from "./Header.module.css";

const HeaderComponent = () => {
  return (
    <header className={styles.headerComponent}>
      <div className={styles.homeLogo}>
        <div className={styles.logo}>
          <Image src="/globe.svg" alt="Globe" width={40} height={40} />
        </div>
        <div>My Website</div>
      </div>
      <div>
        <ul className={styles.headerList}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
    </header>
  );
};
export default HeaderComponent;
