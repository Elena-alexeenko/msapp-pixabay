import "./ImagesCard.css";
import React from "react";
import Card from "../Card/card";
import { useSelector } from "react-redux";

function ImagesCardList(props) {
  const { imagesToRender } = useSelector((state) => state);

  return (
    <section className="cardlist">
      <h3 className="title">{props.currentCategory.toUpperCase()}</h3>
      <p className="description">Click on the image to get more information</p>
      <div className="buttonsContainer">
        <button
          className={`cardButtons ${
            props.isPrevBtnDisabled && "cardButtonsDisabled"
          }`}
          onClick={props.handlePrevCLick}
          disabled={props.loading || props.isPrevBtnDisabled}
        >
          Prev
        </button>
        <button className="cardButtons" onClick={props.handleCategoryClick}>
          Change Category
        </button>
        <button
          className={`cardButtons ${
            props.isNextBtnDisabled && "cardButtonsdisabled"
          }`}
          onClick={props.handleNextCLick}
          disabled={props.loading || props.isNextBtnDisabled}
        >
          Next
        </button>
      </div>
      <div className="listImages">
        {imagesToRender.map((card) => (
          <li key={card.id}>
            <Card handleImageClick={props.handleImageClick} card={card} />
          </li>
        ))}
      </div>
    </section>
  );
}

export default ImagesCardList;
