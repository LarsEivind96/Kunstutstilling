import React from "react";

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
    if (currentFav == null) {
      console.log("første favoritt", localStorage.getItem("favorite"));
      const favoriteList = [this.props.index];
      localStorage.setItem("favorite", this.props.index);
      console.log(localStorage.getItem("favorite"));
    } else if (currentFav.length == 0) {
      localStorage.setItem("favorite", this.props.index);
      console.log("første favoritt");
    } else {
      if (currentFav.indexOf(clickedFav) > -1) {
        currentFav = currentFav.replace(clickedFav, "");
        localStorage.setItem("favorite", currentFav);
        console.log(clickedFav, "er fjernet fra lista");
      } else {
        currentFav = currentFav + clickedFav;
        console.log("new favorite", currentFav);
        localStorage.setItem("favorite", currentFav);
      }
    }
  };

  render() {
    return (
      <button
        data-testid="favbut"
        className="FavButton"
        onClick={this.saveFavorite}
      >
        {this.props.label}
      </button>
    );
  }
}

export default FavButton;
