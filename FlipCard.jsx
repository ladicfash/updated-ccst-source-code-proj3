import React from 'react';
import './FlipCard.css';

const FlipCard = ({ question, answer, hint, showAnswer, onCardClick }) => {
  return (
    <div className={`card ${showAnswer ? 'flipped' : ''}`} onClick={onCardClick}>
      <div className="card-front">
        {question}
        <p><strong>Hint:</strong> {hint}</p>
      </div>
      <div className="card-back">
        {answer}
      </div>
    </div>
  );
};

export default FlipCard;