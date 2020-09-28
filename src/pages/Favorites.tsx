import React from "react";
import "../App.css";
import FavoritesGrid from "../components/FavoritesGrid/FavoritesGrid";
import Svgs from "../svg/Svgs";

function Favorites() {
  return (
    <div className="PageContainer">
      <FavoritesGrid />
    </div>
  );
}

export default Favorites;
