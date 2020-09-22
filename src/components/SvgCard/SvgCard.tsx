import React from "react";
import "./SvgCard.css";

interface Props {
  currentSvg: { name: string; svg: string; favorite: boolean };
}

const SvgCard = ({ currentSvg }: Props) => {
  return (
    <div className="SvgCard">
      <div className="SvgContainer">
        <img src={currentSvg.svg} className="Svg" alt="logo" />
      </div>
      <div className="TextContainer">
        <div className="ImageText">
          <h1>{currentSvg.name}</h1>
          <p>testing testing</p>
        </div>
      </div>
    </div>
  );
};

export default SvgCard;
