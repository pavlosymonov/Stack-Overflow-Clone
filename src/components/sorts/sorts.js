import React from 'react';
import './sorts.scss';

const Filters = ({ onSortChanged, sorts, totalItems, loading, currentSort }) => {
  return (
    <div className="sorts-block">
      <div className="total-items">{totalItems}</div>
      <div className="sorts">
        {
          sorts.map(sort => {
            return <button disabled={loading} key={sort.field}
              className={`sorts__item${currentSort === sort.field ? " is-selected" : ""}`}
              onClick={() => onSortChanged(sort.field)}>
                {sort.label}  
              </button>
          })
        }
      </div>
    </div>
  );
}

export default Filters;