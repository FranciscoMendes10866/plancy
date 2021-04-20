const Pagination = ({ pages, setPageNumber, pageNumber, totalPages }) => {
  return (
    <nav
      className="pagination is-centered mt-6"
      role="navigation"
      aria-label="pagination"
    >
      <a href className="pagination-previous" onClick={() => setPageNumber(0)}>
        First
      </a>
      <a href className="pagination-next" onClick={() => setPageNumber(totalPages - 1)}>
        Last
      </a>
      <ul className="pagination-list">
        {pages.map((pageIndex, index) => {
          return (
            <li key={index}>
              {pageNumber === pageIndex ? (
                <a
                  href
                  onClick={() => setPageNumber(pageIndex)}
                  className="pagination-link is-current"
                  aria-label="Goto page 1"
                >
                  {pageIndex + 1}
                </a>
              ) : (
                <a
                  href
                  onClick={() => setPageNumber(pageIndex)}
                  className="pagination-link"
                  aria-label="Goto page 1"
                >
                  {pageIndex + 1}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
