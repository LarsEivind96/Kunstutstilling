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
    primary: "#c2b280",
    secondary: "#0077be",
    text: "#dce5eb",
    linGradH1: "red",
    linGradH2: "white",
  },
  crazy: {
    primary: "yellow",
    secondary: "purple",
    text: "red",
    linGradH1: "pink",
    linGradH2: "blue",
  },
};

export const ThemeContext = React.createContext<AppContextInterface | null>(null);
