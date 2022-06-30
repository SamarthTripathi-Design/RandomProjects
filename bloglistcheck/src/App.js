import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Blog from "./Blog";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
