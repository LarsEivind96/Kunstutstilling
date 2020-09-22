import React, { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import { ThemeContext, themes, AppContextInterface } from "./constants/Themes";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [theme, setTheme] = useState(themes.beach);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  const context: AppContextInterface = {
    themes: {
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
    },
    toggleTheme: () => {
      setTheme((theme: any) => (theme = theme === themes.dark ? themes.beach : themes.dark));
    },
  };

  return (
    <ThemeContext.Provider value={context}>
      <div className="App">
        <div className="Container">
          <Toolbar drawerClickHandler={drawerToggleClickHandler} />
          <SideDrawer show={sideDrawerOpen} />
          {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
