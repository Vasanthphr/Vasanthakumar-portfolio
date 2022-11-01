import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="row">
      <div className="col-lg-12 ">
        <nav class="navbar navbar-expand-lg bg-secondary mt-2">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <h2>VasanthaKumar</h2>
            </a>

            <div class="navbar-nav ">
              <div className="nav-item">
                <Link class="nav-link active" to="/">
                  <h5>Home</h5>
                </Link>
              </div>
              <div className="nav-item">
                <Link class="nav-link active" to="/about">
                  <h5>About</h5>
                </Link>
              </div>
              <div className="nav-item">
                <Link class="nav-link active" aria-current="page" to="skills">
                  <h5>Skills</h5>
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/projects"
                >
                  <h5>Projects</h5>
                </Link>
              </div>
            </div>

            <div className=" btn">
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
