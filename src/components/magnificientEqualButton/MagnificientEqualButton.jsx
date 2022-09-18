import React from 'react'
import './MagnificientEqualButton.css';
export default function MagnificientEqualButton({equalClick}) {
  return (
    <div>
      <button value="=" onClick={equalClick} className="equalButton">=</button>
    </div>
  )
}
