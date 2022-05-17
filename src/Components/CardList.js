import React from "react";
import Card from "./Card";
import classes from "./CardList.module.css";

function CardList() {
  return (
    <div className={classes.cardList}>
      <Card />
    </div>
  );
}

export default CardList;
