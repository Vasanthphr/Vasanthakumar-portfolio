import './Projects.css'
import ProjectsCard from './ProjectsCard'

function Projects() {
  const myProjects = [
        
    {
      id: 1,
     projectName: `Mobile-Shopping`,
     animation:"../projects/mobile-shopping.gif",
     app:"https://leafy-crisp-b8111f.netlify.app/",
     
    },
   
    {
        id: 2,
        projectName: 'Simple Booking App',
        animation:"../projects/movie.gif",
        app:"https://guvi-hackathon2-frontend-dun.vercel.app/"
        
        
      },
      {
        id: 3,
        projectName: 'Admin Page',
        animation:"../projects/admin.gif",
        app:"https://super-sherbet-e5a4b0.netlify.app/"
        
        
      }
      
    ]
 
return (
<>
<div className='mian'>

<div className="container m-5">
    <div className="row">
      
  {myProjects.map((item) => {
            return<ProjectsCard item={item}></ProjectsCard>
        })}
</div>
</div>
</div>
</>
)
}

export default Projects;
