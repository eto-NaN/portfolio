import styles from "./About.module.css";
import profilPic from "../../assets/images/profile-pic.jpg";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTexts}>
        <h1>Who is Pierre Pruvost ?</h1>
        <p>
          Ob haec et huius modi multa, quae cernebantur in paucis, omnibus
          timeri sunt coepta. et ne tot malis dissimulatis paulatimque
          serpentibus acervi crescerent aerumnarum, nobilitatis decreto legati
          mittuntur: Praetextatus ex urbi praefecto et ex vicario Venustus et ex
          consulari Minervius oraturi, ne delictis supplicia sint grandiora,
          neve senator quisquam inusitato et inlicito more tormentis
          exponeretur.
        </p>
      </div>
      <div className={styles.aboutCard}>
        <img src={profilPic} />
        <p className={styles.aboutJob}>Dev</p>
        <p className={styles.aboutName}>Pierre Pruvost</p>
      </div>
    </div>
  );
}
