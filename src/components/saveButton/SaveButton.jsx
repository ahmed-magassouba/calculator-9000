import React from 'react'
import './SaveButton.css';

export default function SaveButton({saveClick}) {
  return (
    <div>
        <button value="Save" onClick={saveClick} className="saveButton">Save</button>
    </div>
  )
}
