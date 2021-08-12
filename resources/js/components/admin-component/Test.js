import React, { useState } from "react";

const fruits = ["orange", "apple", "grape"];

 function Test() {

  const onInputChange = e =>{
   // setRadio({...radio,[e.target.name]:e.target.value});
    setFruit(e.currentTarget.value)
    console.log(fruit);
  
  }
  const [fruit, setFruit] = useState("apple");
  return (
    <div className="App">
      {fruits.map(f => (
        <>
          <input
            type="radio"
            name="fruit"
            value={f}
            
            onChange={e => onInputChange(e)}
          />{" "}
          {f}
        </>
      ))}
      <p>{fruit}</p>
    </div>
  );
}
export default Test;