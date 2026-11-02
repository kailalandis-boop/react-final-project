function MovieDetails( movie) {
  return (
    <div className="movie-details__container">
        <div className="movie-details__back">
            <a className="movie-details__back-link" 
            href="/" data-discover="true">
                ← Back
            </a>
        </div>
        <div className="movie-details__content">
            <div className="movie-details__poster--wrapper">
                <img 
                    alt="{movie.Title}" 
                    className="movie-details__poster" 
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "/no-poster.png"
                    }
                />
                <div className="movie-details__info">
                    <h1 className="movie-details__title">
                        {movie.Title}
                    </h1>
                    <p className="movie-details__year">
                        <strong>Year:</strong> {movie.Year}
                    </p>
                    <p className="movie-details__rating">
                        <strong>Rating:</strong> {movie.imdbRating}/10
                    </p><p className="movie-details__released">
                        <strong>Released:</strong> 04 May 2012
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
                    <h3>Actors</h3><p>{movie.Actors}</p>
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
  )
}

export default MovieDetails