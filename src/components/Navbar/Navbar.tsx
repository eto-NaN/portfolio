import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <section className={styles.navbar} aria-label="Navbar section">
      <div className={styles.navbarContent}>
        <a href="https://github.com/eto-NaN">
          <img
            src="/src/assets/images/github-logo.jpg"
            alt="Check my github" />
        </a>
      </div>
    </section>
  );
}
