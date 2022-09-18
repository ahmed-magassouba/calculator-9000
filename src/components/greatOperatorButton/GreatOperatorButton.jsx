import React from "react";
import "./GreatOperatorButton.css";
export default function GreatOperatorButton({operatorClick}) {
  const operators = ["/", "x", "-", "+"];
  return (
    <div>
      {operators.map((operator) => (
        <button
          value={operator === "x" ? "*" : operator}
          onClick={operatorClick}
          className="operatorButton"
          key={operator}
        >
          {operator}
        </button>
      ))}
    </div>
  );
}
