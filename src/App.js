import "./App.css";
import Calculator from "./components/calculator/Calculator";
import TheTitle from "./components/theTitle/TheTitle";

function App() {
  return (
    <div className="App">
      <div className="appcalc">
        <TheTitle />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
