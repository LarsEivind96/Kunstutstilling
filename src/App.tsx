import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SvgCard from "./components/SvgCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SvgCard svgName={"test"} />
      </header>
    </div>
  );
}

export default App;
