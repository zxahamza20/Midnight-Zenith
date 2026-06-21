import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import spaceCards from './components/spaceCards'; 

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forceFlipReset, setForceFlipReset] = useState(0);
  const [discoveredCardIds, setDiscoveredCardIds] = useState(new Set());
  const [isTransitioningFilter, setIsTransitioningFilter] = useState(false);

  const [userGuess, setUserGuess] = useState('');
  const [guessFeedback, setGuessFeedback] = useState(null); 

  const filteredCards = activeCategory === 'All' 
    ? spaceCards 
    : spaceCards.filter(card => card.category === activeCategory);

  const currentCard = filteredCards[currentIndex];
  const categoryList = ['All', ...new Set(spaceCards.map(card => card.category))];

  const handleNextCard = () => {
    setUserGuess('');
    setGuessFeedback(null);
    setForceFlipReset(prev => prev + 1);

    if (filteredCards.length > 0) {
      setDiscoveredCardIds(prev => new Set([...prev, currentCard.id]));
      
      const randomIndex = Math.floor(Math.random() * filteredCards.length);
      setCurrentIndex(randomIndex);
    }
  };

  const handleCategoryChange = (category) => {
    setIsTransitioningFilter(true);
    setForceFlipReset(prev => prev + 1);
    
    if (currentCard) {
      setDiscoveredCardIds(prev => new Set([...prev, currentCard.id]));
    }
    
    setUserGuess('');
    setGuessFeedback(null);
    
    setCurrentIndex(0);
    setActiveCategory(category);
    
    setTimeout(() => {
      setIsTransitioningFilter(false);
    }, 50);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (!userGuess.trim() || !currentCard) return;

    const standardizedAnswer = currentCard.answer.toLowerCase().trim();
    const standardizedUserGuess = userGuess.toLowerCase().trim();

    if (standardizedUserGuess === standardizedAnswer || standardizedAnswer.includes(standardizedUserGuess)) {
      setGuessFeedback('correct');
    } else {
      setGuessFeedback('incorrect');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Midnight Zenith</h1>
        <p className="description">
          Welcome to the highest point of cosmic trivia. Test your knowledge of the stellar void.
        </p>
        <h3>total cards in deck: {spaceCards.length}</h3>
        <h3>
          {activeCategory.toLowerCase() === 'all' ? 'total' : activeCategory.toLowerCase()} deck: {filteredCards.length} cards
        </h3>
        <p className="discovered-tracker">
          cosmic exploration: {discoveredCardIds.size} cards discovered
        </p>
      </header>

      <div className="category-filters">
        {categoryList.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            data-cat={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <main className="card-area">
        {filteredCards.length > 0 ? (
          <>
            <Card
              id={currentCard.id}
              question={currentCard.question}
              answer={currentCard.answer}
              category={currentCard.category}
              image={currentCard.image}
              forceFlipReset={forceFlipReset} 
              difficulty={currentCard.difficulty}
              discoveredCardIds={discoveredCardIds}
              isTransitioningFilter={isTransitioningFilter}
              guessFeedback={guessFeedback}
            />

            <form className="guess-container" onSubmit={handleGuessSubmit}>
              <input
                type="text"
                className={`guess-input ${guessFeedback ? guessFeedback : ''}`}
                placeholder="Type your cosmic guess here..."
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                disabled={guessFeedback === 'correct'}
              />
              <button type="submit" className="submit-guess-btn">
                Submit Guess
              </button>
            </form>
          </>
        ) : (
          <div style={{ color: '#94A3B8', padding: '40px' }}>No cards available.</div>
        )}

        <button className="next-button" onClick={handleNextCard}>
          ⭢
        </button>
      </main>
    </div>
  );
}

export default App;