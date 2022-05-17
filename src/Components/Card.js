import React from "react";
import swimer from "../assets/image 12.png";
import star from "../assets/Star 1.png";
import classes from "./Card.module.css";
import DUMMY_DATA from "../dummy/dummy";

function Card() {
  const dummy = DUMMY_DATA;

  return dummy.map((data) => (
    <div className={classes.card} key={data.id}>
      <img src={data.img} alt={data.name} className={classes.cardImg} />
      <div className={classes.cardStats}>
        <img src={star} alt="star" className={classes.cardStar} />
        <span>{data.rate}</span>
        <span className={classes.gray}>({data.amount}) *</span>
        <span className={classes.gray}>{data.country}</span>
      </div>
      <p>{data.info}</p>
      <p>
        <b>From ${data.price} /</b> person
      </p>
    </div>
  ));
}

export default Card;
