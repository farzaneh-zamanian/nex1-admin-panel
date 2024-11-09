import styles from "./Pagination.module.scss"

function Pagination({ totalProducts, limit, page, setPage }) {
      const totalPages = Math.ceil(totalProducts / limit);

      const handlePageChange = (page) => {
            if (page >= 1 && page <= totalPages) {
                  setPage(page);
            }

      }

      return (
            <section className={styles.containerPagination}>
                  <div className={styles.containerPagination__pagination}>
                        {/* PREVIOUS BUTTON */}
                        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}
                        >قبل</button>

                        {/* CREATE BUTTON ACCORDING PAGES */}
                        {Array.from({ length: totalPages }, (_, index) => (
                              <button
                                    key={index + 1}
                                    className={`${page === index + 1 ? styles.active : ""}`}
                                    onClick={() => handlePageChange(index + 1)}
                              >
                                    {index + 1}
                              </button>
                        ))}

                        {/* NEXT BUTTON */}
                        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}
                        >بعد</button>
                  </div></section>

      )
}

export default Pagination