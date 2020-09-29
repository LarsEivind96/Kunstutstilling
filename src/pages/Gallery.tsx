import React from "react";
import "../App.css";
import SvgGallery from "../components/SvgGallery/SvgGallery";
import Svgs from "../svg/Svgs";

function Gallery() {
  return (
    <div className="PageContainer">
      <SvgGallery svgs={Svgs} />
    </div>
  );
}

export default Gallery;
