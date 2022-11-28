import Card from "./Card";

function Skills() {
  const skills = [
    {
      name: "HTML",
      image: "image/html.png",
      url:"https://www.w3schools.com/html/",
    },
    {
      name:"CSS",
      image:"image/CSS.png",
      url:"https://www.w3schools.com/css/"
    },
    {
      name:"Bootstrap",
      image:"image/bootstrap.png"
    },
    {
      name:"JavaScript",
      image:"image/javascp1.png"
    },
    {
      name:"React JS",
      image:"image/React.png"
    },
    {
      name:"MongoDB",
      image:"image/mongo.png"
    },
    {
      name:"My Sql",
      image:"image/mysql.png"
    },
    {
      name:"Node JS",
      image:"image/node.png"
    },
    {
      name:"Express JS",
      image:"image/express.png"
    },
   
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-6 col-sm-3">
          <div className="row">
            {skills.map((item) => {
              return <Card item={item}></Card>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
