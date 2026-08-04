import styles from "./Footer.module.css";
import mailLogo from "../../assets/images/mail-logo.png";
import linkedinLogo from "../../assets/images/linkedin-logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Pierre Pruvost</p>
      <div className={styles.footerLinks}>
        <a href="mailto:pierre.pruvost@epitech.eu" target="_blank">
          <img src={mailLogo} alt="Mail icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/pierre-pruvost-132121243/"
          target="_blank"
        >
          <img src={linkedinLogo} alt="Linkedin icon" />
        </a>
      </div>
    </footer>
  );
}
