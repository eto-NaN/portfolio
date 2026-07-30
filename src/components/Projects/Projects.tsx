import styles from "./Projects.module.css";
import { ProjectsCardTab } from "./data.tsx";
import githubLogo from '../../assets/images/github-logo.jpg';
import Popup from 'reactjs-popup';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-label="Projects section">
      <div className={styles.projectsHeader}>
        <h1>My projects</h1>
        <p>Few projects realized alone or with my crew</p>
      </div>
      <div className={styles.projectsContent}>
        {ProjectsCardTab.map((project) => (
          <Popup
            key={project.id}
            trigger={
              <div className={styles.projectCard}>
                <div className={styles.projectCardHeader}>
                  <div className={styles.projectCardHeaderFirstLine}>
                    <h3>{project.title}</h3>
                    <a href={project.link} onClick={(e) => e.stopPropagation()}>
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
                      <p key={tag}>{tag}</p>
                    ))}
                  </div>
                  <span>view ↗</span>
                </div>
              </div>
            }
            modal
            nested
            contentStyle={{
              width: 'min(900px, 92vw)',
              margin: 0,
            }}
            overlayStyle={{
              background: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
            }}
          >
            <div className={styles.projectCardPopup}>
              <div className={styles.projectCardPopupHeader}>
                <p>{project.year}</p>
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
        ))}
      </div>
    </section>
  );
}
