import "./BeautifullScreen.css";
import React from "react";
import ItSOverNineThousand from "../itSOverNineThousand/ItSOverNineThousand";

export default function BeautifullScreen({
  inputNumber,
  inputResult,
  numberChange,
  resultChange,
}) {
  return (
    <div className="screen">
      {inputResult > 9000 ? (
        <ItSOverNineThousand />
      ) : (
        <input
        className="screen1"
          value={inputResult}
          onChange={resultChange}
          disabled
          type="text"
        />
      )}

      <input className="screen2" value={inputNumber} onChange={numberChange} disabled type="text" />
    </div>
  );
}
