import "./Navbar.css";
import logo from "../assets/logo-no-background.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="row">
      <div className="col-lg-12 ">
        <nav className="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <div className="navbar-logo">
              <img src={logo} alt="VK-logo" />
              <h2>VasanthaKumar</h2>
            </div>

            <div class="nav">
              <div className="nav-item-1">
                <Link class="nav-link active" to="/">
                  <h5>Home</h5>
                </Link>
              </div>
              <div className="nav-item-2">
                <Link class="nav-link active" to="/about">
                  <h5>About</h5>
                </Link>
              </div>
              <div className="nav-item-3">
                <Link class="nav-link active" aria-current="page" to="skills">
                  <h5>Skills</h5>
                </Link>
              </div>
              <div className="nav-item-4">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/projects"
                >
                  <h5>Projects</h5>
                </Link>
              </div>
            </div>

            <div className="btn">
              <Link to="/contact">
                <button>Contact Me</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
