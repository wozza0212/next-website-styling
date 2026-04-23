import Image from "next/image";
import styles from "./Hero.module.css";
const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p>
            Hey there, I'm <span className={styles.standout}>Tom</span>, my
            friends call me <span className={styles.standout}>Wozza</span>{" "}
            though. I'm currently employed as a
            <span className={styles.standout}> Software Engineer</span>, so I
            thought I'd build this site in my spare time to help me{" "}
            <span className={styles.standout}> develop</span> my skills. Over
            the years I've done a lot of{" "}
            <span className={styles.standout}>Typescript,React and Python</span>
            , I also work with{" "}
            <span className={styles.standout}>AWS and Terraform</span> as part
            of an AWS Platform Team.{" "}
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
