import React, { useState } from 'react';
import './Card.css';

const Card = ({ question, answer, category }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" data-category={category} onClick={handleCardClick}>
      <div className="card-content">
        {isFlipped ? (
          <div className="card-back">
            <p className="answer-text">{answer}</p>
          </div>
        ) : (
          <div className="card-front">
            <span className="category-tag">{category}</span>
            <p className="question-text">{question}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
