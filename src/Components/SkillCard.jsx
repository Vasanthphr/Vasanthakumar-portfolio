import "./SkillCard.css";
import React from "react";
function SkillCard({ item }) {
  return (
    <div className="col-lg-3 m-4 ">
      <div className="card" style={{ width: "8rem" }}>
        <img
          src={item.image}
          style={{ height: "6rem" }}
          className="card-img-top mt-2"
          alt="skill"
        />
        <div className="card-body">
          <a href={item.url} target="blank" className="link">
            <p className="card-title">{item.name}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
