import React from 'react'
import './ResetButton.css';
export default function resetButton({resetClick}) {
  return (
    <div>
        <button value="CE" onClick={resetClick} className="resetButton">CE</button>
    </div>
  )
}
