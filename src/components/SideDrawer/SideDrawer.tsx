import React from "react";

import "./SideDrawer.css";
import { ThemeContext } from "../../constants/Themes";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import ThemeButtonContainer from "../ThemeButton/ThemeButtonContainer";

const sideDrawer = (props: any) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <nav
            className={drawerClasses}
            style={{
              background:
                "linear-gradient(to right, " +
                appContext.theme.primary +
                ", " +
                appContext.theme.secondary +
                ")",
            }}
          >
            <ul>
              <li>
                <a href="/" style={{ color: appContext.theme.text }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/gallery" style={{ color: appContext.theme.text }}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="/favorites" style={{ color: appContext.theme.text }}>
                  Favorites
                </a>
              </li>
              <li>
                <div className="moodContainer2">
                  <ThemeButtonContainer />
                  <AudioPlayer />
                </div>
              </li>
            </ul>
          </nav>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default sideDrawer;
