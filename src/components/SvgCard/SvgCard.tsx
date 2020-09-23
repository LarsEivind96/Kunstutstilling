import React from "react";
import "./SvgCard.css";
import { ThemeContext } from "../../constants/Themes";

interface Props {
  currentSvg: { name: string; svg: string; favorite: boolean };
}

const SvgCard = ({ currentSvg }: Props) => {
  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div
            className="SvgCard"
            style={{ borderColor: appContext.theme.text, background: appContext.theme.primary }}
          >
            <div className="SvgContainer" style={{ background: appContext.theme.secondary }}>
              <img src={currentSvg.svg} className="Svg" alt="logo" />
            </div>
            <div className="TextContainer" style={{ background: appContext.theme.secondary }}>
              <div className="ImageText" style={{ color: appContext.theme.text }}>
                <h1>{currentSvg.name}</h1>
                <p>testing testing</p>
              </div>
            </div>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default SvgCard;
