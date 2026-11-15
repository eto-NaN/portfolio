import styles from "./About.module.css";
import profilePic from "../../assets/images/profile-pic2.jpg";

const EMAIL = "pierre.pruvost@epitech.eu";

export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <h2 id="about-title" className={styles.aboutTitle}>
        Who is <span>Pierre Pruvost</span>?
      </h2>

      <div className={styles.aboutBody}>
        <img
          className={styles.photo}
          src={profilePic}
          alt="Portrait of Pierre Pruvost"
        />

        <div className={styles.aboutTexts}>
          <p className={styles.aboutLead}>
            Wait... it’s me! I’m sure I can easily introduce myself to you!
          </p>
          <p className={styles.aboutText}>
            I’m a 23-year-old developer usually living in Paris, France
            (currently spending a year in Korea for school, until July 2027).
          </p>
          <p className={styles.aboutText}>
            I started developing websites at 19, at the beginning of my last
            year of a Bachelor’s degree in Accounting and Management. After
            graduating, I decided to go to Epitech (until 2028) to consolidate
            what I had started learning on my own, but mainly to discover
            domains beyond front-end and put my skills into practice across many
            projects and internships.
          </p>
          <p className={styles.aboutText}>
            After these years, I can say I have no regrets about leaving
            accounting!
          </p>
          <p className={styles.aboutText}>
            Now, I’m looking forward to contributing to projects related to open
            source, decentralization and data privacy, but I’m open to every
            type of project. If you’re interested in my profile, don’t hesitate
            to get in touch:
          </p>
          <a className={styles.aboutContact} href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
