import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <div className="container-fluid bg-success">
        <Home />
        <Education />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
