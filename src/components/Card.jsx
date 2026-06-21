import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ 
  id, 
  question, 
  answer, 
  category, 
  image, 
  forceFlipReset, 
  difficulty, 
  discoveredCardIds, 
  isTransitioningFilter,
  isTransitioningCard,
  guessFeedback,
  hasSubmittedGuess // NEW DESTRUCTURED PROP
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [id, forceFlipReset]);

  const handleCardClick = () => {
    if (isTransitioningFilter || isTransitioningCard) return;
    
    // ENFORCED RULE: If they haven't submitted a guess, ignore the click!
    if (!hasSubmittedGuess) return; 

    setIsFlipped(!isFlipped);
  };

  const cardFeedbackClass = guessFeedback ? `feedback-${guessFeedback}` : '';
  const showFlipped = isFlipped && !isTransitioningFilter && !isTransitioningCard;

  return (
    <div 
      className={`card ${showFlipped ? 'is-flipped' : ''} ${
        isTransitioningFilter || isTransitioningCard ? 'suppress-flip' : ''
      } ${cardFeedbackClass} ${!hasSubmittedGuess ? 'locked-flip' : ''}`} // Added locked-flip CSS hook if needed
      data-category={category} 
      onClick={handleCardClick}
      title={!hasSubmittedGuess ? "Please submit a guess before revealing the answer!" : "Click to flip"}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-content">
            <div className="card-header-badges">
              {discoveredCardIds && discoveredCardIds.has(id) ? (
                <span className="discovered-badge">discovered</span>
              ) : (
                <span className="new-badge">New!</span>
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