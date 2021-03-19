import React, { useState } from 'react';
function TestPage(inStockValue) {
  const total = 3;
  const [newArr, setNewArr] = useState([...Array(total).keys()]);
  const [qtyDropdown, setQtyDropdown] = useState(1);
  function handleDropdownChange(e) {
    setQtyDropdown(e.target.value);
  }
  return (
    <div>
      <label htmlFor="qtyDropdown">Quantity:</label>
      <select
        value={qtyDropdown}
        onChange={handleDropdownChange}
        name="qtyDropdown"
        id="qtyDropdown"
      >
        {newArr.map((item) => (
          <option value={item + 1}>{item + 1}</option>
        ))}
      </select>

      <div>{qtyDropdown}</div>
    </div>
  );
}

export default TestPage;
