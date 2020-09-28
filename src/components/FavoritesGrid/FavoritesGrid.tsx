import React, { useState, useEffect } from "react";
import "./FavoritesGrid.css";
import "../TempSVG/temp.svg";
import Svgs from "../../svg/Svgs";
import { ThemeContext } from "../../constants/Themes";

const FavoritesGrid = (props: any) => {
  let favorites = localStorage.getItem("favorite");
  if (favorites == null) {
    favorites = "";
  }
  let favoriteList = favorites.split("");
  console.log("favoriteList: ", favoriteList);

  let svgFavorites = Svgs.filter((svg) =>
    favoriteList.includes(svg.index.toString())
  );
  console.log(svgFavorites);

  const Iitem = (props: any) => (
    <a
      className="galleryitem"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        display: "grid",
      }}
      href={props.i}
    >
      <img height="80%" width="70%" src={Svgs[props.i].svg} alt="" />
      {Svgs[props.i].name}
    </a>
  );

  const ListItems = (props: any) => (
    <div className="gallerycontainer">
      {svgFavorites.map((item) => (
        <Iitem
          key={item.index}
          i={item.index}
          bgColor={props.bgColor}
          color={props.color}
        />
      ))}
    </div>
  );

  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div>
            <ListItems
              bgColor={appContext.theme.secondary}
              color={appContext.theme.text}
            />
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default FavoritesGrid;
