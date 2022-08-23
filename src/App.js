import { useSelector, useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import "./App.css";
import CardField from "./components/CardField";
function App() {
  const names = useSelector((state) => state.names);

  const dispatch = useDispatch();
  const [selectedName, setSelectedName] = useState("");

  const increment = () => {
    dispatch({ type: "INC", payload: 2 });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  const add = () => {
    dispatch({ type: "ADD", payload: selectedName });
    setSelectedName("");
  };

  const handleChange = (e) => {
    setSelectedName(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Redux1122!</p>

        <CardField people={names} />
        <p>Add your name please</p>
        <input type="text" onChange={handleChange} value={selectedName} />
        <button onClick={add}>Click to add</button>
      </header>
    </div>
  );
}

export default App;
