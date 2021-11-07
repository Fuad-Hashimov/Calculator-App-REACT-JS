import "./App.css";
import Digits from "./Components/Digits";

function App() {
  return (
    <div className="App">
      <section className='calculator'> 
        <div className='display'>
          <span>(0)</span>0
        </div>
        <div className='operators'>
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className='digits'>
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
