import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div className="container">
        <h1>Home</h1>
      </div>
    </Router>
  );
}

export default Home;
