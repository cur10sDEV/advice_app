import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [adviceToShow, setAdviceToShow] = useState("");

  // Fetch Advice
  async function fetchAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await res.json();
    const { advice } = await slip;
    setAdviceToShow(advice);
    console.log(advice);
  }

  useEffect(() => {
    return () => {
      fetchAdvice();
    };
  }, []);

  return (
    <div className="App">
      <div className="card">
        <p className="advice">{adviceToShow}</p>
        <button className="getNewQuote" onClick={() => fetchAdvice()}>
          Give me Advice
        </button>
      </div>
    </div>
  );
}

export default App;
