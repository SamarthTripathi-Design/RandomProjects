import React from "react";
import { NavLink } from "react-router-dom";

const Bloglist = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => {
        const { id, title, body } = blog;
        return (
          <article className="blog" key={id}>
            <h5 className="title">{title}</h5>
            <span className="info">{body}</span>
            <div className="comments">
              <button>View comments</button>
              <NavLink to={`/blogs/${id}`} className="link">
                View
              </NavLink>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Bloglist;
