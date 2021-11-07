import React from "react";

function Digits({ updateCalc }) {

  const createDigts = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return <>{createDigts()}</>;
}
export default Digits;
