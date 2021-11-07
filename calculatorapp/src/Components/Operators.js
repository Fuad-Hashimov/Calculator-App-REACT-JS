import React from "react";

function Operators({ updateCalc, deleteLast, deleteCalc }) {
  return (
    <div className="operators">
      <button onClick={() => updateCalc("/")}>/</button>
      <button onClick={() => updateCalc("*")}>*</button>
      <button onClick={() => updateCalc("+")}>+</button>
      <button onClick={() => updateCalc("-")}>-</button>
      <button onClick={() => deleteLast()}>
        <span>&#8592;</span>
      </button>
      <button onClick={() => deleteCalc()}>DEL</button>
    </div>
  );
}
export default Operators;
