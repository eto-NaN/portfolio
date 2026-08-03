import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    const projectsSection = document.getElementById("projects");

    if (!projectsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProjectsVisible(
          entry.isIntersecting && entry.intersectionRatio > 0.15,
        );
      },
      {
        threshold: [0, 0.15, 0.35, 0.6],
      },
    );

    observer.observe(projectsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <div
        className={`siteBackground ${isProjectsVisible ? "siteBackgroundBlurred" : ""}`}
        aria-hidden="true"
      />
      <header>
        <nav>{<Navbar />}</nav>
      </header>

      <main>{<Hero />}</main>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
