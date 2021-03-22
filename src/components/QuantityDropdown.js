import React, { useEffect, useState } from 'react';

function QuantityDropdown({ inStockValue }) {
  const [qtyDropdown, setQtyDropdown] = useState(1);
  const [stockArr, setStockArr] = useState((inStockValue) => {
    let stock = [...Array(inStockValue).keys()];
    stock.shift();
    return stock;
  });
  const [stockValue, setStockValue] = useState(0);

  function handleDropdownChange(e) {
    setQtyDropdown(e.target.value);
  }
  return (
    <div>
      {console.log(stockArr)}
      <label htmlFor="qtyDropdown">Quantity to add:</label>
      <select
        value={qtyDropdown}
        onChange={handleDropdownChange}
        name="qtyDropdown"
      >
        {stockArr.map((item, id) => (
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
