import "./Assets/Image/webdeveloper.png";
import "./App.css";
import "./Components/Navbar.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomePage from "./Components/Home";
import "./Components/WelcomePage.css";
import Portal from "./Components/Portal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contactme from "./Components/Contactme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contactme />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
