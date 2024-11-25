export default function Pagination({ currentPage, totalPages, onPageChange } : { currentPage : number, totalPages : number, onPageChange : (page: number) => void }) {
    const getVisiblePages = () => {
        const pages = [];
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);
    
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
    
        // Ensure we only show 4 page links
        if (pages.length > 4) {
          pages.splice(4, pages.length - 4);
        }
        return pages;
      };
    
      const visiblePages = getVisiblePages();
    
      return (
        <ul className="pagination">
          <li className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
              className="fw-61"
            >
              Prev
            </button>
          </li>
          {visiblePages.map((page) => (
            <li
              key={page}
              className={`pagination-item ${currentPage === page ? "active" : ""}`}
            >
              <button onClick={() => onPageChange(page)} className="fw-6">
                {page}
              </button>
            </li>
          ))}
          <li className={`pagination-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button
              onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
              className="fw-6"
            >
              Next
            </button>
          </li>
        </ul>
      );
    }

    