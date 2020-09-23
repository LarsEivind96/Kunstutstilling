import React from "react";

import "./DrawerToggleButton.css";

const drawerToggleButton = (props: any) => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" style={{ background: props.textColor }} />
    <div className="toggle-button__line" style={{ background: props.textColor }} />
    <div className="toggle-button__line" style={{ background: props.textColor }} />
  </button>
);

export default drawerToggleButton;
