import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import "./App.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

const fetchMovies = async () => {
  try {
    const url = query
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
      : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    // Only set totalPages if query or first page
    if (page === 1 || totalPages === 1 || query) {
      setTotalPages(data.total_pages || 1);
    }

    let results = data.results || [];

    // Sorting
    if (sortBy === "date_asc") results.sort((a,b)=>new Date(a.release_date)-new Date(b.release_date));
    if (sortBy === "date_desc") results.sort((a,b)=>new Date(b.release_date)-new Date(a.release_date));
    if (sortBy === "rating_asc") results.sort((a,b)=>a.vote_average-b.vote_average);
    if (sortBy === "rating_desc") results.sort((a,b)=>b.vote_average-a.vote_average);

    setMovies(results);
  } catch (error) {
    console.error("Error fetching movies:", error);
    setMovies([]);
    setTotalPages(1);
  }
};

  // Fetch movies whenever query, sortBy, or page changes
  useEffect(() => { fetchMovies(); }, [query, sortBy, page]);

  // Reset page when query changes
  useEffect(() => { setPage(1); }, [query]);

  return (
    <div>
      <Header />
      <SearchBar query={query} setQuery={setQuery} sortBy={sortBy} setSortBy={setSortBy} />
      <main>
        <MovieList movies={movies} imgUrl={IMG_URL} />
      </main>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
