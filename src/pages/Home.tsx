import React from "react";
import "../App.css";
import SvgCard from "../components/SvgCard/SvgCard";
import { ThemeContext } from "../constants/Themes";
import Svgs from "../svg/Svgs";

function Home(props) {
  const chooseSvg = () => {
    const favIndex = localStorage.getItem("favorite");
    if (props.match.params.index) {
      return Svgs[parseInt(props.match.params.index)];
    } else if (favIndex) {
      const randomFav = favIndex.charAt(Math.floor(Math.random() * Math.floor(favIndex.length)));
      return Svgs[parseInt(randomFav)];
    }

    let index = Math.floor(Math.random() * Math.floor(Svgs.length));
    return Svgs[index];
  };

  const currentSvg = chooseSvg();

  const changeSvg = (index: number, next: boolean) => {
    if (next) {
      if (index === Svgs.length - 1) {
        props.history.push("/" + 0);
      } else {
        props.history.push("/" + (index + 1));
      }
    } else {
      if (index === 0) {
        props.history.push("/" + (Svgs.length - 1));
      } else {
        props.history.push("/" + (index - 1));
      }
    }
  };

  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div
            className="PageContainer"
            style={{
              background:
                "linear-gradient(to left, " +
                appContext.theme.primary +
                ", " +
                appContext.theme.linGradH2 +
                ")",
            }}
          >
            <SvgCard currentSvg={currentSvg} changeSvg={changeSvg} />
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Home;
