import styles from "./About.module.css";
import profilPic from "../../assets/images/profile-pic2.jpg";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTexts}>
        <h1>
          Who is <span>Pierre Pruvost</span> ?
        </h1>
        <p className={styles.aboutTextsJoke}>
          Wait... it's me !!! I am sure i can easily introduce myself to you !
        </p>
        <p className={styles.aboutTextsDescription}>
          I'm a 23 year old developer usually living in Paris, France (currently
          spending a year in korea for school, until july 2027).
          <br />
          <br />I started developing websites at 19 at the beginning of my last
          year of Bachelor Degree in Accounting and Management. After obtaining
          it, I decided to go to Epitech (until 2028) to consolidate what i had
          begun to learn alone, but mainly to discover other domains than
          front-end and put into practice all my skills across many projects and
          internship.
          <br />
          <br />
          After these years, I can affirm I have no regret to have left
          accounting !
          <br />
          <br />
          Now, I'm looking forward to contribute to any projects related to
          open-source, decentralization and data privacy. However, I'm still
          open to every type of projects so if you are interested by my profile,
          don't hesitate to contact me at pierre.pruvost@epitech.eu
        </p>
      </div>
      <div className={styles.aboutCard}>
        <img src={profilPic} />
      </div>
    </div>
  );
}
