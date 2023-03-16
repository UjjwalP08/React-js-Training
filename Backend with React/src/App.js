import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieDataHandler =
   useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://swapi.dev/api/films");

        if (!response.ok) {
          throw new Error("Something Went Wrong.....");
        }

        const data = await response.json();

        const moviesInfo = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setData(moviesInfo);
      } catch (error) {
        // error message
        setError(error.message);
      }

      setIsLoading(false);
    },[]);
    

  useEffect(() => {
    fetchMovieDataHandler();
  }, [fetchMovieDataHandler]);

  let content = <p>No Movies Found...</p>;

  if (data.length > 0) {
    content = <MoviesList movies={data} />;
  }

  if (error) {
    content = <p>Something Went Wrong...</p>;
  }

  if (isLoading) {
    content = <p>Loading.....</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieDataHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
