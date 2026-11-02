import './App.css'
import Nav from "./components/Nav"
import MovieCard from './components/ui/MovieCard'
import Footer from './components/Footer'

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  async function handleSearch(e) {
        e.preventDefault();

        if (!search.trim()) return;

        setLoading(true)
        setError("");

        try {
            const response = await fetch(
            `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(search)}`
            );

            const data = await response.json();

            if (data.Response === "True") {
                setMovies(data.Search);
            } else {
                setMovies([]);
                setError(data.Error || "No movies found.");
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
            setMovies([]);
        } finally {
            setLoading(false);
        }
    }

  return (
    <>
      <Nav onSearch={handleSearch} />
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
