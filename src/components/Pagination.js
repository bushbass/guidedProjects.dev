import React from 'react';

function Pagination({
  setPageSize,
  pageSize,
  setPageCount,
  total,
  pageCount,
  next,
}) {
  function handlePageSizeChange(e) {
    if (e.target.value < 1) return setPageSize(1);
    if (e.target.value > total) return setPageSize(total);
    setPageSize(e.target.value);
  }
  return (
    <>
      <div>
        {console.log({ total })}
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
      <div>
        <label htmlFor="pageSize">Items per page</label>
        <input
          id="pageSize"
          value={pageSize}
          onChange={handlePageSizeChange}
          type="number"
        />
      </div>
    </>
  );
}

export default Pagination;
