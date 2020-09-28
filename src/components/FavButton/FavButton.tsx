import React from "react";
import "./FavButton.css";

interface ButtonProps {
  index: string;
  label: string;
}

interface ButtonState {}

class FavButton extends React.Component<ButtonProps, ButtonState> {
  // Save favorite
  saveFavorite = () => {
    var currentFav = localStorage.getItem("favorite");
    const clickedFav = this.props.index;
    if (currentFav === null) {
      localStorage.setItem("favorite", this.props.index);
    } else if (currentFav.length === 0) {
      localStorage.setItem("favorite", this.props.index);
    } else {
      if (currentFav.indexOf(clickedFav) > -1) {
        currentFav = currentFav.replace(clickedFav, "");
        localStorage.setItem("favorite", currentFav);
      } else {
        currentFav = currentFav + clickedFav;
        localStorage.setItem("favorite", currentFav);
      }
    }
    this.forceUpdate();
  };

  render() {
    let buttonColor;
    if (localStorage.getItem("favorite")?.includes(this.props.index)) {
      buttonColor = "red";
    }
    return (
      <button
        id="favbutton"
        data-testid="favbut"
        className="FavButton"
        onClick={this.saveFavorite}
        style={{ color: buttonColor }}
      >
        &#10084;
      </button>
    );
  }
}

export default FavButton;
