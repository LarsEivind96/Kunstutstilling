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
  },
  space: {
    primary: "grey",
    secondary: "#993933",
    text: "white",
    linGradH1: "grey",
    linGradH2: "#111111",
  },
  beach: {
    primary: "yellow",
    secondary: "#339863",
    text: "blue",
    linGradH1: "red",
    linGradH2: "orange",
  },
};

export const ThemeContext = React.createContext<AppContextInterface | null>(null);
