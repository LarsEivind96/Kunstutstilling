import React from "react";
import "./SvgGallery.css";
import { ThemeContext } from "../../constants/Themes";
import { Link } from "react-router-dom";

interface Props {
  svgs: any;
}

const SvgGallery = (props: Props) => {
  const gridSvgs = props.svgs;

  const Iitem = (props: any) => (
    <Link
      className="galleryitem"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        display: "grid",
      }}
      to={props.link}
    >
      <img height="80%" width="70%" src={props.svgObject.svg} alt="" />
      {props.svgObject.name}
    </Link>
  );

  const ListItems = (props: any) => (
    <div className="gallerycontainer">
      {props.svgs.map((svgObject: any) => (
        <Iitem
          key={svgObject.index}
          link={"/" + svgObject.index}
          i={svgObject.index}
          svgObject={svgObject}
          bgColor={props.bgColor}
          color={props.color}
        />
      ))}
    </div>
  );

  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div>
            <ListItems bgColor={appContext.theme.secondary} color={appContext.theme.text} svgs={gridSvgs} />
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default SvgGallery;
