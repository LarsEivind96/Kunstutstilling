import React from "react";
import "../App.css";
import test from "../svg/test.svg";
import Colors from "../constants/Colors";

interface Props {
  svgName: String;
}

const SvgCard = ({ svgName }: Props) => {
  return (
    <div className="SvgCard">
      <div className="SvgContainer">
        <img src={test} className="App-logo" alt="logo" />
      </div>
      <div className="TextContainer">
        <h1>{svgName}</h1>
      </div>
    </div>
  );
};

export default SvgCard;
