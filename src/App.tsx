import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
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
