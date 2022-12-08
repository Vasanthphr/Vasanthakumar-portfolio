import React from "react";
import './Projects.css'

function ProjectsCard({item}) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card" style={{ width: "18rem" }}>
          <img style={{ width: "17rem",height:"20rem" }} src={`${item.animation}`}  alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.projectName}</h5>
           <a href={item.app} target="_blank" className="viewproject">
              <h3>View Project</h3>
            </a>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
