import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {data.map((card, index) => {
        return (
          <div className="card">
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <Link to={`/card/${card.title}`}>View More</Link>
          </div>
        );
      })}
    </>
  );
};

export default Card;
