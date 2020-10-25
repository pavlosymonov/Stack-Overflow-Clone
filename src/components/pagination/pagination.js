import React from 'react';
import './pagination.scss';

const Pagination = ({ totalItems, pageSize, currentPage, setCurrentPage }) => {
  const pageCount = Math.ceil(totalItems / pageSize);
  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push((
      <span
        key={i}
        className={currentPage === i ? "is-selected" : ""}
        onClick={() => setCurrentPage(i)}>
        {i}
      </span>
    ));
  }
  
  return <div className="pagination">{pages}</div>;
};

export default Pagination;