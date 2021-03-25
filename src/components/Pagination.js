import React from 'react';

function Pagination({ setPageCount, total, pageCount, next }) {
  return (
    <div>
      <button
        disabled={next >= 0 && next < 4 && next !== null}
        onClick={() => setPageCount(0)}
      >
        First
      </button>
      <button
        disabled={next >= 0 && next < 4 && next !== null}
        onClick={() => setPageCount(pageCount - 2)}
      >
        &lt;
      </button>
      <span>
        {pageCount / 2 + 1} of {Math.ceil(total / 2)}
      </span>

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
