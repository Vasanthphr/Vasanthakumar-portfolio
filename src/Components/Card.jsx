import "./Card.css"
import React from "react";
function Card({item}) {
    return(
        <div className="col-lg-2 m-3">
        <div className="card" style={{ width: "8rem" }}>
          <img src={item.image} style={{height:"6rem" }} className="card-img-top" alt="skill" />
          <div className="card-body">
            <h5 className="card-title">{item.name }</h5>
            <a href={item.url} className="link">
              Learn More
            </a>
          </div>
        </div>
      </div>
    )
}

export default Card;