import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Fullcard from "./Fullcard";

const App = () => {
  const data = [
    {
      title: "HTML",
      description: "This is HTML",
    },
    {
      title: "CSS",
      description: "This is CSS",
    },
    {
      title: "JS",
      description: "This is JS",
    },
    {
      title: "React",
      description: "This is React",
    },
    {
      title: "Redux",
      description: "This is Redux",
    },
    {
      title: "Java",
      description: "This is Java",
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/card/:title" element={<Fullcard data={data} />} />
      </Routes>
    </>
  );
};

export default App;
