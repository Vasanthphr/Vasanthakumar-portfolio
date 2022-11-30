import "./SkillCard.css";
import React from "react";
import { Link } from "react-router-dom";
function SkillCard({ item }) {
  return (
    <div className="col-lg-2 skill-icons m-4 ">
      <a href={item.url} target="blank" className="link">
        <div className="icons" style={{ width: "5rem" }}>
          <img
            src={item.image}
            style={{ height: "5rem" }}
            className="card-img-top mt-2"
            alt="skill"
          />
          <div className="card-body">
            <h6 className="card-title">{item.name}</h6>
          </div>
        </div>
      </a>
    </div>
  );
}

export default SkillCard;
