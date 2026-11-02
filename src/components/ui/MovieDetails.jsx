function MovieDetails({ movie, loading = false }) {

    const delay = (ms) =>
        new Promise((resolve) => setTimeout(resolve, ms));

  if (loading) {
    return (
      <div className="movie-details__container">
        <div className="movie-details__back">
          <div className="movie-details__back-link--skeleton"></div>
        </div>

        <div className="movie-details__content">
          <div className="movie-details__poster--wrapper">

            {/* Poster skeleton */}
            <div className="movie-details__poster--skeleton"></div>

            {/* Movie information skeleton */}
            <div className="movie-details__info">
              <div className="movie-details__title--skeleton"></div>
              <div className="movie-details__year--skeleton"></div>
              <div className="movie-details__rating--skeleton"></div>
              <div className="movie-details__released--skeleton"></div>
            </div>
          </div>

          {/* Movie details skeleton */}
          <div className="movie-details__text--wrapper">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="movie-details__detail" key={index}>
                <div className="movie-details__heading--skeleton"></div>
                <div className="movie-details__text--skeleton"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="movie-details__container">
      <div className="movie-details__back">
        <a className="movie-details__back-link" href="/">
          ← Back
        </a>
      </div>

      <div className="movie-details__content">
        <div className="movie-details__poster--wrapper">
            {movie.Poster !== "N/A" ? (
                <img
                    alt={movie.Title}
                    className="movie-details__poster"
                    src={movie.Poster}
                />
            ) : (
                <div className="movie-details__poster-placeholder">
                    Movie Poster Not Available
                </div>
            )}
          <div className="movie-details__info">
            <h1 className="movie-details__title">
              {movie.Title}
            </h1>

            <p className="movie-details__year">
              <strong>Year:</strong> {movie.Year}
            </p>

            <p className="movie-details__rating">
              <strong>Rating:</strong> {movie.imdbRating}/10
            </p>

            <p className="movie-details__released">
              <strong>Released:</strong> {movie.Released}
            </p>
          </div>
        </div>

        <div className="movie-details__text--wrapper">
          <div className="movie-details__detail">
            <h3>Genre</h3>
            <p>{movie.Genre}</p>
          </div>

          <div className="movie-details__detail">
            <h3>Writer</h3>
            <p>{movie.Writer}</p>
          </div>

          <div className="movie-details__detail">
            <h3>Actors</h3>
            <p>{movie.Actors}</p>
          </div>

          <div className="movie-details__detail">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>

          <div className="movie-details__detail">
            <h3>Language</h3>
            <p>{movie.Language}</p>
          </div>

          <div className="movie-details__detail">
            <h3>Awards</h3>
            <p>{movie.Awards}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;