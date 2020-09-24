import React from "react";
import "../App.css";
import SvgCard from "../components/SvgCard/SvgCard";
import Svgs from "../svg/Svgs";

function Home(props) {
  const chooseSvg = () => {
    const favIndex = localStorage.getItem("favorite");
    if (props.match.params.index) {
      return Svgs[parseInt(props.match.params.index)];
    } else if (favIndex) {
      return Svgs[parseInt(favIndex)];
    }

    let index = Math.floor(Math.random() * Math.floor(Svgs.length));
    return Svgs[index];
  };

  const currentSvg = chooseSvg();

  const changeSvg = (index, next) => {
    if (next) {
      if (index == Svgs.length - 1) {
        props.history.push("/" + 0);
      } else {
        props.history.push("/" + (index + 1));
      }
    } else {
      if (index == 0) {
        props.history.push("/" + (Svgs.length - 1));
      } else {
        props.history.push("/" + (index - 1));
      }
    }
  };

  return (
    <div className="HomeContainer">
      <SvgCard currentSvg={currentSvg} changeSvg={changeSvg} />
    </div>
  );
}

export default Home;
