import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ question, answer, category, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [question]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`card ${isFlipped ? 'is-flipped' : ''}`} 
      data-category={category} 
      onClick={handleCardClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-content">
            <span className="category-tag">{category}</span>
            {image && <img src={image} alt="Cosmic Visual clue" className="card-img" />}
            <p className="question-text">{question}</p>
          </div>
        </div>

        <div className="card-back">
          <div className="card-content">
            <p className="answer-text">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
