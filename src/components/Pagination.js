import React from 'react';

function Pagination({ setPageCount, total, pageCount, next }) {
  return (
    <div>
      <button onClick={() => setPageCount(0)}>First</button>
      <button onClick={() => setPageCount(pageCount - 2)}>&lt;</button>
      <span>
        {pageCount / 2 + 1} of {Math.ceil(total / 2)}
      </span>
      {console.log(next)}
      <button disabled={!next} onClick={() => setPageCount(pageCount + 2)}>
        &gt;
      </button>
      <button disabled={!next} onClick={() => setPageCount(total - 1)}>
        Last
      </button>
    </div>
  );
}

export default Pagination;
