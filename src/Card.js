import React from "react";
import "./Card.css";

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="front of the card" className="front" />
        <img
          src="/img/cover.png"
          alt="back of the card"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
