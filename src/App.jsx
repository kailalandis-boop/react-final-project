import './App.css'
import Nav from "./components/Nav"
import MovieCard from './components/ui/MovieCard'
import Footer from './components/Footer'

function App({ movies, loading, error }) {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="controls">
          <p id="resultsInfo" 
            className="resultsInfo">Showing: 
          </p>
          <div className="sort__container">
            <label htmlFor="sortSelect">Sort: </label>
            <select id="sortSelect">
              <option value="default">Default</option>
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        {loading && <p>Loading movies...</p>}
        {error && <p>{error}</p>}
        <div className="movies-grid" id="moviesGrid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
