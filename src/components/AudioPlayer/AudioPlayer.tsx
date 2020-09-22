import React from "react";
import "./AudioPlayer.css";

interface properties {}

const AudioPlayer = (props: properties) => {
  return (
    <div className="audioPlayer">
      <audio controls autoPlay loop controlsList="nodownload">
        <source src={require("../../music/CornfieldChase.mp3")} type="audio/mpeg" />
        <source src={require("../../music/Time.mp3")} type="audio/mpeg" />
        <source src={require("../../music/DayOne.mp3")} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default AudioPlayer;
