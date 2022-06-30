import React from "react";
import Card from "./Card";

const Home = ({ data }) => {
  return (
    <section className="home">
      <div className="container">
        <Card data={data} />
      </div>
    </section>
  );
};

export default Home;
