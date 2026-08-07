import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.heroContent}>
        <h1>Welcome</h1>
        <h3 className={styles.subtitle}>
          to <span className={styles.highlight}>Pierre Pruvost</span>'s
          developer journey
        </h3>
      </div>
    </section>
  );
}
