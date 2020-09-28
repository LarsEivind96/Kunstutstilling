import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";
import { ThemeContext, themes, AppContextInterface } from "./constants/Themes";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import ThemeButtonContainer from "./components/ThemeButton/ThemeButtonContainer";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const selectedTheme = sessionStorage.getItem("theme");
  const startTheme = selectedTheme ? JSON.parse(selectedTheme) : themes.dark;
  const [theme, setTheme] = useState(startTheme);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  const context: AppContextInterface = {
    theme: theme,
    toggleTheme: (val) => setTheme(val),
  };

  return (
    <ThemeContext.Provider value={context}>
      <div
        className="App"
        style={{
<<<<<<< HEAD
          background: context.theme.bgImage,
=======
          background:
            "linear-gradient(to left, " + context.theme.primary + ", " + context.theme.linGradH2 + ")",
>>>>>>> master
        }}
      >
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} />
        {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
        <div className="moodContainer">
          <AudioPlayer />
          <ThemeButtonContainer />
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/favorites" component={Favorites} />
            {/* Make sure this route is at the bottom */}
            <Route path="/:index" exact component={Home} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
