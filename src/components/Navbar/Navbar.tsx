import styles from "./Navbar.module.css";
import githubLogo from '../../assets/images/github-logo.jpg';

export default function Navbar() {
  return (
    <section className={styles.navbar} aria-label="Navbar section">
      <div className={styles.navbarContent}>
        <a href="https://github.com/eto-NaN">
          <img
            src={githubLogo}
            alt="Check my github" />
        </a>
      </div>
    </section>
  );
}
