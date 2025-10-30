export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="page-info">
      <button id="prev-button" disabled={page <= 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <p>Page {page} of {totalPages}</p>
      <button id="next-button" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
