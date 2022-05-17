import React from "react";
import classes from "./Hero.module.css";
import group from "../assets/Group 77.png";

function Hero() {
  return (
    <section className={classes.heroContainer}>
      <img src={group} alt="grupa" className={classes.heroPhoto} />
      <h1 className={classes.heroHeader}>Online Experiences</h1>
      <p className={classes.heroText}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
