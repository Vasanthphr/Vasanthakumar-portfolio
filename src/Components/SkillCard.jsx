import "./SkillCard.css";
import React from "react";
function SkillCard({ item }) {
  return (
    <div className="col-lg-2 skill-icons m-4 ">
      
        <div className="icons">
          <img
            src={item.image}
            
            className="card-img-top mt-2"
            alt="skill"
          />
          
          <div className="card-body">
          <a href={item.url} target="blank" className="link">
            <h6 className="card-title">{item.name}</h6>
            </a>
          </div>
        </div>
     
    </div>
  );
}

export default SkillCard;
