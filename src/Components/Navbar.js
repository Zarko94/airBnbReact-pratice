import React from "react";
import logo from "../assets/Vector.png";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <img src={logo} alt="logo" />
    </nav>
  );
}

export default Navbar;
