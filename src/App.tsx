import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="app">
      <header>
        <nav>{/* Navigation */}</nav>
      </header>

      <main>{<Hero />}</main>

      <footer>{/* Footer */}</footer>
    </div>
  );
}

export default App;
