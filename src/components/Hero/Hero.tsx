import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroContent}>
        <h1 id="hero-title">Welcome</h1>
        <p className={styles.subtitle}>
          to <span className={styles.highlight}>Pierre Pruvost</span>’s
          developer journey
        </p>
        <p className={styles.description}>
          Student developer at Epitech, building low-level and network tools.
        </p>
        <a href="#projects" className={styles.cta}>
          See my projects
        </a>
      </div>
    </section>
  );
}
