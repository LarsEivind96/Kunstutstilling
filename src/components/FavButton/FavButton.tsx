import React from "react";

interface ButtonProps {
  index: string;
  label: string;
}

interface ButtonState {}

class FavButton extends React.Component<ButtonProps, ButtonState> {
  // Save favorite
  saveFavorite = () => {
    localStorage.setItem("favorite", this.props.index);
  };

  render() {
    return (
      <button data-testid="favbut" className="FavButton" onClick={this.saveFavorite}>
        {this.props.label}
      </button>
    );
  }
}

export default FavButton;
