import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
  const [location, setlocation] = useState();
  const [age, setage] = useState();
  const [name, setname] = useState();

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name:{name} </p>
        <p>Display Age: {age}</p>
        <p>Display location: {location}</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            placeholder="Ronald"
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            type="number"
            placeholder="38"
            onChange={(e) => setage(e.target.value)}
            min="1"
          />
        </div>

        {/* Input location */}
        <div className="field">
          <label className="label">location: </label>
          <input
            className="input"
            type="text"
            placeholder="home"
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
