import React from "react";

export interface AppContextInterface {
  theme: any;
  toggleTheme: (value: any) => void;
}

export const themes = {
  dark: {
    primary: "#333333",
    secondary: "black",
    text: "white",
    songName: "DayOne.mp3",
    bgImage:
      "url(" +
      "https://lesilets.com/wp-content/uploads/2018/04/1096907-cool-dark-background-2560x1600-for-tablet.jpg" +
      ")",
  },
  space: {
    primary: "#343d46",
    secondary: "#121212",
    text: "white",
    bgImage: "url(" + "https://wallpapercave.com/wp/wp2917445.jpg" + ")",
    songName: "CornfieldChase.mp3",
  },
  beach: {
    primary: "white",
    secondary: "#0077be",
    text: "black",
    bgImage: "url(" + "https://image.tmdb.org/t/p/original/n96EJQ8KzFVAFZo8PWVq4mjcyTK.jpg" + ")",
    songName: "DayOne.mp3",
  },
  crazy: {
    primary: "yellow",
    secondary: "orange",
    text: "black",
    bgImage:
      "url(" +
      "https://www.wallpapers4u.org/wp-content/uploads/crazy_frog_rocket_rays_teeth_fail_1763_1920x1080.jpg" +
      ")",
    songName: "CrazyFrog.mp3",
  },
};

export const ThemeContext = React.createContext<AppContextInterface | null>(null);
