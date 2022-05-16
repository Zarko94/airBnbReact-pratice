import React from "react";
import classes from "./CardContainer.module.css";
import Card from "./Card";

function CardContainer() {
  return (
    <div className={classes.cardContainer}>
      <Card />
    </div>
  );
}

export default CardContainer;
