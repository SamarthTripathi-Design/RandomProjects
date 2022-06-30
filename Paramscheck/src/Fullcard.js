import React from "react";
import { useParams } from "react-router-dom";

const Fullcard = ({ data }) => {
  const { title } = useParams();
  const cardValue = data.filter((card) => card.title === title);

  return (
    <section className="full">
      <div className="container">
        {cardValue.map((card) => {
          return (
            <div className="fullcard">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Fullcard;
