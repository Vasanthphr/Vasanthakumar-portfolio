import "./Projects.css";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  const myProjects = [
    {
      id: 1,
      projectName: "Simple Ecommerce site",
      animation: "../projects/mobile-shopping.gif",
      codeLink: "https://github.com/Vasanthphr/B37-Day24-ecommerce",
      liveLink: "https://astounding-vacherin-a6e625.netlify.app/",
    },

    {
      id: 2,
      projectName: "Simple Booking App",
      animation: "../projects/movie.gif",
      codeLink: "",
      liveLink: "",
    },
    {
      id: 3,
      projectName: "Admin Page",
      animation: "../projects/admin.gif",
      codeLink: "https://github.com/Vasanthphr/sb-admin-portal",
      liveLink: "https://deft-lily-d32179.netlify.app/",
    },
    
  ];

  return (
    <>
      <div className="mian">
        <div className="container m-5">
          <div className="row">
            {myProjects.map((item) => {
              return <ProjectsCard item={item}></ProjectsCard>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
