import React, { useEffect, useState } from "react";
import "../App.css";
import FavoritesGrid from "../components/FavoritesGrid/FavoritesGrid";

function Favorites() {
  const [hasFavorites, setHasFavorites] = useState(false);
  useEffect(() => {
    let favs = localStorage.getItem("favorite")?.length;
    if (favs) {
      setHasFavorites(true);
    }
  }, []);

  return (
    <div className="PageContainer">
      {!hasFavorites && (
        <div style={{ color: "white", fontSize: "22px" }}>
          You don't have any favorites..maybe add some:{" "}
          <a style={{ color: "white" }} href="/">
            Home
          </a>
        </div>
      )}
      {hasFavorites && <FavoritesGrid />}
    </div>
  );
}

export default Favorites;
