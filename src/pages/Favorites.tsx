import React, { useEffect, useState } from "react";
import "../App.css";
import SvgGallery from "../components/SvgGallery/SvgGallery";
import { ThemeContext } from "../constants/Themes";
import Svgs from "../svg/Svgs";
import { Link } from "react-router-dom";

function Favorites() {
  const [hasFavorites, setHasFavorites] = useState(false);

  let favorites = localStorage.getItem("favorite");
  if (favorites == null) {
    favorites = "";
  }
  let favoriteList = favorites.split("");

  let svgFavorites = Svgs.filter((svg) => favoriteList.includes(svg.index.toString()));

  useEffect(() => {
    let favs = localStorage.getItem("favorite")?.length;
    if (favs) {
      setHasFavorites(true);
    }
  }, []);

  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div className="PageContainer">
            {!hasFavorites && (
              <div style={{ color: appContext.theme.text, fontSize: "22px" }}>
                You don't have any favorites..maybe add some:{" "}
                <Link style={{ color: appContext.theme.text }} to="/">
                  Home
                </Link>
              </div>
            )}
            {hasFavorites && <SvgGallery svgs={svgFavorites} />}
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Favorites;
