import React from "react";

function Pagination({ setPageCount, total, pageCount, next }) {
  return (
    <div>
      {console.log("next", next < 4)}
      <button disabled={next < 4} onClick={() => setPageCount(0)}>
        First
      </button>
      <button disabled={next < 4} onClick={() => setPageCount(pageCount - 2)}>
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
