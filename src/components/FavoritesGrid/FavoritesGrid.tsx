import React, { useState, useEffect } from "react";
import "./FavoritesGrid.css";
import "../TempSVG/temp.svg";
import Svgs from "../../svg/Svgs";
import { ThemeContext } from "../../constants/Themes";

interface Props {
  currentSvg: { name: string; svg: string; index: number };
  changeSvg: any;
}

const favoritesgrid = (props) => {
  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div className="gallerycontainer">
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
              }}
              href="/0"
            >
              <img height="80%" width="70%" src={Svgs[0].svg} />
              {Svgs[0].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
              }}
              href="/1"
            >
              <img height="80%" width="70%" src={Svgs[1].svg} />
              {Svgs[1].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
              }}
              href="/2"
            >
              <img height="80%" width="70%" src={Svgs[2].svg} />
              {Svgs[2].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
              }}
              href="/3"
            >
              <img height="80%" width="70%" src={Svgs[3].svg} />
              {Svgs[3].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
              }}
              href="/4"
            >
              <img height="80%" width="70%" src={Svgs[4].svg} />
              {Svgs[4].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
              }}
              href="/5"
            >
              <img height="80%" width="70%" src={Svgs[5].svg} />
              {Svgs[5].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
              }}
              href="/6"
            >
              <img height="80%" width="70%" src={Svgs[6].svg} />
              {Svgs[6].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
              }}
              href="/7"
            >
              <img height="80%" width="70%" src={Svgs[7].svg} />
              {Svgs[7].name}
            </a>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default favoritesgrid;
