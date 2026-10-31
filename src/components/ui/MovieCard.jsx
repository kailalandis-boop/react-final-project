function MovieCard({ title, year, image}) {
  return (
    <div className="movie-card">
        <a href="/tt0848228" 
        data-discover="true">
            <img 
                alt="The Avengers" 
                className="movie-card__img" 
                src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
            />
            <h2 className="movie-card__title">
                The Avengers
            </h2>
            <p className="movie-card__year">
                2012
            </p>
        </a>
    </div>
  )
}

export default MovieCard