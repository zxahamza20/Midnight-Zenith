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

  const filteredCards = activeCategory === 'All' 
    ? spaceCards 
    : spaceCards.filter(card => card.category === activeCategory);

  const currentCard = filteredCards[currentIndex];
  
  const categoryList = ['All', ...new Set(spaceCards.map(card => card.category))];

  const handleNextCard = () => {
    setForceFlipReset(prev => prev + 1);

    setTimeout(() => {
      const currentPoolSize = activeCategory === 'All' 
        ? spaceCards.length 
        : spaceCards.filter(card => card.category === activeCategory).length;

      if (currentPoolSize > 0) {
        const currentFiltered = activeCategory === 'All' 
          ? spaceCards 
          : spaceCards.filter(card => card.category === activeCategory);

        setDiscoveredCardIds(prev => new Set([...prev, currentCard.id]));

        const randomIndex = Math.floor(Math.random() * currentPoolSize);
        setCurrentIndex(randomIndex);
      }
    }, 300);
  };

  const handleCategoryChange = (category) => {
    setIsTransitioningFilter(true);
    setForceFlipReset(prev => prev + 1);
    setDiscoveredCardIds(prev => new Set([...prev, currentCard.id]));
    setCurrentIndex(0);
    setActiveCategory(category);
    
    setTimeout(() => {
      setIsTransitioningFilter(false);
    }, 50);
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
          />
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