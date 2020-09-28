import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import { ThemeContext } from "../../constants/Themes";

const toolbar = (props: any) => (
  <ThemeContext.Consumer>
    {(appContext) =>
      appContext && (
        <header
          className="toolbar"
          style={{
            background:
              "linear-gradient(to right, " +
              appContext.theme.primary +
              ", " +
              appContext.theme.secondary +
              ")",
          }}
        >
          <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={props.drawerClickHandler} textColor={appContext.theme.text} />
            </div>
            <div className="toolbar__logo">
              <a href="/" style={{ color: appContext.theme.text }}>
                WELCOME
              </a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
              <ul>
                <li>
                  <a className="navLink" href="/" style={{ color: appContext.theme.text }}>
                    Home
                  </a>
                </li>
                <li>
                  <a className="navLink" href="/gallery" style={{ color: appContext.theme.text }}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a className="navLink" href="/favorites" style={{ color: appContext.theme.text }}>
                    Favorites
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
