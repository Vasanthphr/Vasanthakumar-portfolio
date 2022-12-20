import SkillCard from "./SkillCard";
import "./SkillCard.css";
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
      url: "https://getbootstrap.com/",
    },
    {
      name: "JavaScript",
      image: "image/javascp1.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "React JS",
      image: "image/React.png",
      url: "https://reactjs.org/",
    },
    {
      name: "MongoDB",
      image: "image/mongo.png",
      url: "https://www.mongodb.com/",
    },
    {
      name: "My Sql",
      image: "image/mysql.png",
      url: "https://www.mysql.com/",
    },
    {
      name: "Node",
      image: "image/node.png",
      url: "https://nodejs.org/en/",
    },
    {
      name: "Express",
      image: "image/express.png",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
    },
    {
      name: "GIT",
      image: "image/git.png",
      url: "https://git-scm.com/",
    },
    {
      name: "Redux",
      image: "image/redux.png",
      url: "https://redux.js.org/",
    },
  ];

  return (
    <>
      <center><div className="container show-skills mt-3">
        <div className="row">
          {skills.map((item) => {
            return <SkillCard item={item}></SkillCard>;
          })}
        </div>
      </div></center>
    </>
  );
}

export default Skills;
