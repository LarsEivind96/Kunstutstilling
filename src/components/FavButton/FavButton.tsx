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
    var buttonColor;
    console.log(this.props.index);
    var currentFav = localStorage.getItem("favorite");
    const clickedFav = this.props.index;
    if (currentFav === null) {
      //endre farge til "favoritt-farge"
      buttonColor = "red";
      console.log("første favoritt", localStorage.getItem("favorite"));
      const favoriteList = [this.props.index];
      localStorage.setItem("favorite", this.props.index);
      console.log(localStorage.getItem("favorite"));
    } else if (currentFav.length == 0) {
      //endre farge til "favoritt-farge"
      buttonColor = "red";
      localStorage.setItem("favorite", this.props.index);
      console.log("første favoritt");
    } else {
      if (currentFav.indexOf(clickedFav) > -1) {
        //reversere fargeendring
        buttonColor = "white";
        currentFav = currentFav.replace(clickedFav, "");
        localStorage.setItem("favorite", currentFav);
        console.log(clickedFav, "er fjernet fra lista");
      } else {
        //endre farge til "favoritt-farge"
        buttonColor = "red";
        currentFav = currentFav + clickedFav;
        console.log("new favorite", currentFav);
        localStorage.setItem("favorite", currentFav);
      }
    }
    this.forceUpdate();
  };

  render() {
    var buttonColor;
    if (localStorage.getItem("favorite")?.includes(this.props.index)) {
      buttonColor = "red";
    }
    return (
      <div className="FavButton">
        <button
          id="favbutton"
          data-testid="favbut"
          className="FavButton3"
          onClick={this.saveFavorite}
          style={{ color: buttonColor }}
        >
          &#10084;
        </button>
      </div>
    );
  }
}

export default FavButton;
