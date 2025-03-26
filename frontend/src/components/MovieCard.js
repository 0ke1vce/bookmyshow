import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const placeholderImage = "https://via.placeholder.com/150?text=No+Image";

  return (
    <div className="movie-card">
      <img
        src={movie.image || placeholderImage}
        alt={movie.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholderImage;  // Fallback image
        }}
      />
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
