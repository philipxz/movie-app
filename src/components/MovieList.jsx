import MovieCard from "./MovieCard";

export default function MovieList({ movies, imgUrl }) {
  if (!movies.length) return <p style={{ textAlign: "center" }}>No movies found.</p>;

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} imgUrl={imgUrl} />
      ))}
    </>
  );
}
