import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <header>
        <nav>{/* Navigation */}</nav>
      </header>

      <main>{<Hero />}</main>
      <Footer />
    </div>
  );
}

export default App;
