
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetails from "../src/components/ui/MovieDetails";

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      setError(null);
      setMovie(null);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}`
        );

        const data = await response.json();

        await delay(1000); // Simulate a 1-second delay

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error || "Movie not found.");
        }
      } catch (error) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (error) return <p>{error}</p>;

  if (!loading && !movie) return <p>Movie not found.</p>;

  return (
    <div>
      <MovieDetails movie={movie} loading={loading} />
    </div>
  );
}

export default MovieDetailsPage;