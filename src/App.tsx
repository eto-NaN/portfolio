import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    const contentSection = document.getElementById("content");

    if (!contentSection) return;

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

    observer.observe(contentSection);

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

      <main>
        <Hero />
        <div id="content">
          <About />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
