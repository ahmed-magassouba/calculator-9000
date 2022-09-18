import React from 'react'
import './AmazingNumberButton.css';
export default function AmazingNumberButton({buttonClick}) {
  const numbers=[9,8,7,6,5,4,3,2,1,0,"00",","];
  return (
    <div className="amazing">
      {numbers.map((number)=>(
        <button value={number===","?".":number} onClick={buttonClick} className="numberButton" key={number}>{number}</button>
      ))}
    </div>
  )
}
