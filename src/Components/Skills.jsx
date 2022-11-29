import SkillCard from "./SkillCard";
import './SkillCard.css'
import Skillimg from "../assets/web_developing.gif";

function Skills() {
  const skills = [
    {
      name: "HTML",
      image: "image/html.png",
      url: "https://www.w3schools.com/html/",
    },
    {
      name: "CSS",
      image: "image/CSS.png",
      url: "https://www.w3schools.com/css/",
    },
    {
      name: "Bootstrap",
      image: "image/bootstrap.png",
      url: "https://getbootstrap.com/"
    },
    {
      name: "JavaScript",
      image: "image/javascp1.png",
      url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "React JS",
      image: "image/React.png",
      url:"https://reactjs.org/"
    },
    {
      name: "MongoDB",
      image: "image/mongo.png",
      url:"https://www.mongodb.com/"
    },
    {
      name: "My Sql",
      image: "image/mysql.png",
      url:"https://www.mysql.com/"
    },
    {
      name: "Node JS",
      image: "image/node.png",
      url:"https://nodejs.org/en/"
    },
    {
      name: "Express JS",
      image: "image/express.png",
      url:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
    },
  ];

  return (
    <>
   <div className="container">
   <div className="headline">
      <h3>My Skills</h3>      
    </div>
    <div className="row mt-3">
      <div className="col-lg-6 image">
        <img
          src={Skillimg} style={{width:"45rem",height:"30rem"}}
          alt="image" 
        />
      </div>

      <div className="rainbow col-lg-6">
        <div className="row">
          {skills.map((item) => {
            return <SkillCard item={item}></SkillCard>;
          })}
        </div>
      </div>
    </div>
   </div>
    </>
  );
}

export default Skills;
