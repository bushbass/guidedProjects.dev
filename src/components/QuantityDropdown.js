import React, { useEffect, useState } from 'react';

function QuantityDropdown({ inStockValue }) {
  const [qtyDropdown, setQtyDropdown] = useState(1);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(1);
  const [quantityArr, setQuantityArr] = useState([]);
  const [stockValue, setStockValue] = useState(0);

  useEffect(() => {
    let tempArr = [];
    for (let i = 1; i <= inStockValue; i++) {
      tempArr.push(i);
      console.log(tempArr);
    }
    setQuantityArr(tempArr);
    // let stock = [...Array(inStockValue).keys()];
    // stock.shift();
    // console.log(stock);
  }, []);

  function handleDropdownChange(e) {
    setSelectedDropdownValue(e.target.value);
    setQtyDropdown(1);
  }
  return (
    <div>
      {console.log({ inStockValue, quantityArr })}
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

      <div>{selectedDropdownValue}</div>
    </div>
  );
}

export default QuantityDropdown;
