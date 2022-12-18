import React from "react";
import "./Projects.css";

function ProjectsCard({ item }) {
  return (
    <>
  <div className="col-lg-6">
        <div className="card" >
          <img
          className="project-card-image"
           
            src={item.animation}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.projectName}</h5>
            <center>
            <a href={item.liveLink} target="_blank" className="btn">
                {" "}
                Preview Site
              </a>
              <a href={item.codeLink} target="_blank" className="btn">
                View Code
              </a>
              
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
