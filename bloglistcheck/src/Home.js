import React, { useEffect, useState } from "react";

import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const userBlogs = await resp.json();
      setBlogs(userBlogs);
    };
    getBlogs();
  }, []);

  return (
    <>
      <h1>BLOG POSTS</h1>

      <div className="blog-container">{<Bloglist blogs={blogs} />}</div>
    </>
  );
};

export default Home;
