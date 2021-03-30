import React, { useState, useEffect } from 'react';

function TestPage() {
  const total = Array(5);
  const [dropDownItems, setDropDownItems] = useState('0');
  useEffect(() => {
    setDropDownItems(dropDownItems + `option value=${i}>${i}</option>`);
    console.log(i + 1);
  }, []);

  return (
    <div>
      <label htmlFor="cars">Choose a car:</label>
      {console.log(dropDownItems)}
      {/* {}
      <select name="cars" id="cars">
          {total.map((item,id)=>option value={id}>{id}</option>`)}
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> */}
    </div>
  );
}

export default TestPage;
