export default function SearchBar({ query, setQuery, sortBy, setSortBy }) {
  return (
    <div className="search-container">
      <input id="search-input" type="text" placeholder="Search for a movie..." value={query} onChange={(e) => setQuery(e.target.value)}/>
      <select id="sort-button" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="date_asc">Release Date (Asc)</option>
        <option value="date_desc">Release Date (Desc)</option>
        <option value="rating_asc">Rating (Asc)</option>
        <option value="rating_desc">Rating (Desc)</option>
      </select>
    </div>
  );
}
