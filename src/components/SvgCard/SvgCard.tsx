import React, { useState, useEffect } from "react";
import "./SvgCard.css";

interface Props {
  currentSvg: { name: string; svg: string; favorite: boolean };
}

const SvgCard = ({ currentSvg }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedText, setFetchedText] = useState([]);

  const fetchTestText = async () => {
    setIsLoading(true);
    await fetch("https://poetrydb.org/random,linecount/1;10")
      .then((res) => res.json())
      .then(
        (result) => {
          setFetchedText(result[0].lines.reduce((prev, curr, index) => [prev, <br key={index} />, curr]));
        },
        (error) => {
          console.log(error);
          return;
        }
      );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTestText();
  }, []);

  return (
    <div className="SvgCard">
      <div className="SvgContainer">
        <img src={currentSvg.svg} className="Svg" alt="logo" />
      </div>
      <div className="TextContainer">
        <div className="ImageText">
          <h1>{currentSvg.name}</h1>
          {isLoading && <p> Fetching poetry... </p>}
          {!isLoading && <p> {fetchedText}</p>}
        </div>
      </div>
    </div>
  );
};

export default SvgCard;
