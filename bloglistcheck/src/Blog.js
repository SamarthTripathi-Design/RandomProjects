import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Blog = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{`this is the id ${id}`}</h1>
    </div>
  );
};

export default Blog;
