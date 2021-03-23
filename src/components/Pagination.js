import React from 'react';

function Pagination({ setPageCount, total, pageCount }) {
  return (
    <div>
      <button onClick={() => setPageCount(0)}>First</button>
      <button onClick={() => setPageCount(pageCount - 2)}>&lt;</button>
      <span>page#</span>
      <button onClick={() => setPageCount(pageCount + 2)}>&gt;</button>
      <button onClick={() => setPageCount(total - 1)}>Last</button>
    </div>
  );
}

export default Pagination;
