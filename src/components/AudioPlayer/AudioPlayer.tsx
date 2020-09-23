import React from "react";
import "./AudioPlayer.css";

interface properties {}

const AudioPlayer = (props: properties) => {
  return (
    <div className="audioPlayer">
      <audio controls loop controlsList="nodownload">
        <source src={require("../../constants/music/CornfieldChase.mp3")} type="audio/mpeg" />
        <source src={require("../../constants/music/Time.mp3")} type="audio/mpeg" />
        <source src={require("../../constants/music/DayOne.mp3")} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default AudioPlayer;
