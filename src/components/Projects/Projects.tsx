import type { KeyboardEvent } from "react";
import Popup from "reactjs-popup";
import { SiGithub } from "react-icons/si";
import { FiX } from "react-icons/fi";
import styles from "./Projects.module.css";
import { ProjectsCardTab } from "./data.tsx";

function openOnKey(e: KeyboardEvent<HTMLDivElement>) {
  if (e.target !== e.currentTarget) return;
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    e.currentTarget.click();
  }
}

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <div className={styles.projectsHeader}>
        <h2 id="projects-title">My projects</h2>
        <p>A few projects built alone or with my crew.</p>
      </div>

      <div className={styles.projectsContent}>
        {ProjectsCardTab.map((project) => (
          <Popup
            key={project.id}
            trigger={
              <div
                className={styles.projectCard}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                onKeyDown={openOnKey}
              >
                <div className={styles.projectCardHeader}>
                  <div className={styles.projectCardHeaderFirstLine}>
                    <h3>{project.title}</h3>
                    <a
                      className={styles.iconLink}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <SiGithub />
                    </a>
                  </div>
                  <p className={styles.projectCardYear}>{project.year}</p>
                </div>

                <p className={styles.projectCardDescription}>
                  {project.shortDescription}
                </p>

                <div className={styles.projectCardFooter}>
                  <ul className={styles.projectCardTags}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className={styles.projectCardMore}>Details</span>
                </div>
              </div>
            }
            modal
            nested
            lockScroll
            contentStyle={{ width: "min(760px, 92vw)", margin: 0 }}
            overlayStyle={{
              background: "rgba(25,15,30,0.55)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px",
            }}
          >
            {(close: () => void) => (
              <div className={styles.popup}>
                <div className={styles.popupHeader}>
                  <div>
                    <h3>{project.title}</h3>
                    <p className={styles.popupYear}>{project.year}</p>
                  </div>
                  <div className={styles.popupActions}>
                    <a
                      className={styles.iconLink}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <SiGithub />
                    </a>
                    <button
                      type="button"
                      className={styles.closeButton}
                      onClick={close}
                      aria-label="Close"
                    >
                      <FiX aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className={styles.popupBody}>
                  {project.bigDescription
                    .split("\n")
                    .filter(Boolean)
                    .map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                </div>
              </div>
            )}
          </Popup>
        ))}
      </div>
    </section>
  );
}
