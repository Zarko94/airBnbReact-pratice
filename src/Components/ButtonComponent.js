import React from "react";
import classes from "./Button.module.css";

function ButtonComponent({ style, children }) {
  return (
    <button type="button" style={{ ...style }} className={classes.button}>
      {children}
    </button>
  );
}

export default ButtonComponent;
