import React from "react";

interface Props {
  svgName: String;
}

const SvgCard = ({ svgName }: Props) => {
  return (
    <div className="SvgCard">
      <h1>hei </h1>
      <h2>{svgName}</h2>
    </div>
  );
};

export default SvgCard;
