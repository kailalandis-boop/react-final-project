function MovieDetails() {
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
                    alt="The Avengers" 
                    className="movie-details__poster" 
                    src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
                />
                <div className="movie-details__info">
                    <h1 className="movie-details__title">
                        The Avengers
                    </h1>
                    <p className="movie-details__year">
                        <strong>Year:</strong> 2012
                    </p>
                    <p className="movie-details__rating">
                        <strong>Rating:</strong> 8.0/10
                    </p><p className="movie-details__released">
                        <strong>Released:</strong> 04 May 2012
                    </p>
                </div>
            </div>
            <div className="movie-details__text--wrapper">
                <div className="movie-details__detail">
                    <h3>Genre</h3>
                    <p>Action, Sci-Fi</p>
                </div>
                <div className="movie-details__detail">
                    <h3>Writer</h3>
                    <p>Joss Whedon, Zak Penn</p>
                </div>
                <div className="movie-details__detail">
                    <h3>Actors</h3><p>Robert Downey Jr., Chris Evans, Scarlett Johansson</p>
                </div>
                <div className="movie-details__detail">
                    <h3>Plot</h3>
                    <p>Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p>
                </div>
                <div className="movie-details__detail">
                    <h3>Language</h3>
                    <p>English, Russian</p>
                </div>
                <div className="movie-details__detail">
                    <h3>Awards</h3>
                    <p>Nominated for 1 Oscar. 43 wins &amp; 81 nominations total</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails