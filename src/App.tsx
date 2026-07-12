import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <header>
        <nav>{<Navbar />}</nav>
      </header>

      <main>{<Hero />}</main>
      <Footer />
    </div>
  );
}

export default App;
