import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import WelcomePage from "./Home";

function Portal() {
  return (
    <div id="wrapper">
      <Navbar />
      <div id="div content-wrapper">
        <div id="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Portal;
