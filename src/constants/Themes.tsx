import React from "react";

export interface AppContextInterface {
  themes: any;
  toggleTheme: () => void;
}

export const themes = {
  dark: {
    primary: "#222222",
    secondary: "#333333",
  },
  space: {
    primary: "#888888",
    secondary: "#993933",
  },
  beach: {
    primary: "#2346102",
    secondary: "#339863",
  },
};

export const ThemeContext = React.createContext<AppContextInterface | null>(null);
