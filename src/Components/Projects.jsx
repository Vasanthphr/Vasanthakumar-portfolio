import ProjectCard from "./ProjectCard";

function Projects() {
  const project = [
    {
      name: "SB Admin portal",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-6 col-sm-3">
          <div className="row">
            {project.map((projectData) => {
              return <ProjectCard projectData={projectData}></ProjectCard>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
