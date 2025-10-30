export default function MovieCard({ movie, imgUrl }) {
  const { title, poster_path, release_date, vote_average } = movie;
  const poster = poster_path ? imgUrl + poster_path : "";
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>Release Date: {release_date || "N/A"}</p>
        <p>Rating: {vote_average ?? "N/A"}</p>
      </div>
    </div>
  );
}
