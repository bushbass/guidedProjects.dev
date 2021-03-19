import React, { useState, useEffect } from 'react';
function TestPage() {
  const total = 5;
  const [dropDownItems, setDropDownItems] = useState(Array(total));
  const [newArr, setNewArr] = useState([...Array(total).keys()]);

  return (
    <div>
      {console.log(dropDownItems.length)}
      <label htmlFor="cars">Choose a car:</label>
      <select name="cars" id="cars">
        {newArr.map((item) => (
          <option value={item + 1}>{item + 1}</option>
        ))}
      </select>
    </div>
  );
}

export default TestPage;
