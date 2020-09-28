import React from "react";
import "./AudioPlayer.css";
import { ThemeContext } from "../../constants/Themes";

interface properties {}

const AudioPlayer = (props: properties) => {
  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div className="audioPlayer">
            <audio controls autoPlay controlsList="nodownload">
              <source src={require("../../constants/music/Time.mp3")} type="audio/mpeg" />
              <source src={require("../../constants/music/CornfieldChase.mp3")} type="audio/mpeg" />
              <source src={require("../../constants/music/DayOne.mp3")} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default AudioPlayer;
