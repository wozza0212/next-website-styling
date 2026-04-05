import Image from "next/image";
import styles from "./Hero.module.css";
const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your needs.</p>
      </div>
      <div>
        <Image
          src="/HomePageImage/profile.JPG"
          alt="Hero Image"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default HeroSection;
