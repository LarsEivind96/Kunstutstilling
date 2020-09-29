import React from "react";
import "./SideDrawer.css";
import { ThemeContext } from "../../constants/Themes";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import ThemeButtonContainer from "../ThemeButton/ThemeButtonContainer";
import { Link } from "react-router-dom";

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
                <Link className="navLink" to="/" style={{ color: appContext.theme.text }}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="navLink" to="/gallery" style={{ color: appContext.theme.text }}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="navLink" to="/favorites" style={{ color: appContext.theme.text }}>
                  Favorites
                </Link>
              </li>
              <li>
                <div className="moodContainer2">
                  <ThemeButtonContainer />
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
