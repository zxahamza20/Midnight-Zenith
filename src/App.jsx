import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import spaceCards from './components/spaceCards';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forceFlipReset, setForceFlipReset] = useState(0);
  const [discoveredCardIds, setDiscoveredCardIds] = useState(new Set());
  const [masteredCardIds, setMasteredCardIds] = useState(new Set());
  const [isTransitioningFilter, setIsTransitioningFilter] = useState(false);
  const [isTransitioningCard, setIsTransitioningCard] = useState(false);

  const [userGuess, setUserGuess] = useState('');
  const [guessFeedback, setGuessFeedback] = useState(null); 

  // Streak states
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  // Shuffle management states
  const [isShuffled, setIsShuffled] = useState(false);
  const [sequenceMap, setSequenceMap] = useState([]);

  // 1. Filter out already mastered cards from the global card source pool
  const standardPoolCards = spaceCards.filter(card => !masteredCardIds.has(card.id));

  // 2. Filter remaining cards based on active category selection
  const filteredCards = activeCategory === 'All' 
    ? standardPoolCards 
    : standardPoolCards.filter(card => card.category === activeCategory);

  // Generate sequence mapping whenever the filtered card layout changes or toggles shuffle
  useEffect(() => {
    let indices = Array.from({ length: filteredCards.length }, (_, i) => i);
    if (isShuffled) {
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
    }
    setSequenceMap(indices);

    // Safeguard pointer boundaries if cards are dynamically extracted by mastery action
    setCurrentIndex(prevIndex => {
      if (filteredCards.length === 0) return 0;
      return prevIndex >= filteredCards.length ? filteredCards.length - 1 : prevIndex;
    });
  }, [activeCategory, isShuffled, filteredCards.length]);

  const activeMappedIndex = sequenceMap[currentIndex] ?? 0;
  const currentCard = filteredCards[activeMappedIndex];
  const categoryList = ['All', ...new Set(spaceCards.map(card => card.category))];

  // Helper method to count category-specific metrics explicitly
  const getCategoryMasteredCount = (category) => {
    return spaceCards.filter(card => masteredCardIds.has(card.id) && (category === 'All' || card.category === category)).length;
  };

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

    const cleanString = (str) => str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g,"").trim();
    const standardizedAnswer = cleanString(currentCard.answer);
    const standardizedUserGuess = cleanString(userGuess);

    if (standardizedUserGuess === standardizedAnswer || standardizedAnswer.includes(standardizedUserGuess)) {
      setGuessFeedback('correct');
      setCurrentStreak(prev => {
        const nextStreak = prev + 1;
        if (nextStreak > longestStreak) {
          setLongestStreak(nextStreak);
        }
        return nextStreak;
      });
    } else {
      setGuessFeedback('incorrect');
      setCurrentStreak(0);
    }
  };

  const handleMarkAsMastered = () => {
    if (!currentCard) return;
    setIsTransitioningCard(true);
    setUserGuess('');
    setGuessFeedback(null);
    setForceFlipReset(prev => prev + 1);

    setTimeout(() => {
      setMasteredCardIds(prev => new Set([...prev, currentCard.id]));
      setDiscoveredCardIds(prev => new Set([...prev, currentCard.id]));
      setIsTransitioningCard(false);
    }, 300);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Midnight Zenith</h1>
        <p className="description">
          Welcome to the highest point of cosmic trivia. Test your knowledge of the stellar void.
        </p>
        
        <div className="streak-tracker">
          <div className="streak-stat">
            <span className="streak-label">Current Streak:</span>
            <span className="streak-value current">{currentStreak} 🔥</span>
          </div>
          <div className="streak-stat">
            <span className="streak-label">Longest Streak:</span>
            <span className="streak-value longest">{longestStreak} 👑</span>
          </div>
        </div>

        <h3>total cards in deck: {spaceCards.length}</h3>
        <h3>
          {activeCategory.toLowerCase() === 'all' ? 'total' : activeCategory.toLowerCase()} pool: {filteredCards.length} cards remaining
        </h3>
        <div className="exploration-trackers-row">
          <p className="discovered-tracker">
            cosmic exploration: {discoveredCardIds.size} cards discovered
          </p>
          <p className="mastered-tracker">
            cosmic mastery ({activeCategory.toLowerCase()}): {getCategoryMasteredCount(activeCategory)} cards mastered
          </p>
        </div>
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

            <div className="action-row-container">
              <form className="guess-container" onSubmit={handleGuessSubmit}>
                <input
                  type="text"
                  className={`guess-input ${guessFeedback ? guessFeedback : ''}`}
                  placeholder="Type your answer here..."
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  disabled={guessFeedback === 'correct'}
                />
                <button type="submit" className="submit-guess-btn" disabled={guessFeedback === 'correct'}>
                  Submit Guess
                </button>
              </form>

              <button 
                type="button" 
                className="master-card-btn"
                onClick={handleMarkAsMastered}
                title="Mark this card as mastered and remove it from rotation"
              >
                🌌 Mark as Mastered
              </button>
            </div>
          </>
        ) : (
          <div className="empty-pool-message">
            🚀 All cosmic blueprints in this path have been mastered!
          </div>
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
            disabled={currentIndex >= filteredCards.length - 1 || filteredCards.length === 0}
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