import React, { useEffect, useState, useContext } from 'react';
import CartContext from '../context/CartContext';

function QuantityDropdown({ inStockValue, pageItem }) {
  const [qtyDropdown, setQtyDropdown] = useState(1);
  const [quantityArr, setQuantityArr] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const { addItemToCart, cart } = useContext(CartContext);

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
        style={{ marginLeft: '1rem', padding: '.3rem' }}
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
      <button
        disabled={disableButton}
        onClick={() =>
          addItemToCart({
            ...pageItem,
            qty: parseInt(qtyDropdown),
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default QuantityDropdown;
