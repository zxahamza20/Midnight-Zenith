import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import spaceCards from './components/spaceCards';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forceFlipReset, setForceFlipReset] = useState(0);

  const filteredCards = activeCategory === 'All' 
    ? spaceCards 
    : spaceCards.filter(card => card.category === activeCategory);

  const handleNextCard = () => {
    // 1. Instantly trigger the card component to flip back to its front side
    setForceFlipReset(prev => prev + 1);

    // 2. Wait 300ms for the animation halfway point before changing the card data index
    setTimeout(() => {
      // Direct on-the-fly length check of whichever group is currently selected
      const currentPoolSize = activeCategory === 'All' 
        ? spaceCards.length 
        : spaceCards.filter(card => card.category === activeCategory).length;

      if (currentPoolSize > 0) {
        const randomIndex = Math.floor(Math.random() * currentPoolSize);
        setCurrentIndex(randomIndex);
      }
    }, 300);
  };

  const handleCategoryChange = (category) => {
    // Smoothly toggle the card view forward
    setForceFlipReset(prev => prev + 1);
    
    // Always force the array position back to index 0 FIRST, then swap the string value 
    // to ensure React safely remains focused on valid, active card structures
    setCurrentIndex(0);
    setActiveCategory(category);
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
            question={currentCard.question}
            answer={currentCard.answer}
            category={currentCard.category}
            image={currentCard.image}
            forceFlipReset={forceFlipReset} 
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