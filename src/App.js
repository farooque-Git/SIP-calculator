import React, { useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState("");

  const calculateSIP = () => {
    const monthlyRate = rate / 12 / 100;
    const totalMonths = years * 12;
    const sipValue =
      (principal * monthlyRate * (Math.pow(1 + monthlyRate, totalMonths) - 1)) /
      (1 - Math.pow(1 + monthlyRate, -totalMonths));

    setResult(sipValue.toFixed(2));
  };

  return (
    <div className="App">
      <h1>SIP Calculator</h1>
      <h2>  <i>Calculate your investment Amount</i></h2>
      <div>
        <label>Monthly Investement:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Expected return rate P.A (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Time Period (Years):</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button onClick={calculateSIP}>Invest Now</button>
      {result && <p>Your SIP value: {result}</p>}
    </div>
  );
}

export default App;
