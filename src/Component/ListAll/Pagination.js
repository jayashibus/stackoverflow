const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <a
            key={number}
            onClick={() => onPageChange(number)}
            href="#"
            className={`page-link ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
