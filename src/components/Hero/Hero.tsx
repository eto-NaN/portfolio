import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.heroContent}>
        <h1>Hello !</h1>
        <h3 className={styles.subtitle}>
          I am <span className={styles.highlight}>PIERRE PRUVOST</span>
        </h3>
      </div>
    </section>
  );
}
