import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./GalleryGrid.css";
import "../TempSVG/temp.svg";

const gallerygrid = (props: any) => (
  <div className="gallerycontainer">
    <div className="galleryitem">
      <div className="galleryimage"></div>
      svg1
    </div>
    <div className="galleryitem">
      <img
        height="80%"
        width="70%"
        src="https://i.pinimg.com/236x/33/72/7d/33727d49449f596b3416cd4d5a314ad9--memes.jpg"
      />
      svg2
    </div>
    <div className="galleryitem">
      <img
        height="80%"
        width="70%"
        src="https://i.kym-cdn.com/photos/images/newsfeed/000/954/161/b3a.jpg"
      />
      svg3
    </div>
    <div className="galleryitem">
      <img
        height="80%"
        width="70%"
        src="https://www.demilked.com/magazine/wp-content/uploads/2018/03/5aaa1ce36b9c8-funny-weird-wtf-stock-photos-coverimage.jpg"
      />
      svg4
    </div>
    <div className="galleryitem">
      <img
        height="80%"
        width="70%"
        src="https://cdn.business2community.com/wp-content/uploads/2015/10/42454567_m.jpg.jpg"
      />
      svg5
    </div>
    <div className="galleryitem">
      <img
        height="80%"
        width="70%"
        src="https://i.kym-cdn.com/photos/images/original/001/537/603/603.jpg"
      />
      svg6
    </div>
    <div className="galleryitem">
      <img
        height="80%"
        width="70%"
        src="https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-18-5a39260c08f8a__700.jpg"
      />
      svg7
    </div>
    <div className="galleryitem">
      <img
        height="80%"
        width="70%"
        src="https://pbs.twimg.com/media/DoQGxT6W0AAPred.png"
      />
      svg8
    </div>
    <div className="galleryitem">
      <img
        height="80%"
        width="70%"
        src="https://www.awesomeinventions.com/wp-content/uploads/2018/03/dressed-chicken-dancing-on-top-of-the-world-weird-stock-photos.jpg"
      />
      svg9
    </div>
  </div>
);

export default gallerygrid;
