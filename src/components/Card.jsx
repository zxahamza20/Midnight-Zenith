import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({id, question, answer, category, image, forceFlipReset, difficulty, discoveredCardIds }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [question, forceFlipReset]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const isDiscovered = discoveredCardIds ? discoveredCardIds.has(id) : false;

  return (
    <div 
      className={`card ${isFlipped ? 'is-flipped' : ''}`} 
      data-category={category} 
      onClick={handleCardClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-content">

            <div className="card-header-badges">
              {isDiscovered && (
                <span className="discovered-badge">
                  Discovered
                </span>
              )}

              <span className="category-tag">{category}</span>
              
              {difficulty && (
                <span className={`difficulty-tag ${difficulty.toLowerCase()}`}>
                  {difficulty}
                </span>
              )}
            </div>

            {image && <img src={image} alt="Cosmic Clue" className="card-img" />}
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