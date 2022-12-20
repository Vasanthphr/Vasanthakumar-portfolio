import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  
    

        <nav className="navbar topbar navbar-expand-lg ">
          <div class="container-fluid">
            <div className="navbar-logo">
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
            <Link to="/contact">
              <div className="con-btn">
                <span >Contact Me</span>
              </div>
            </Link>
          </div>
        </nav>
     
   
//         <nav class="navbar navbar-expand-lg bg-light">
//   <div class="container-fluid">
//     <Link class="navbar-brand" to="#"><h1>Vasanthakumar</h1></Link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarText">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item  nav-item-1">
//           <Link class="nav-link " aria-current="page" to="/">Home</Link>
//         </li>
//         <li class="nav-item active nav-item-2">
//           <Link class="nav-link" to="/about">About</Link>
//         </li>
//         <li class="nav-item nav-item-3">
//           <Link class="nav-link" to="/skills">Skills</Link>
//         </li>
//         <li class="nav-item nav-item-4">
//           <Link class="nav-link" to="/projects">Projects</Link>
//         </li>
//       </ul>
//       <Link class="nav-link" to="/contact">
//       <button class="navbar-text con-btn">
//        Contact me
//       </button></Link>
//     </div>
//   </div>
// </nav>
 
  );
}

export default Navbar;
