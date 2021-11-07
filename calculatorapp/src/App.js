import "./App.css";
import { useState } from "react";
import Digits from "./Components/Digits";
import Operators from "./Components/Operators";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = (val) => {
    if (
      (operators.includes(val) && calc === "") ||
      (operators.includes(val) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + val);
    if (!operators.includes(val)) {
      setResult(eval(calc + val).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className="App">
      <section className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <Operators updateCalc={updateCalc} deleteLast={deleteLast} />
        <div className="digits">
          <Digits updateCalc={updateCalc} />
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={() => calculate()}>=</button>
        </div>
      </section>
    </div>
  );
}
export default App;
