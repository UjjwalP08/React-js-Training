import React,{useState} from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  function fetchMovieDataHandler() {
    fetch("https://swapi.dev/api/films")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        const moviesInfo = data.results.map(movieData => {
          return{
            id:movieData.episode_id,
            title:movieData.title,
            openingText:movieData.opening_crawl,
            releaseDate:movieData.release_date
          };
        })
        setData(moviesInfo);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieDataHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={data} />
      </section>
    </React.Fragment>
  );
}

export default App;
