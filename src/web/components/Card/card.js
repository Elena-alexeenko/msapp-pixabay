import "./card.css";
import React from "react";

function Card(props) {
  function handleImageClick() {
    props.handleImageClick(props.card);
  }

  return (
    <button onClick={handleImageClick} className="card">
      <img
        className="card-image"
        alt={props.card.tags}
        src={props.card.webformatURL}
      />
    </button>
  );
}

export default Card;
