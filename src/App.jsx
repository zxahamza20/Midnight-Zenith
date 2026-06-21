import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import spaceCards from './components/spaceCards';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forceFlipReset, setForceFlipReset] = useState(0);
  const [discoveredCardIds, setDiscoveredCardIds] = useState(new Set());
  const [isTransitioningFilter, setIsTransitioningFilter] = useState(false);
  const [isTransitioningCard, setIsTransitioningCard] = useState(false);

  const [userGuess, setUserGuess] = useState('');
  const [guessFeedback, setGuessFeedback] = useState(null); 

  // New states for shuffle management
  const [isShuffled, setIsShuffled] = useState(false);
  const [sequenceMap, setSequenceMap] = useState([]);

  const filteredCards = activeCategory === 'All' 
    ? spaceCards 
    : spaceCards.filter(card => card.category === activeCategory);

  // Generate sequence mapping whenever the deck layout filters or shuffles
  useEffect(() => {
    let indices = Array.from({ length: filteredCards.length }, (_, i) => i);
    if (isShuffled) {
      // Fisher-Yates Shuffle implementation
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
    }
    setSequenceMap(indices);
    setCurrentIndex(0); // Reset to the start of the new sequence order
  }, [activeCategory, isShuffled, filteredCards.length]);

  // Determine the actual card to show based on mapped sequence array
  const activeMappedIndex = sequenceMap[currentIndex] ?? 0;
  const currentCard = filteredCards[activeMappedIndex];
  const categoryList = ['All', ...new Set(spaceCards.map(card => card.category))];

  const handleNextCard = () => {
    if (currentIndex >= filteredCards.length - 1) return;
    
    setIsTransitioningCard(true);
    setUserGuess('');
    setGuessFeedback(null);
    setForceFlipReset(prev => prev + 1);

    setTimeout(() => {
      if (currentCard) {
        setDiscoveredCardIds(prev => new Set([...prev, currentCard.id]));
      }
      setCurrentIndex(prev => prev + 1);
      setIsTransitioningCard(false);
    }, 300);
  };

  const handlePrevCard = () => {
    if (currentIndex <= 0) return;

    setIsTransitioningCard(true);
    setUserGuess('');
    setGuessFeedback(null);
    setForceFlipReset(prev => prev + 1);

    setTimeout(() => {
      if (currentCard) {
        setDiscoveredCardIds(prev => new Set([...prev, currentCard.id]));
      }
      setCurrentIndex(prev => prev - 1);
      setIsTransitioningCard(false);
    }, 300);
  };

  const handleToggleShuffle = () => {
    setIsShuffled(prev => !prev);
  };

  const handleCategoryChange = (category) => {
    setIsTransitioningFilter(true);
    setForceFlipReset(prev => prev + 1);
    
    if (currentCard) {
      setDiscoveredCardIds(prev => new Set([...prev, currentCard.id]));
    }
    
    setUserGuess('');
    setGuessFeedback(null);
    
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioningFilter(false);
    }, 300);
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
        {filteredCards.length > 0 && currentCard ? (
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
              isTransitioningCard={isTransitioningCard}
              guessFeedback={guessFeedback}
            />

            <form className="guess-container" onSubmit={handleGuessSubmit}>
              <input
                type="text"
                className={`guess-input ${guessFeedback ? guessFeedback : ''}`}
                placeholder="Type your answer here..."
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

        <div className="navigation-controls">
          <button 
            className="nav-button prev-button" 
            onClick={handlePrevCard}
            disabled={currentIndex === 0}
            title="Previous Card"
          >
            ⭠
          </button>
          
          <button 
            className={`shuffle-button ${isShuffled ? 'shuffled-active' : ''}`}
            onClick={handleToggleShuffle}
            title={isShuffled ? "Disable Shuffle" : "Shuffle Deck"}
          >
            🔀 {isShuffled ? "Shuffle" : "Shuffle"}
          </button>

          <button 
            className="nav-button next-button" 
            onClick={handleNextCard}
            disabled={currentIndex >= filteredCards.length - 1}
            title="Next Card"
          >
            ⭢
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;