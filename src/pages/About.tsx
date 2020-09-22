import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface properties {
  props: any;
}

const About = (props: properties) => {
  return (
    <div className="container">
      <h1>About</h1>
      <h1>ABOOOUT</h1>
      <div>
        <audio controls>
          <source src="Hans%20Zimmer%20-%20Time%20(Inception).mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  );
};

export default About;
