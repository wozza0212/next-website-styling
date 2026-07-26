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
            though
            <br />
            I've built this site using{" "}
            <span className={styles.standout}>Next.js</span> and{" "}
            <span className={styles.standout}>TypeScript</span> to help develop
            my design and engineering skills
            <br />
            It's been deployed using{" "}
            <span className={styles.standout}>AWS</span>,{" "}
            <span className={styles.standout}>Terraform</span> and{" "}
            <span className={styles.standout}>GitHub Actions</span>.
            <br />
            I've tried to document my journey and the decisions in the{" "}
            <span className={styles.standout}>Blog</span> posts, coupled with
            some helpful guides
            <br />
            Enjoy your stay and feel free to reach out if you have any{" "}
            <span className={styles.standout}>questions</span>.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.heroImage}
            src="/Images/HomePageImage/profile.JPG"
            alt="Hero Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
