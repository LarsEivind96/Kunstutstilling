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

  return (
    <div className="HomeContainer">
      <SvgCard currentSvg={currentSvg} />
    </div>
  );
}

export default Home;
