import React, { useState } from 'react';
function QuantityDropdown({ inStockValue }) {
  const total = 5;
  const [newArr, setNewArr] = useState([...Array(inStockValue).keys()]);
  const [qtyDropdown, setQtyDropdown] = useState(1);
  function handleDropdownChange(e) {
    setQtyDropdown(e.target.value);
  }
  return (
    <div>
      <label htmlFor="qtyDropdown">Quantity to add:</label>
      <select
        value={inStockValue}
        onChange={handleDropdownChange}
        name="qtyDropdown"
      >
        {newArr.map((item) => (
          <option value={item + 1}>{item + 1}</option>
        ))}
      </select>

      <div>{qtyDropdown}</div>
    </div>
  );
}

export default QuantityDropdown;
