import styles from "./Footer.module.css";
import mailLogo from "../../assets/images/mail-logo.png";
import linkedinLogo from "../../assets/images/linkedin-logo.png";

const EMAIL = "pierre.pruvost@epitech.eu";
const LINKEDIN_URL = "https://www.linkedin.com/in/pierre-pruvost-132121243/";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Pierre Pruvost</p>
      <div className={styles.footerLinks}>
        <a href={`mailto:${EMAIL}`} aria-label="Send me an email">
          <img src={mailLogo} alt="" />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pierre Pruvost on LinkedIn"
        >
          <img src={linkedinLogo} alt="" />
        </a>
      </div>
    </footer>
  );
}
