import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import ThemeButton from "../ThemeButton/ThemeButton";
import { themes, ThemeContext } from "../../constants/Themes";

const toolbar = (props: any) => (
  <ThemeContext.Consumer>
    {(appContext) =>
      appContext && (
        <header
          className="toolbar"
          style={{
            background: "linear-gradient(to right, " + appContext.theme.linGradH1 + ", " + appContext.theme.linGradH2 + ")",
          }}
        >
          <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={props.drawerClickHandler} textColor={appContext.theme.text} />
            </div>
            <div className="toolbar__logo">
              <a href="/" style={{ color: appContext.theme.text }}>
                LOGO BUDDY
              </a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
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
              </ul>
            </div>
          </nav>
        </header>
      )
    }
  </ThemeContext.Consumer>
);

export default toolbar;
