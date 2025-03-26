import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
