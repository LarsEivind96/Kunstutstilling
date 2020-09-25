import React from "react";

import "./SideDrawer.css";
import { ThemeContext } from "../../constants/Themes";

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
              background: "linear-gradient(to right, " + appContext.theme.linGradH1 + ", " + appContext.theme.linGradH2 + ")",
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
            </ul>
          </nav>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default sideDrawer;
