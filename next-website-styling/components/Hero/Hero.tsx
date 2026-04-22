import Image from "next/image";
import styles from "./Hero.module.css";
const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p>
            Hey there, I'm Tom, my friends call me Wozza or Tommo though. I'm
            currently employed as a software engineer, so I thought I'd build
            this site in my spare time to help me develop my skills and feel
            more like a software engineer. Maybe help a few people along the way
            too by writing up what i've learned. Over the years I've done a lot
            of Typescript,React and Python, I also work with AWS, Azure and
            Terraform as part of an AWS Platform Team.{" "}
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.heroImage}
            src="/Images/HomePageImage/profile.JPG"
            alt="Hero Image"
            fill
            objectFit="cover"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
