import '../src/App.css'
import Nav from '../src/components/Nav';
import MovieCard from '../src/components/ui/MovieCard'
import Footer from '../src/components/Footer'
import { useState, useEffect, useCallback, useMemo } from 'react'

const navigation = performance.getEntriesByType("navigation")[0];

if (navigation?.type === "reload") {
  sessionStorage.removeItem("homeMovies");
  sessionStorage.removeItem("homeSearchQuery");
  sessionStorage.removeItem("homeSortOrder");
}

function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [movies, setMovies] = useState(() => {
    return JSON.parse(sessionStorage.getItem("homeMovies") || "[]");
  });
  const [searchQuery, setSearchQuery] = useState(() => {
    return sessionStorage.getItem("homeSearchQuery") || "Avengers";
  });
  const [sortOrder, setSortOrder] = useState(() => {
    return sessionStorage.getItem("homeSortOrder") || "default";
  });
  const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let timeout;

    if (loading) {
      timeout = setTimeout(() => {
        setShowSkeleton(true);
      }, 300);
    } else {
      setShowSkeleton(false);
    }

    return () => clearTimeout(timeout);
  }, [loading]);

  const handleSearch = useCallback(async (search) => {
    if (!search?.trim()) return;

    setSearchQuery(search);
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(search)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }

      const data = await response.json();

      await delay(1000);

      if (data.Response === "True") {
        setMovies(data.Search);

        sessionStorage.setItem(
          "homeMovies",
          JSON.stringify(data.Search)
        );

        sessionStorage.setItem("homeSearchQuery", search);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found.");

        sessionStorage.setItem("homeMovies", JSON.stringify([]));
        sessionStorage.setItem("homeSearchQuery", search);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load default movies when the page opens
  useEffect(() => {
    if (sessionStorage.getItem("homeMovies") === null) {
      handleSearch("Avengers");
    }
  }, [handleSearch]);

  const sortedMovies = useMemo(() => {
  const sorted = [...movies];

  switch (sortOrder) {
    case "a-z":
      return sorted.sort((a, b) =>
        a.Title.localeCompare(b.Title)
      );

    case "z-a":
      return sorted.sort((a, b) =>
        b.Title.localeCompare(a.Title)
      );

    case "newest":
      return sorted.sort((a, b) =>
        (parseInt(b.Year, 10) || 0) -
        (parseInt(a.Year, 10) || 0)
      );

    case "oldest":
      return sorted.sort((a, b) =>
        (parseInt(a.Year, 10) || 0) -
        (parseInt(b.Year, 10) || 0)
      );

    default:
      return sorted;
  }
}, [movies, sortOrder]);

  return (
    <>
      <Nav onSearch={handleSearch} />
      <main className="main">
        <div className="controls">
          <p id="resultsInfo" 
            className="resultsInfo">Showing: "{searchQuery}"
          </p>
          <div className="sort__container">
            <label htmlFor="sortSelect">Sort: </label>
            <select
              id="sortSelect"
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value);
                sessionStorage.setItem("homeSortOrder", e.target.value);
              }}
            >
            <option value="default">Default</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          </div>
        </div>
        {error && <p>{error}</p>}
        <div className="movies-grid" id="moviesGrid">
          {showSkeleton ? (
            Array.from({ length: 10 }).map((_, index) => (
              <MovieCard key={index} loading={true} />
            ))
          ) : !loading ? (
            sortedMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
