import React, { useState } from 'react';

function QuantityDropdown({ inStockValue }) {
  const total = 5;
  const [qtyDropdown, setQtyDropdown] = useState(1);

  function handleDropdownChange(e) {
    setQtyDropdown(e.target.value);
  }
  return (
    <div>
      {console.log(typeof inStockValue, inStockValue)}
      <label htmlFor="qtyDropdown">Quantity to add:</label>
      <select
        value={inStockValue}
        onChange={handleDropdownChange}
        name="qtyDropdown"
      >
        {[...Array(inStockValue).keys()].map((item, id) => (
          <option key={id} value={item + 1}>
            {item + 1}
          </option>
        ))}
      </select>

      <div>{qtyDropdown}</div>
    </div>
  );
}

export default QuantityDropdown;
