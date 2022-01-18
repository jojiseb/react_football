import React, { useState } from "react";
import heart from '../assets/heart-solid.svg';

const Card = (props) => {
  let [btnTextState, setBtnTextState] = useState("Add to Favourites");
  let [classState, setClassState] = useState("");

  const addToFavourites = () => {
    setBtnTextState((prev) => {
      return prev === "Add to Favourites" ? "Added" : "Add to Favourites";
    });
    setClassState((prev) => {
      return prev === "" ? "active" : "";
    });
  };

  //let heart = "https://cdn-icons-png.flaticon.com/512/833/833472.png";

  return (
    <div className={`card ${classState}`}>
      <img src={heart} alt="" className="icon" />
      <img src={props.cardContent.imgSrc} alt="" />
      <p>Name : {props.cardContent.name}</p>
      <p>Phone : {props.cardContent.phone}</p>
      <p>Email : {props.cardContent.email}</p>
      <button onClick={addToFavourites}>{btnTextState}</button>
    </div>
  );
};
export default Card;