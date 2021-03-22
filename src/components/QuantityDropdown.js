import React, { useEffect, useState } from 'react';

function QuantityDropdown({ inStockValue }) {
  const [qtyDropdown, setQtyDropdown] = useState(1);
  const [quantityArr, setQuantityArr] = useState([]);

  useEffect(() => {
    let tempArr = [];
    for (let i = 1; i <= inStockValue; i++) {
      tempArr.push(i);
    }
    setQuantityArr(tempArr);
  }, [inStockValue]);

  function handleDropdownChange(e) {
    setQtyDropdown(e.target.value);
  }
  return (
    <div>
      <label htmlFor="qtyDropdown">Quantity to add:</label>
      <select
        value={qtyDropdown}
        onChange={handleDropdownChange}
        name="qtyDropdown"
      >
        {quantityArr.map((item, id) => (
          <option key={id} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default QuantityDropdown;
