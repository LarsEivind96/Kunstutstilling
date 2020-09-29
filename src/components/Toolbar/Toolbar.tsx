import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import { ThemeContext } from "../../constants/Themes";
import { Link } from "react-router-dom";

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
              <Link to="/" style={{ color: appContext.theme.text }}>
                WELCOME
              </Link>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
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
              </ul>
            </div>
          </nav>
        </header>
      )
    }
  </ThemeContext.Consumer>
);

export default toolbar;
