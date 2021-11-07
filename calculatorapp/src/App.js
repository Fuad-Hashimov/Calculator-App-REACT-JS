import "./App.css";
import Digits from "./Components/Digits";
import Operators from "./Components/Operators";

function App() {
  return (
    <div className="App">
      <section className="calculator">
        <div className="display">
          <span>(0)</span>0
        </div>
        <Operators />
        <div className="digits">
          <Digits />
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </section>
    </div>
  );
}

export default App;
