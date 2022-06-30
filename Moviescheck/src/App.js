import { useEffect, useState } from "react";
import React from "react";

export default function App() {
  const [movie, setMovie] = useState();
  const fetchResults = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc"
    );
    const result = await res.json();
    setMovie(result);
    console.log(movie);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="App">
      {/* { 
      movie.map((ele) => {
        return (
          <div className="conatiner">
            <h1>{ele.title}</h1>
            <p>{ele.poster_path}</p>
          </div>
        );
      })
      } */}
    </div>
  );
}
