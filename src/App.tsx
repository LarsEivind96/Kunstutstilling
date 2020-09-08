import React from "react";
import test from "./svg/test.svg";
import logo from "./logo.svg";
import "./App.css";
import SvgCard from "./components/SvgCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={test} className="App-logo" alt="logo" />
        <SvgCard svgName={"test"} />
      </header>
    </div>
  );
}

export default App;
