import React from "react";
import "../App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SvgCard from "../components/SvgCard/SvgCard";
import Svgs from "../svg/Svgs";

function Home() {
  const chooseRandSvg = () => {
    let index = Math.floor(Math.random() * Math.floor(Svgs.length));
    return Svgs[index];
  };
  const currentSvg = chooseRandSvg();

  return (
    <div className="HomeContainer">
      <SvgCard currentSvg={currentSvg} />
    </div>
  );
}

export default Home;
