import React from "react";
import { ThemeContext } from "../../constants/Themes";

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
            <button
              id="button"
              style={{ color: appContext.theme.text, backgroundColor: appContext.theme.secondary }}
              onClick={() => {
                appContext.toggleTheme(props.theme);
                sessionStorage.setItem("theme", JSON.stringify(props.theme));
              }}
            >
              {props.name}
            </button>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default ThemeButton;
