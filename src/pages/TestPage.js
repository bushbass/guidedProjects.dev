import React, { useState, useEffect } from 'react';

function TestPage() {
  const total = 5;
  const [dropDownItems, setDropDownItems] = useState('0');
  useEffect(() => {
    function dropDown(num) {
      for (let i = 0; i < total; i++) {
        setDropDownItems(dropDownItems + `option value=${i}>${i}</option>`);
        console.log(i + 1);
      }
    }
    dropDown(total);
  }, []);

  return (
    <div>
      <label htmlFor="cars">Choose a car:</label>
      {console.log(dropDownItems)}
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}

export default TestPage;
