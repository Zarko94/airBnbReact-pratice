import React from "react";
import logo from "../assets/logo192.png";

function Header() {
  return (
    <nav className="nav">
      <img src={logo} className="logo" />
      <h1>ReactFacts</h1>

      <h2 className="h2">React Course - Project 1</h2>
    </nav>
  );
}

export default Header;
