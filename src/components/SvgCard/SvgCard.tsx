import React, { useState, useEffect } from "react";
import "./SvgCard.css";
import { ThemeContext } from "../../constants/Themes";
import FavButton from "../FavButton/FavButton";

interface Props {
  currentSvg: { name: string; svg: string; index: number };
  changeSvg: any;
}

const SvgCard = ({ currentSvg, changeSvg }: Props) => {
  // Fetch poetry
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedText, setFetchedText] = useState([]);

  const fetchPoetry = async () => {
    setIsLoading(true);
    await fetch("https://poetrydb.org/random,linecount/1;10")
      .then((res) => res.json())
      .then(
        (result) => {
          setFetchedText(
            result[0].lines.reduce((prev, curr, index) => [
              prev,
              <br key={index} />,
              curr,
            ])
          );
        },
        (error) => {
          console.log(error);
          return;
        }
      );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPoetry();
  }, []);

  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div>
            <div
              className="SvgCard"
              style={{
                borderColor: appContext.theme.text,
                background: appContext.theme.primary,
              }}
            >
              <div
                className="SvgContainer"
                style={{ background: appContext.theme.secondary }}
              >
                <img src={currentSvg.svg} className="Svg" alt="logo" />
              </div>
              <div
                className="TextContainer"
                style={{ background: appContext.theme.secondary }}
              >
                <div
                  className="ImageText"
                  style={{ color: appContext.theme.text }}
                >
                  <h1>{currentSvg.name}</h1>
                  {isLoading && <p> Fetching poetry... </p>}
                  {!isLoading && <p> {fetchedText}</p>}
                </div>
              </div>
            </div>
            <div className="ButtonSection">
              <button
                className="RedirectButtons"
                style={{ color: appContext.theme.text }}
                onClick={() => {
                  changeSvg(currentSvg.index, false);
                  fetchPoetry();
                }}
              >
                &#171;
              </button>
              <FavButton
                index={currentSvg.index.toString()}
                label="Save as favorite"
              />
              <button
                className="RedirectButtons"
                style={{ color: appContext.theme.text }}
                onClick={() => {
                  changeSvg(currentSvg.index, true);
                  fetchPoetry();
                }}
              >
                &#187;
              </button>
            </div>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default SvgCard;
