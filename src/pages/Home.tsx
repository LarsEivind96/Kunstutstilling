import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SvgCard from "../components/SvgCard";

function Home() {
  return (
    <div className="HomeContainer">
      <SvgCard svgName={"damane"} />
    </div>
  );
}

export default Home;
