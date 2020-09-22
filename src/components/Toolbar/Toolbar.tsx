import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = (props: any) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">LOGO BUDDY</a>
      </div>
      <div className="spacer" />
      <div>
        <audio controls autoPlay>
          <source src="../../pages/Time.mp3" type="audio/mpeg" />
          <source src="src/music/DayOne.mp3" type="audio/mpeg" />
          <source
            src="C:/Users/larse/Documents/Skole/Webutvikling - IT2810/prosjekt2/src/music/Time.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
