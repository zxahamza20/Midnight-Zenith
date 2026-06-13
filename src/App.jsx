import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import spaceCards from './components/spaceCards';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forceFlipReset, setForceFlipReset] = useState(0);
  const [discoveredCardIds, setDiscoveredCardIds] = useState(new Set([spaceCards[0].id]));

  const filteredCards = activeCategory === 'All' 
    ? spaceCards 
    : spaceCards.filter(card => card.category === activeCategory);

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

        const randomIndex = Math.floor(Math.random() * currentPoolSize);
        setCurrentIndex(randomIndex);

        const nextCardId = currentFiltered[randomIndex].id;
        setDiscoveredCardIds(prev => new Set([...prev, nextCardId]));
      }
    }, 300);
  };

  const handleCategoryChange = (category) => {
    setForceFlipReset(prev => prev + 1);
    setCurrentIndex(0);
    setActiveCategory(category);

    const nextFiltered = category === 'All'
      ? spaceCards
      : spaceCards.filter(card => card.category === category);

    if (nextFiltered.length > 0) {
      setDiscoveredCardIds(prev => new Set([...prev, nextFiltered[0].id]));
    }
  };

  const currentCard = filteredCards[currentIndex];
  const categoryList = ['All', 'Solar System', 'Stars & Nebulae', 'Cosmology', 'Black Holes'];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Midnight Zenith</h1>
        <p className="description">
          Welcome to the highest point of cosmic trivia. Test your knowledge of the stellar void.
        </p>
        <h3>Total Cards in Deck: {spaceCards.length}</h3>
        <h3>{activeCategory === 'All' ? 'Total' : activeCategory} Deck: {filteredCards.length} Cards</h3>
        <p className="discovered-tracker">
          Cosmic Exploration: {discoveredCardIds.size} cards discovered
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