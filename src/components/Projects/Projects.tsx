import styles from "./Projects.module.css";
import { ProjectsCardTab } from "./data.tsx";
import githubLogo from '../../assets/images/github-logo.jpg';
import Popup from 'reactjs-popup';

export default function Projects() {
  return (
    <section className={styles.projects} aria-label="Projects section">
      <div className={styles.projectsHeader}>
        <h1>My projects</h1>
        <p>Few projects realized alone or with my crew</p>
      </div>
      <div className={styles.projectsContent}>
        {ProjectsCardTab.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <div className={styles.projectCardHeader}>
            <div className={styles.projectCardHeaderFirstLine}>
              <h3>{project.title}</h3>
              <a href={project.link}>
                <img
                  src={githubLogo}
                  alt="Check my github" />
              </a>
            </div>
              <p className={styles.projectCardYear}>{project.year}</p>
            </div>
            <p>{project.shortDescription}</p>
            <div className={styles.projectCardfooter}>
              <div className={styles.projectCardtags}>
                {project.tags.map((tag) => (
                <p>{tag}</p>
                ))}
              </div>
              <Popup trigger={<button>view details -&gt;</button>} modal nested contentStyle={{
                  width: '50%',
                  margin: 0,
                }} overlayStyle={{
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                <div className={styles.projectCardPopup}>
                  <div className={styles.projectCardPopupHeader}>
                  <h3>{project.title}</h3>
                  <a href={project.link}>
                    <img
                      src={githubLogo}
                      alt="Check my github" />
                    </a>
                  </div>
                  <p>{project.bigDescription}</p>
                </div>
              </Popup>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}
