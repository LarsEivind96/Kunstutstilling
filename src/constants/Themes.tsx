import { url } from "inspector";
import React from "react";

export interface AppContextInterface {
  theme: any;
  toggleTheme: (value: any) => void;
}

export const themes = {
  dark: {
    primary: "black",
    secondary: "#333333",
    text: "white",
    linGradH1: "black",
    linGradH2: "#333333",
    bgImage:
      "url(" +
      "https://lesilets.com/wp-content/uploads/2018/04/1096907-cool-dark-background-2560x1600-for-tablet.jpg" +
      ")",
    bgSize: "100%",
  },
  space: {
    primary: "grey",
    secondary: "#145051",
    text: "white",
    linGradH1: "grey",
    linGradH2: "#111111",
    bgImage: "url(" + "https://wallpapercave.com/wp/wp2917445.jpg" + ")",
    bgSize: "100%",
  },
  beach: {
    primary: "#c2b280",
    secondary: "#0077be",
    text: "black",
    linGradH1: "red",
    linGradH2: "white",
    bgImage:
      "url(" +
      "https://image.tmdb.org/t/p/original/n96EJQ8KzFVAFZo8PWVq4mjcyTK.jpg" +
      ")",
    bgSize: "100%",
  },
  crazy: {
    primary: "yellow",
    secondary: "purple",
    text: "black",
    linGradH1: "pink",
    linGradH2: "blue",
    bgImage:
      "url(" +
      "https://www.wallpapers4u.org/wp-content/uploads/crazy_frog_rocket_rays_teeth_fail_1763_1920x1080.jpg" +
      ")",
    bgSize: "100%",
  },
};

export const ThemeContext = React.createContext<AppContextInterface | null>(
  null
);
