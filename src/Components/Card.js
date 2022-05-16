import React from "react";
import logo from "../assets/logo192.png";
import classes from "./Card-styles.module.css";
import {
  FaRegEnvelope,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import ButtonComponent from "./ButtonComponent";

function Card() {
  return (
    <div className={classes.cardContainer}>
      <img src={logo} alt="slika" />
      <h1>Zarko Milanovic</h1>
      <h4>Frontend Developer</h4>
      <p className={classes.website}>
        <a href="/">zarko.webiste</a>
      </p>
      <div className={classes.buttonsContainer}>
        <ButtonComponent>
          <FaRegEnvelope />
          Email
        </ButtonComponent>
        <ButtonComponent style={{ backgroundColor: "#5093E2" }}>
          <FaLinkedin />
          LinkedIn
        </ButtonComponent>
      </div>
      <div className={classes.aboutSection}>
        <h2>About</h2>
        <p>
          When you develop a mockup page or backend API is not ready for data
          fetching and you have to make Frontend Development with static data
          until it comes, react-lorem-ipsum will create your gibberish texts for
          you.
        </p>
        <h2>Interests</h2>
        <p>
          In addition to Lorem Ipsum text, you can generate random avatars,
          names, surnames, full names and usernames to fill the fields about
          users randomly.
        </p>
      </div>
      <div className={classes.socialNetworks}>
        <FaTwitterSquare />
        <FaFacebookSquare />
        <FaInstagram />
        <FaGithub />
      </div>
    </div>
  );
}

export default Card;
