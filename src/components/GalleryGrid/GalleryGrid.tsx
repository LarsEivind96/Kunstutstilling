import React, { useState, useEffect } from "react";
import "./GalleryGrid.css";
import "../TempSVG/temp.svg";
import Svgs from "../../svg/Svgs";
import { ThemeContext } from "../../constants/Themes";

interface Props {
  currentSvg: { name: string; svg: string; index: number };
  changeSvg: any;
}

const gallerygrid = (props) => {
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
                display: "grid",
              }}
              href="/0"
            >
              <img height="80%" width="70%" src={Svgs[0].svg} alt="" />
              {Svgs[0].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
                display: "grid",
              }}
              href="/1"
            >
              <img height="80%" width="70%" src={Svgs[1].svg} alt="" />
              {Svgs[1].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
                display: "grid",
              }}
              href="/2"
            >
              <img height="80%" width="70%" src={Svgs[2].svg} alt="" />
              {Svgs[2].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
                display: "grid",
              }}
              href="/3"
            >
              <img height="80%" width="70%" src={Svgs[3].svg} alt="" />
              {Svgs[3].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
                display: "grid",
              }}
              href="/4"
            >
              <img height="80%" width="70%" src={Svgs[4].svg} alt="" />
              {Svgs[4].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
                display: "grid",
              }}
              href="/5"
            >
              <img height="80%" width="70%" src={Svgs[5].svg} alt="" />
              {Svgs[5].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
                display: "grid",
              }}
              href="/6"
            >
              <img height="80%" width="70%" src={Svgs[6].svg} alt="" />
              {Svgs[6].name}
            </a>
            <a
              className="galleryitem"
              style={{
                backgroundColor: appContext.theme.secondary,
                color: appContext.theme.text,
                display: "grid",
              }}
              href="/7"
            >
              <img height="80%" width="70%" src={Svgs[7].svg} alt="" />
              {Svgs[7].name}
            </a>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default gallerygrid;
