import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";

function Gallery() {
  return (
    <div className="container">
      <h1>Gallery</h1>
      <GalleryGrid />
    </div>
  );
}

export default Gallery;
