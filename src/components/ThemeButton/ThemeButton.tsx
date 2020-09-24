import React from "react";
import { ThemeContext, themes } from "../../constants/Themes";

interface props {
  theme: any;
  name: string;
}

function ThemeButton(props: props) {
  return (
    <ThemeContext.Consumer>
      {(appContext) =>
        appContext && (
          <div>
            <button id="button" onClick={() => appContext.toggleTheme(props.theme)}>
              {props.name}
            </button>
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
