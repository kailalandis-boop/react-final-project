import { Link } from "react-router-dom";
import { useState } from "react";

function MovieCard({ movie, loading = false }) {
  const [imageError, setImageError] = useState(false);

  if (loading) {
    return (
      <div className="movie-card--skeleton">
        <div className="movie-card__img--skeleton"></div>
        <div className="movie-card__title--skeleton"></div>
        <div className="movie-card__year--skeleton"></div>
      </div>
    );
  }

  if (!movie) return null;

  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        {hasPoster && !imageError ? (
          <img
            alt={movie.Title}
            className="movie-card__img"
            src={movie.Poster}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="movie-card__poster-placeholder">
            Movie Poster Not Available
          </div>
        )}

        <h2 className="movie-card__title">
          {movie.Title}
        </h2>

        <p className="movie-card__year">
          {movie.Year}
        </p>
      </Link>
    </div>
  );
}

export default MovieCard;