function MovieCard({ movie }) {
  return (
    <div key={movie.imdbID} className="movie-card">
        <a href={`/movie/${movie.imdbID}`} 
        data-discover="true">
            <img 
                alt={movie.Title} 
                className="movie-card__img" 
                src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "/no-poster.png"
              }
            />
            <h2 className="movie-card__title">
                {movie.Title}
            </h2>
            <p className="movie-card__year">
                {movie.Year}
            </p>
        </a>
    </div>
  )
}

export default MovieCard