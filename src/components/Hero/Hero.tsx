import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.heroContent}>
        <h1>Hello !</h1>
        <h3 className={styles.subtitle}>
          I am <span className={styles.highlight}>PIERRE PRUVOST</span>
        </h3>
        <p className={styles.description}>
          a 23 year old developer from France interested in any projects
          contributing to open-source, decentralization and data privacy.
        </p>
      </div>
    </section>
  );
}
