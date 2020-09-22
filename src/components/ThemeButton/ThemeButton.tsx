import React from "react";
import { ThemeContext, themes } from "../../constants/Themes";

interface props {
  onClick: any;
}

function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div style={{ backgroundColor: appContext.themes.dark.primary }}>
            Name: {appContext.themes.dark.primary}
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}
/*
class ThemeButton extends React.Component<props, {}> {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <div className="ThemeButton">
        <button id="button" {...props} style={{ backgroundColor: theme.primary }} />
      </div>
    );
  }
}
ThemeButton.contextType = ThemeContext;
*/

export default ThemeButton;
