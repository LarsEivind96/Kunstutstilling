import React, { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import { ThemeContext, themes, AppContextInterface } from "./constants/Themes";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import ThemeButtonContainer from "./components/ThemeButton/ThemeButtonContainer";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [theme, setTheme] = useState(themes.dark);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  const context: AppContextInterface = {
    theme: theme,
    toggleTheme: (val) => setTheme(val),
    // setTheme((theme: any) => theme); //theme = theme === themes.dark ? themes.beach : themes.dark));
  };

  return (
    <ThemeContext.Provider value={context}>
      <div
        className="App"
        style={{
          background:
            "linear-gradient(to left, " + context.theme.primary + ", " + context.theme.linGradH2 + ")",
        }}
      >
        <div className="Container" style={{ background: "white" }}>
          <Toolbar drawerClickHandler={drawerToggleClickHandler} />
          <SideDrawer show={sideDrawerOpen} />
          {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
          <AudioPlayer />
          <ThemeButtonContainer />
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
