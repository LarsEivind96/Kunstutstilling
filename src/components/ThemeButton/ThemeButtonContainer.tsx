import React from "react";
import "./ThemeButton.css";
import ThemeButton from "./ThemeButton";
import { themes } from "../../constants/Themes";

const ThemeButtonContainer = () => {
  return (
    <div className="ThemeButContainer">
      <ThemeButton theme={themes.dark} name="dark" />
      <ThemeButton theme={themes.space} name="space" />
      <ThemeButton theme={themes.beach} name="beach" />
      <ThemeButton theme={themes.crazy} name="crazy" />
    </div>
  );
};

export default ThemeButtonContainer;
