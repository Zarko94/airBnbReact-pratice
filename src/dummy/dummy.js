import React from "react";
import swimer from "../assets/image 12.png";
import weding from "../assets/wedding-photography 1.png";
import bike from "../assets/mountain-bike 1.png";

const DUMMY_DATA = [
  {
    id: 1,
    img: swimer,
    name: "swimer",
    rate: 5.0,
    amount: 6,
    info: "Life lessons with Katie Zaferes",
    price: 136,
    country: "Serbia",
  },
  {
    id: 2,
    name: "wedding",
    img: weding,
    rate: 4.0,
    amount: 30,
    info: "Learn wedding photography",
    price: 125,
    country: "Crna gora",
  },
  {
    id: 3,
    name: "bycycle",
    img: bike,
    rate: 4.8,
    amount: 2,
    info: "Group Mountain Biking",
    price: 50,
    country: "Bosna",
  },
];
export default DUMMY_DATA;
