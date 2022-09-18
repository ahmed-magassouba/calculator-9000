import React from 'react';
import './BackSpace.css';
import {IoPlaySkipBackSharp} from "react-icons/io5";

export default function BackSpace({backClick}) {
  return (
    <div>
        <button value="BackSpace" onClick={backClick} className="backSpaceButton"><IoPlaySkipBackSharp/></button>
    </div>
  )
}
